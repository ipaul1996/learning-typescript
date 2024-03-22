"use strict";
// Literal types
// In addition to the general types string and number, we can refer to
// specific strings and numbers in type positions. These are called literal types.
// This feature help us to ensure that variables only hold specific, predetermined values.
let x3 = "hello";
x3 = "hello"; // OK
// x3 = "howdy"; // Error
// Type '"howdy"' is not assignable to type '"hello"'.
let resStatus;
resStatus = "success"; // This is valid
resStatus = "failure"; // This is valid
// resStatus = 'pending'; // This will result in a TypeScript error
// Type '"pending"' is not assignable to type '"success" | "failure"'.ts(2322)
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
// There’s one more kind of literal type: boolean literals. There are only two boolean literal types, 
// true and false. The type boolean itself is actually just an alias for the union true | false.
