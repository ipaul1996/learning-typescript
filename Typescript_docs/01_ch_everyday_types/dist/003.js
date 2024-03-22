"use strict";
// object type
let coordinate = { x: 0, y: 1 };
// In object type annotation we can seprate properties by ; or , and the last
// separator is optional
function printCoord(pt) {
    console.log("The x-corrdinate value is " + pt.x);
    console.log("The y-corrdinate value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Optional properties
function printName(obj) {
    var _a;
    console.log(`Name is ${obj.firstName} ${(_a = obj.lastName) !== null && _a !== void 0 ? _a : ""}`.trim());
}
printName({ firstName: "Sara" });
printName({ firstName: "Indrajit", lastName: "Paul" });
