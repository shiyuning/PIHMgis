/****************************************************************************
** Meta object code from reading C++ file 'dissolve.h'
**
** Created: Tue Jul 27 23:38:15 2010
**      by: The Qt Meta Object Compiler version 59 (Qt 4.3.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../../src/plugins/pihm_gis/VectorProcessing/Dissolve/dissolve.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'dissolve.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 59
#error "This file was generated using the moc from 4.3.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

static const uint qt_meta_data_Dissolve[] = {

 // content:
       1,       // revision
       0,       // classname
       0,    0, // classinfo
       5,   10, // methods
       0,    0, // properties
       0,    0, // enums/sets

 // slots: signature, parameters, type, tag, flags
      10,    9,    9,    9, 0x08,
      37,    9,    9,    9, 0x08,
      65,    9,    9,    9, 0x08,
      94,    9,    9,    9, 0x08,
     124,    9,    9,    9, 0x08,

       0        // eod
};

static const char qt_meta_stringdata_Dissolve[] = {
    "Dissolve\0\0on_pushButtonRun_clicked()\0"
    "on_pushButtonHelp_clicked()\0"
    "on_pushButtonClose_clicked()\0"
    "on_pushButtonOutput_clicked()\0"
    "on_pushButtonInput_clicked()\0"
};

const QMetaObject Dissolve::staticMetaObject = {
    { &QDialog::staticMetaObject, qt_meta_stringdata_Dissolve,
      qt_meta_data_Dissolve, 0 }
};

const QMetaObject *Dissolve::metaObject() const
{
    return &staticMetaObject;
}

void *Dissolve::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_Dissolve))
	return static_cast<void*>(const_cast< Dissolve*>(this));
    return QDialog::qt_metacast(_clname);
}

int Dissolve::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QDialog::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: on_pushButtonRun_clicked(); break;
        case 1: on_pushButtonHelp_clicked(); break;
        case 2: on_pushButtonClose_clicked(); break;
        case 3: on_pushButtonOutput_clicked(); break;
        case 4: on_pushButtonInput_clicked(); break;
        }
        _id -= 5;
    }
    return _id;
}
