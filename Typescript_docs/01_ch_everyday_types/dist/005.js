"use strict";
// Type Aliases
// In TypeScript, a type alias is a way to give a name to a type. It allows you to
// create custom names for complex types.
function printCoordV1(pt) {
    console.log(`The x-coordinate is ${pt.x}`);
    console.log(`The y-coordinate is ${pt.y}`);
}
printCoordV1({ x: 6, y: -5 });
// Using a type alias for a Union Type
function processID(id) {
    // Type narrowing based on the type guard
    if (typeof id === "number") {
        console.log("Processing numeric ID:", id.toFixed(2));
    }
    else {
        console.log("Processing string ID:", id.toUpperCase());
    }
}
// Calling the function with different types of IDs
processID(123); // Processing numeric ID: 123.00
processID("abc"); // Processing string ID: ABC
// Create an object of type Bear
const grizzlyBear = {
    name: "Grizzly",
    honey: true,
};
// Display information about the bear
console.log(`Name: ${grizzlyBear.name}`);
console.log(`Honey: ${grizzlyBear.honey ? "Yes" : "No"}`);
// In case of type aliases, Once a type has been created we can not change it(add, delete or update properties).
