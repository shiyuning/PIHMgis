/********************************************************************************
** Form generated from reading ui file 'ibcfile.ui'
**
** Created: Tue Jul 27 23:38:18 2010
**      by: Qt User Interface Compiler version 4.3.2
**
** WARNING! All changes made in this file will be lost when recompiling ui file!
********************************************************************************/

#ifndef UI_IBCFILE_H
#define UI_IBCFILE_H

#include <Qt3Support/Q3TextBrowser>
#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QDialog>
#include <QtGui/QGroupBox>
#include <QtGui/QLabel>
#include <QtGui/QLineEdit>
#include <QtGui/QPushButton>

class Ui_IbcFile
{
public:
    QLabel *label;
    QGroupBox *groupBox;
    QPushButton *pushButtonRun;
    QPushButton *pushButtonHelp;
    QPushButton *pushButtonClose;
    QGroupBox *groupBox_2;
    QLabel *label_2;
    QLineEdit *lineEdit;
    QPushButton *pushButtonBrowse;
    Q3TextBrowser *textBrowser;

    void setupUi(QDialog *IbcFile)
    {
    if (IbcFile->objectName().isEmpty())
        IbcFile->setObjectName(QString::fromUtf8("IbcFile"));
    IbcFile->resize(600, 381);
    label = new QLabel(IbcFile);
    label->setObjectName(QString::fromUtf8("label"));
    label->setGeometry(QRect(180, 20, 241, 17));
    QFont font;
    font.setPointSize(16);
    label->setFont(font);
    label->setAlignment(Qt::AlignCenter);
    groupBox = new QGroupBox(IbcFile);
    groupBox->setObjectName(QString::fromUtf8("groupBox"));
    groupBox->setGeometry(QRect(10, 156, 581, 61));
    pushButtonRun = new QPushButton(groupBox);
    pushButtonRun->setObjectName(QString::fromUtf8("pushButtonRun"));
    pushButtonRun->setGeometry(QRect(458, 17, 113, 32));
    pushButtonHelp = new QPushButton(groupBox);
    pushButtonHelp->setObjectName(QString::fromUtf8("pushButtonHelp"));
    pushButtonHelp->setGeometry(QRect(7, 17, 113, 32));
    pushButtonClose = new QPushButton(groupBox);
    pushButtonClose->setObjectName(QString::fromUtf8("pushButtonClose"));
    pushButtonClose->setGeometry(QRect(327, 17, 113, 32));
    groupBox_2 = new QGroupBox(IbcFile);
    groupBox_2->setObjectName(QString::fromUtf8("groupBox_2"));
    groupBox_2->setGeometry(QRect(10, 40, 581, 91));
    label_2 = new QLabel(groupBox_2);
    label_2->setObjectName(QString::fromUtf8("label_2"));
    label_2->setGeometry(QRect(15, 46, 61, 17));
    lineEdit = new QLineEdit(groupBox_2);
    lineEdit->setObjectName(QString::fromUtf8("lineEdit"));
    lineEdit->setGeometry(QRect(108, 45, 331, 22));
    pushButtonBrowse = new QPushButton(groupBox_2);
    pushButtonBrowse->setObjectName(QString::fromUtf8("pushButtonBrowse"));
    pushButtonBrowse->setGeometry(QRect(458, 40, 113, 32));
    textBrowser = new Q3TextBrowser(IbcFile);
    textBrowser->setObjectName(QString::fromUtf8("textBrowser"));
    textBrowser->setGeometry(QRect(10, 236, 581, 131));

    retranslateUi(IbcFile);

    QMetaObject::connectSlotsByName(IbcFile);
    } // setupUi

    void retranslateUi(QDialog *IbcFile)
    {
    IbcFile->setWindowTitle(QApplication::translate("IbcFile", "IbcFile", 0, QApplication::UnicodeUTF8));
    label->setText(QApplication::translate("IbcFile", "Generate Dummy IBC File", 0, QApplication::UnicodeUTF8));
    groupBox->setTitle(QString());
    pushButtonRun->setText(QApplication::translate("IbcFile", "Run", 0, QApplication::UnicodeUTF8));
    pushButtonHelp->setText(QApplication::translate("IbcFile", "Help", 0, QApplication::UnicodeUTF8));
    pushButtonClose->setText(QApplication::translate("IbcFile", "Close", 0, QApplication::UnicodeUTF8));
    groupBox_2->setTitle(QApplication::translate("IbcFile", "Output", 0, QApplication::UnicodeUTF8));
    label_2->setText(QApplication::translate("IbcFile", "ibc File", 0, QApplication::UnicodeUTF8));
    pushButtonBrowse->setText(QApplication::translate("IbcFile", "Browse", 0, QApplication::UnicodeUTF8));
    Q_UNUSED(IbcFile);
    } // retranslateUi

};

namespace Ui {
    class IbcFile: public Ui_IbcFile {};
} // namespace Ui

#endif // UI_IBCFILE_H