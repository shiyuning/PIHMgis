/********************************************************************************
** Form generated from reading ui file 'runallraster.ui'
**
** Created: Tue Jul 27 23:38:16 2010
**      by: Qt User Interface Compiler version 4.3.2
**
** WARNING! All changes made in this file will be lost when recompiling ui file!
********************************************************************************/

#ifndef UI_RUNALLRASTER_H
#define UI_RUNALLRASTER_H

#include <Qt3Support/Q3TextBrowser>
#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QCheckBox>
#include <QtGui/QDialog>
#include <QtGui/QGroupBox>
#include <QtGui/QLabel>
#include <QtGui/QLineEdit>
#include <QtGui/QPushButton>

class Ui_RunAllRaster
{
public:
    QGroupBox *groupBox;
    QLineEdit *lineEditDEM;
    QLabel *label;
    QLabel *label_2;
    QLineEdit *lineEditThreshold;
    QPushButton *pushButtonDEM;
    QPushButton *pushButtonSuggestMe;
    QGroupBox *groupBox_2;
    QLabel *label_3;
    QLabel *label_4;
    QLineEdit *lineEditStream;
    QLineEdit *lineEditWatershed;
    QPushButton *pushButtonStream;
    QPushButton *pushButtonWatershed;
    QCheckBox *checkBoxVector;
    QCheckBox *checkBoxRaster;
    QGroupBox *groupBox_3;
    QPushButton *pushButtonHelp;
    QPushButton *pushButtonClose;
    QPushButton *pushButtonRun;
    Q3TextBrowser *textBrowser;

    void setupUi(QDialog *RunAllRaster)
    {
    if (RunAllRaster->objectName().isEmpty())
        RunAllRaster->setObjectName(QString::fromUtf8("RunAllRaster"));
    RunAllRaster->resize(595, 475);
    groupBox = new QGroupBox(RunAllRaster);
    groupBox->setObjectName(QString::fromUtf8("groupBox"));
    groupBox->setGeometry(QRect(12, 6, 571, 111));
    lineEditDEM = new QLineEdit(groupBox);
    lineEditDEM->setObjectName(QString::fromUtf8("lineEditDEM"));
    lineEditDEM->setGeometry(QRect(119, 34, 321, 22));
    label = new QLabel(groupBox);
    label->setObjectName(QString::fromUtf8("label"));
    label->setGeometry(QRect(20, 37, 61, 17));
    label_2 = new QLabel(groupBox);
    label_2->setObjectName(QString::fromUtf8("label_2"));
    label_2->setGeometry(QRect(20, 77, 291, 17));
    lineEditThreshold = new QLineEdit(groupBox);
    lineEditThreshold->setObjectName(QString::fromUtf8("lineEditThreshold"));
    lineEditThreshold->setGeometry(QRect(326, 75, 113, 22));
    pushButtonDEM = new QPushButton(groupBox);
    pushButtonDEM->setObjectName(QString::fromUtf8("pushButtonDEM"));
    pushButtonDEM->setGeometry(QRect(450, 30, 113, 32));
    pushButtonSuggestMe = new QPushButton(groupBox);
    pushButtonSuggestMe->setObjectName(QString::fromUtf8("pushButtonSuggestMe"));
    pushButtonSuggestMe->setGeometry(QRect(450, 71, 113, 32));
    pushButtonSuggestMe->setAutoDefault(false);
    pushButtonSuggestMe->setDefault(false);
    groupBox_2 = new QGroupBox(RunAllRaster);
    groupBox_2->setObjectName(QString::fromUtf8("groupBox_2"));
    groupBox_2->setGeometry(QRect(12, 116, 571, 144));
    label_3 = new QLabel(groupBox_2);
    label_3->setObjectName(QString::fromUtf8("label_3"));
    label_3->setGeometry(QRect(20, 43, 61, 17));
    label_4 = new QLabel(groupBox_2);
    label_4->setObjectName(QString::fromUtf8("label_4"));
    label_4->setGeometry(QRect(20, 83, 81, 17));
    lineEditStream = new QLineEdit(groupBox_2);
    lineEditStream->setObjectName(QString::fromUtf8("lineEditStream"));
    lineEditStream->setGeometry(QRect(118, 40, 321, 22));
    lineEditWatershed = new QLineEdit(groupBox_2);
    lineEditWatershed->setObjectName(QString::fromUtf8("lineEditWatershed"));
    lineEditWatershed->setGeometry(QRect(118, 80, 321, 22));
    pushButtonStream = new QPushButton(groupBox_2);
    pushButtonStream->setObjectName(QString::fromUtf8("pushButtonStream"));
    pushButtonStream->setGeometry(QRect(450, 37, 113, 32));
    pushButtonWatershed = new QPushButton(groupBox_2);
    pushButtonWatershed->setObjectName(QString::fromUtf8("pushButtonWatershed"));
    pushButtonWatershed->setGeometry(QRect(450, 76, 113, 32));
    checkBoxVector = new QCheckBox(groupBox_2);
    checkBoxVector->setObjectName(QString::fromUtf8("checkBoxVector"));
    checkBoxVector->setGeometry(QRect(280, 113, 141, 20));
    checkBoxVector->setChecked(true);
    checkBoxRaster = new QCheckBox(groupBox_2);
    checkBoxRaster->setObjectName(QString::fromUtf8("checkBoxRaster"));
    checkBoxRaster->setGeometry(QRect(117, 113, 161, 20));
    groupBox_3 = new QGroupBox(RunAllRaster);
    groupBox_3->setObjectName(QString::fromUtf8("groupBox_3"));
    groupBox_3->setGeometry(QRect(12, 270, 571, 51));
    pushButtonHelp = new QPushButton(groupBox_3);
    pushButtonHelp->setObjectName(QString::fromUtf8("pushButtonHelp"));
    pushButtonHelp->setGeometry(QRect(10, 11, 113, 32));
    pushButtonClose = new QPushButton(groupBox_3);
    pushButtonClose->setObjectName(QString::fromUtf8("pushButtonClose"));
    pushButtonClose->setGeometry(QRect(320, 11, 113, 32));
    pushButtonRun = new QPushButton(groupBox_3);
    pushButtonRun->setObjectName(QString::fromUtf8("pushButtonRun"));
    pushButtonRun->setGeometry(QRect(450, 11, 113, 32));
    pushButtonRun->setDefault(true);
    textBrowser = new Q3TextBrowser(RunAllRaster);
    textBrowser->setObjectName(QString::fromUtf8("textBrowser"));
    textBrowser->setGeometry(QRect(12, 330, 571, 131));

    retranslateUi(RunAllRaster);

    QMetaObject::connectSlotsByName(RunAllRaster);
    } // setupUi

