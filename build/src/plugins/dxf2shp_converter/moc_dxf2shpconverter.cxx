/****************************************************************************
** Meta object code from reading C++ file 'dxf2shpconverter.h'
**
** Created: Tue Jun 22 23:13:09 2010
**      by: The Qt Meta Object Compiler version 59 (Qt 4.3.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../../src/plugins/dxf2shp_converter/dxf2shpconverter.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'dxf2shpconverter.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 59
#error "This file was generated using the moc from 4.3.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

static const uint qt_meta_data_dxf2shpConverter[] = {

 // content:
       1,       // revision
       0,       // classname
       0,    0, // classinfo
       5,   10, // methods
       0,    0, // properties
       0,    0, // enums/sets

 // slots: signature, parameters, type, tag, flags
      18,   17,   17,   17, 0x0a,
      28,   17,   17,   17, 0x0a,
      34,   17,   17,   17, 0x0a,
      43,   17,   17,   17, 0x0a,
      52,   50,   17,   17, 0x0a,

       0        // eod
};

static const char qt_meta_stringdata_dxf2shpConverter[] = {
    "dxf2shpConverter\0\0initGui()\0run()\0"
    "unload()\0help()\0,\0addMyLayer(QString,QString)\0"
};

const QMetaObject dxf2shpConverter::staticMetaObject = {
    { &QObject::staticMetaObject, qt_meta_stringdata_dxf2shpConverter,
      qt_meta_data_dxf2shpConverter, 0 }
};

const QMetaObject *dxf2shpConverter::metaObject() const
{
    return &staticMetaObject;
}

void *dxf2shpConverter::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_dxf2shpConverter))
	return static_cast<void*>(const_cast< dxf2shpConverter*>(this));
    if (!strcmp(_clname, "QgisPlugin"))
	return static_cast< QgisPlugin*>(const_cast< dxf2shpConverter*>(this));
    return QObject::qt_metacast(_clname);
}

int dxf2shpConverter::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: initGui(); break;
        case 1: run(); break;
        case 2: unload(); break;
        case 3: help(); break;
        case 4: addMyLayer((*reinterpret_cast< QString(*)>(_a[1])),(*reinterpret_cast< QString(*)>(_a[2]))); break;
        }
        _id -= 5;
    }
    return _id;
}
