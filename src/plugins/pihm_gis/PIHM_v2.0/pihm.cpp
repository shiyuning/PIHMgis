/*******************************************************************************
 * File        : pihm.c                                                        *
 * Version     : Nov, 2007 (2.0)                                               *
 * Developer of PIHM2.0:        Mukesh Kumar (muk139@psu.edu)                  *
 * Developer of PIHM1.0:        Yizhong Qu   (quyizhong@gmail.com)             *
 *-----------------------------------------------------------------------------*
 *                                                                             *
 *..............MODIFICATIONS/ADDITIONS in PIHM 2.0............................*
 * a) All modifications in physical process representations  in this version   *
 *    are listed as header in f.c and is_sm_et.c.     			       *
 * b) All addition/modifications in variable and structure definition/declarat-*
 *    -ion are listed as header in read_alloc.c and initialize.c	       *
 * c) 3 new input files have been added for geology, landcover and calibration *
 *    data								       *
 * d) Ported to Sundials 2.1.0                                                 *
 *-----------------------------------------------------------------------------*
 *                                                                             *
 * PIHM is an integrated finite volume based hydrologic model. It simulates    * 
 * channel routing, overland flow, groundwater flow, macropore based infiltra- *
 * tion and stormflow, throughfall, evaporation from overlandflow-subsurface-  *
 * canopy, transpiration and  snowmelt by full coupling of processes.          * 
 * It uses semi-discrete finite volume approach to discretize PDEs into ODEs,  * 
 * and henceforth solving the global system of ODEs using CVODE. Global ODEs   *
 * are created in f.c. Any modifications in the process equations has to be    *
 * performed in f.c
 *                                                                             *
 *-----------------------------------------------------------------------------*
 * For questions or comments, please contact                                   *
 *      --> Mukesh Kumar (muk139@psu.edu)                                      *
 *      --> Prof. Chris Duffy (cxd11@psu.edu)                                  *
 * This code is free for research purpose only.                                *
 * Please provide relevant references if you use this code in your research work*
 *-----------------------------------------------------------------------------*
 *									       *
 * DEVELOPMENT RELATED REFERENCES:					       *
 * PIHM2.0:								       *
 *	a) Kumar, M., 2008, "Development and Implementation of a Multiscale,   *
 *	Multiprocess Hydrologic Model". PhD Thesis, Penn State University      *
 *	b) Kumar, M, G.Bhatt & C.Duffy, "Coupling of Data and Processes in     *
 *	Mesoscale Watershed", Advances in Water Resources (submitted)          *
 * PIHM1.0:								       *
 *	a) Qu, Y., 2005, "An Integrated hydrologic model for multiproces       *
 *	simulation using semi-discrete finite volume approach".PhD Thesis, PSU *
 *	b) Qu, Y. & C. Duffy, 2007, "A semidiscrete finite volume formulation  *
 *	for multiprocess watershed simulation". Water Resources Research       *
 *-----------------------------------------------------------------------------*
 * LICENSE: 
 *******************************************************************************/



#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <time.h>

/* SUNDIAL Header Files */
#include "sundials_types.h"   /* realtype, integertype, booleantype defination */
#include "cvode.h"           /* CVODE header file                             */
#include "cvode_spgmr.h"         /* CVSPGMR linear header file                    */
#include "sundials_smalldense.h"      /* use generic DENSE linear solver for "small"   */
#include "nvector_serial.h"  /* contains the definition of type N_Vector      */
#include "sundials_math.h"    /* contains UnitRoundoff, RSqrt, SQR functions   */
#include "cvode_dense.h"         /* CVDENSE header file                           */
#include "sundials_dense.h"           /* generic dense solver header file              */
#include "pihm.h"            /* Data Model and Variable Declarations     */
#include "is_sm_et.h"
#include "update.h"
#include <iostream>
#include <fstream>
#include <QtGui>
#include <QtGui/QProgressBar>^M
#include "progress.h"

#define UNIT_C 1440	     /* Unit Conversions */	


using namespace std;

/* Function Declarations */
int initialize(char *, Model_Data, Control_Data *, N_Vector);
/* Function to calculate right hand side of ODE systems */
int f(realtype, N_Vector, N_Vector, void *);
void read_alloc(char *, Model_Data, Control_Data *);	/* Variable definition */

