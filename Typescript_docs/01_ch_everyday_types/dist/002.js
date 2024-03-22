"use strict";
// Functions can have parameter type and return type annotations
function getStringLength(name) {
    return name.length;
}
// getStringLength(5); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
getStringLength("Hello World!");
// If we don't specify return type annotation then TypeScript will infer the return type based on the
// return statement
// If a function returns a promise
async function getFavouritNumber() {
    return new Promise((resolve) => {
        resolve(26);
    });
}
const names = ["Alice", "Bob", "Eve"];
// Contextual Typing - here typescript knows that name is of type string
names.forEach(function (name) {
    console.log(name.toUpperCase());
});
// Contextual Typing also applies to arrow functions
names.forEach((name) => {
    console.log(name.toUpperCase());
});
