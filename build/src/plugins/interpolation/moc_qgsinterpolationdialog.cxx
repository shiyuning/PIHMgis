/****************************************************************************
** Meta object code from reading C++ file 'qgsinterpolationdialog.h'
**
** Created: Fri Jun 19 01:58:54 2009
**      by: The Qt Meta Object Compiler version 59 (Qt 4.3.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../../src/plugins/interpolation/qgsinterpolationdialog.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'qgsinterpolationdialog.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 59
#error "This file was generated using the moc from 4.3.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

static const uint qt_meta_data_QgsInterpolationDialog[] = {

 // content:
       1,       // revision
       0,       // classname
       0,    0, // classinfo
       5,   10, // methods
       0,    0, // properties
       0,    0, // enums/sets

 // slots: signature, parameters, type, tag, flags
      24,   23,   23,   23, 0x08,
      53,   48,   23,   23, 0x08,
     105,   23,   23,   23, 0x08,
     136,   23,   23,   23, 0x08,
     179,   48,   23,   23, 0x08,

       0        // eod
};

static const char qt_meta_stringdata_QgsInterpolationDialog[] = {
    "QgsInterpolationDialog\0\0on_buttonBox_accepted()\0"
    "text\0on_mInputLayerComboBox_currentIndexChanged(QString)\0"
    "on_mOutputFileButton_clicked()\0"
    "on_mConfigureInterpolationButton_clicked()\0"
    "on_mInterpolationMethodComboBox_currentIndexChanged(QString)\0"
};

const QMetaObject QgsInterpolationDialog::staticMetaObject = {
    { &QDialog::staticMetaObject, qt_meta_stringdata_QgsInterpolationDialog,
      qt_meta_data_QgsInterpolationDialog, 0 }
};

const QMetaObject *QgsInterpolationDialog::metaObject() const
{
    return &staticMetaObject;
}

void *QgsInterpolationDialog::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_QgsInterpolationDialog))
	return static_cast<void*>(const_cast< QgsInterpolationDialog*>(this));
    return QDialog::qt_metacast(_clname);
}

int QgsInterpolationDialog::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QDialog::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: on_buttonBox_accepted(); break;
        case 1: on_mInputLayerComboBox_currentIndexChanged((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 2: on_mOutputFileButton_clicked(); break;
        case 3: on_mConfigureInterpolationButton_clicked(); break;
        case 4: on_mInterpolationMethodComboBox_currentIndexChanged((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        }
        _id -= 5;
    }
    return _id;
}