void PrintData(FILE **,Control_Data *, Model_Data, N_Vector, realtype);

/* Main Function */
int pihm(int argc, char **argv, QProgressBar* bar, QString logFileName, int* RunFlag)
	{  
	char tmpLName[20],tmpFName[400];	/* rivFlux File names */
  	Model_Data mData;               /* Model Data                */
  	Control_Data cData;             /* Solver Control Data       */
  	N_Vector CV_Y;                  /* State Variables Vector    */
  	void *cvode_mem;                /* Model Data Pointer        */
  	int flag;                       /* flag to test return value */
  	FILE *Ofile[22];           	/* Output file     */
	char *ofn[22];
	FILE *iproj;			/* Project File */
  	int N;                          /* Problem size              */
  	int i,j,k;                      /* loop index                */
  	realtype t;    			/* simulation time           */
  	realtype NextPtr, StepSize;     /* stress period & step size */
  	clock_t start, end_r, end_s;    /* system clock at points    */
  	realtype cputime_r, cputime_s;  /* for duration in realtype  */
	char *filename;

	/* Project Input Name */
	if(argc!=2)
		{
		iproj=fopen("projectName.txt","r");
		if(iproj==NULL)
			{
			printf("\t\nUsage ./pihm project_name");
			printf("\t\n         OR              ");
			printf("\t\nUsage ./pihm, and have a file in the current directory named projectName.txt with the project name in it");
			exit(0);
			}
		else
			{
			fscanf(iproj,"%s",filename);
			}
		}
	else
		{
  		/* get user specified file name in command line */
    		filename = (char *)malloc(strlen(argv[1])*sizeof(char));
		strcpy(filename,argv[1]);
		cout<<filename<<"\n";
		}
	/* Open Output Files */
	ofn[0] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[0], filename);
	Ofile[0]=fopen(strcat(ofn[0], ".GW.txt"),"w");
	cout<<ofn[0]<<"\n";
	ofn[1] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[1], filename);
	Ofile[1]=fopen(strcat(ofn[1], ".surf.txt"),"w");
	ofn[2] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[2], filename);
	Ofile[2]=fopen(strcat(ofn[2], ".et0.txt"),"w");
	ofn[3] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[3], filename);
	Ofile[3]=fopen(strcat(ofn[3], ".et1.txt"),"w");
	ofn[4] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[4], filename);
	Ofile[4]=fopen(strcat(ofn[4], ".et2.txt"),"w");
	ofn[5] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[5], filename);
	Ofile[5]=fopen(strcat(ofn[5], ".is.txt"),"w");
	ofn[6] = (char *)malloc((strlen(filename)+10)*sizeof(char));
	strcpy(ofn[6], filename);
	Ofile[6]=fopen(strcat(ofn[6], ".snow.txt"),"w");
	        cout<<ofn[6]<<"\n";

	for(i=0;i<11;i++)
		{
		sprintf(tmpLName,".rivFlx%d.txt",i);
		strcpy(tmpFName,filename);
                        cout<<tmpFName<<"\n";
		strcat(tmpFName,tmpLName);
		        cout<<tmpFName<<"\n";
		Ofile[7+i]=fopen(tmpFName,"w");
		}
	//cout<<ofn[17]<<"\n";	
	ofn[18] = (char *)malloc((strlen(filename)+15)*sizeof(char));
	strcpy(ofn[18], filename);
	Ofile[18]=fopen(strcat(ofn[18], ".stage.txt"),"w");
	ofn[19] = (char *)malloc((strlen(filename)+15)*sizeof(char));
	strcpy(ofn[19], filename);
	Ofile[19]=fopen(strcat(ofn[19], ".unsat.txt"),"w");
	ofn[20] = (char *)malloc((strlen(filename)+15)*sizeof(char));
	strcpy(ofn[20], filename);
	Ofile[20]=fopen(strcat(ofn[20], ".Rech.txt"),"w");

  	/* allocate memory for model data structure */
  	mData = (Model_Data)malloc(sizeof *mData);
  
  	printf("\n ...  PIHM 2.0 is starting ... \n");
 
 	/* read in 9 input files with "filename" as prefix */
  	read_alloc(filename, mData, &cData); 