    void retranslateUi(QDialog *RunAllRaster)
    {
    RunAllRaster->setWindowTitle(QApplication::translate("RunAllRaster", "RunAllRaster", 0, QApplication::UnicodeUTF8));
    groupBox->setTitle(QApplication::translate("RunAllRaster", "Input - ( Step 1 - Suggest Me! )", 0, QApplication::UnicodeUTF8));
    label->setToolTip(QApplication::translate("RunAllRaster", "Digital Elevation Model (ESRI binary grid or ascii raster data)\n"
"for the modeling domain.", 0, QApplication::UnicodeUTF8));
    label->setText(QApplication::translate("RunAllRaster", "DEM", 0, QApplication::UnicodeUTF8));
    label_2->setToolTip(QApplication::translate("RunAllRaster", "Minimum Number of Grids draining to a particular Cell/Grid\n"
"to be classified as a Stream Grid.\n"
"Click Suggest Me for a initial guess!", 0, QApplication::UnicodeUTF8));
    label_2->setText(QApplication::translate("RunAllRaster", "Stream Grid Threshold (# of grids)", 0, QApplication::UnicodeUTF8));
    pushButtonDEM->setText(QApplication::translate("RunAllRaster", "Browse", 0, QApplication::UnicodeUTF8));
    pushButtonSuggestMe->setToolTip(QApplication::translate("RunAllRaster", "\"Suggest Me\" should be executed first before \"Run\" --\n"
"Some of the files generated earlier are used when Run is executed.\n"
"However, you could change tolerance later if needed.", 0, QApplication::UnicodeUTF8));
    pushButtonSuggestMe->setText(QApplication::translate("RunAllRaster", "Suggest Me!", 0, QApplication::UnicodeUTF8));
    groupBox_2->setTitle(QApplication::translate("RunAllRaster", "Output - ( Step 2 - Run )", 0, QApplication::UnicodeUTF8));
    label_3->setToolTip(QApplication::translate("RunAllRaster", "File to which Stream shapefile generated by\n"
"RasterProcessing will be saved.", 0, QApplication::UnicodeUTF8));
    label_3->setText(QApplication::translate("RunAllRaster", "Stream", 0, QApplication::UnicodeUTF8));
    label_4->setToolTip(QApplication::translate("RunAllRaster", "File to which Watershed boundary shapefile generated by\n"
"RasterProcessing will be saved.", 0, QApplication::UnicodeUTF8));
    label_4->setText(QApplication::translate("RunAllRaster", "Watershed", 0, QApplication::UnicodeUTF8));
    pushButtonStream->setText(QApplication::translate("RunAllRaster", "Browse", 0, QApplication::UnicodeUTF8));
    pushButtonWatershed->setText(QApplication::translate("RunAllRaster", "Browse", 0, QApplication::UnicodeUTF8));
    checkBoxVector->setText(QApplication::translate("RunAllRaster", "Load Vector Data", 0, QApplication::UnicodeUTF8));
    checkBoxRaster->setToolTip(QApplication::translate("RunAllRaster", "Note that loding Raster Data can take time.", 0, QApplication::UnicodeUTF8));
    checkBoxRaster->setText(QApplication::translate("RunAllRaster", "Load Raster Data", 0, QApplication::UnicodeUTF8));
    groupBox_3->setTitle(QString());
    pushButtonHelp->setText(QApplication::translate("RunAllRaster", "Help", 0, QApplication::UnicodeUTF8));
    pushButtonClose->setText(QApplication::translate("RunAllRaster", "Close", 0, QApplication::UnicodeUTF8));
    pushButtonRun->setToolTip(QApplication::translate("RunAllRaster", "\"Suggest Me\" should be executed first before \"Run\" --\n"
"Some of the files generated earlier are used when Run is executed.\n"
"However, you could change tolerance later if needed.", 0, QApplication::UnicodeUTF8));
    pushButtonRun->setText(QApplication::translate("RunAllRaster", "Run", 0, QApplication::UnicodeUTF8));
    Q_UNUSED(RunAllRaster);
    } // retranslateUi

};

namespace Ui {
    class RunAllRaster: public Ui_RunAllRaster {};
} // namespace Ui

#endif // UI_RUNALLRASTER_H
