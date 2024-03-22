"use strict";
const names = ["a", 1, 2, "b"];
names.forEach((name) => {
    if (typeof name === "string")
        console.log(name.toUpperCase());
    else
        console.log(name);
});
function printName(obj) {
    var _a, _b;
    console.log(`Name is : ${obj.first} ${(_b = (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : ""}`.trim());
}
printName({ first: "Indrajit" });
let constString = "Hello World!";
function liveDangerously(x) {
    console.log(x.toFixed());
}
// liveDangerously(null);

console.log(null === undefined);