/*	if(mData->UnsatMode ==1)
		{    
  		} */
	if(mData->UnsatMode ==2)
		{    
  		/* problem size */
  		N = 3*mData->NumEle + 2*mData->NumRiv;
		mData->DummyY=(realtype *)malloc((3*mData->NumEle+2*mData->NumRiv)*sizeof(realtype));
  		}  	
  	/* initial state variable depending on machine*/
  	CV_Y = N_VNew_Serial(N);
  
  	/* initialize mode data structure */
  	int BoolR = initialize(filename, mData, &cData, CV_Y);
		ofstream log;
		if(cData.FillEleSurf==1){
		        log.open(qPrintable(logFileName), ios::app);
		        log<<"Filling Surface Sink Elements...<br>";
        		log.close();
		}
		if(cData.FillEleSub==1){
                        log.open(qPrintable(logFileName), ios::app);
                        log<<"Filling Subsurface Sink Elements...<br>";
                        log.close();
                }
		if(BoolR==1){
                        log.open(qPrintable(logFileName), ios::app);
                        log<<"WARNING: River Elevation Correction may be needed...<br>";
                        log.close();
                }
		
  	printf("\nSolving ODE system ... \n");
  
  	/* allocate memory for solver */
  	cvode_mem = CVodeCreate(CV_BDF, CV_NEWTON);
  	if(cvode_mem == NULL) {printf("CVodeMalloc failed. \n"); return(1);}
  
  	flag = CVodeSetFdata(cvode_mem, mData);  
  	flag = CVodeSetInitStep(cvode_mem,cData.InitStep);
  	flag = CVodeSetStabLimDet(cvode_mem,TRUE);  
  	flag = CVodeSetMaxStep(cvode_mem,cData.MaxStep); 
  	flag = CVodeMalloc(cvode_mem, f, cData.StartTime, CV_Y, CV_SS, cData.reltol, &cData.abstol);  
  	flag = CVSpgmr(cvode_mem, PREC_NONE, 0);
  	flag = CVSpilsSetGSType(cvode_mem, MODIFIED_GS);
  
  	/* set start time */
  	t = cData.StartTime;
  	start = clock();

  	/* start solver in loops */
  	for(i=0; i<cData.NumSteps; i++)
  		{
		cout<<"i= "<<i<<" RunFlag= "<<*RunFlag<<"\n";
		if(*RunFlag == 0)
			return 0;
	/*	if (cData.Verbose != 1)
    			{
      			printf("  Running: %-4.1f%% ... ", (100*(i+1)/((realtype) cData.NumSteps))); 
      			fflush(stdout);
    			} */
    		/* inner loops to next output points with ET step size control */
    		while(t < cData.Tout[i+1])
    			{
      			if (t + cData.ETStep >= cData.Tout[i+1])
      				{
        			NextPtr = cData.Tout[i+1];
      				}
      			else
      				{
        			NextPtr = t + cData.ETStep;
      				}
      			StepSize = NextPtr - t; 
      
      			/* calculate Interception Storage */
      			is_sm_et(t, StepSize, mData,CV_Y);
			printf("\n Tsteps = %f ",t);
      			flag = CVode(cvode_mem, NextPtr, CV_Y, &t, CV_NORMAL);
			if(100.0*(1.0+i)/((realtype) cData.NumSteps) - (int)(100.0*(1.0+i)/((realtype) cData.NumSteps)) == 0){
				cout<<100*(i+1)/((realtype) cData.NumSteps)<<"\n";
				setProgressBar(bar, 100*(i+1)/((realtype) cData.NumSteps));
			} 
			update(t, mData);
    			}
		PrintData(Ofile,&cData,mData, CV_Y,t);
  		}
   	/* Free memory */
  	N_VDestroy_Serial(CV_Y);
  	/* Free integrator memory */
  	//CVodeFree(cvode_mem);
  	free(mData);
	QMessageBox::information(0,"Run PIHM","Simulation Completed Successfully!",QMessageBox::Ok);
  	return 0;
	}

