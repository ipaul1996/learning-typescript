"use strict";
// Interfaces
// In TypeScript, an interface declaration is a way to define the shape or
// structure of an object like type aliases. It specifies a contract that a class or object
// must adhere to by defining properties, methods, and their types.
function printCoordV2(pt) {
    console.log(`The x-coordinate is ${pt.x}`);
    console.log(`The y-coordinate is ${pt.y}`);
}
printCoordV2({ x: 6, y: -5 });
const animal = {
    genus: "1234",
    breed: "MGK",
};
// Use the Person interface
function introduce(person) {
    console.log(`Hello, my name is ${person.name}.`);
    if (person.age !== undefined) {
        console.log(`I am ${person.age} years old.`);
    }
    person.greet();
}
// Implement the Person interface
const john = {
    name: "John",
    age: 30,
    greet: () => {
        console.log("Nice to meet you!");
    },
};
introduce(john);
// Use the Employee interface
function displayEmployeeInfo(employee) {
    console.log(`Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Position: ${employee.position}`);
    if (employee.age !== undefined) {
        console.log(`Age: ${employee.age}`);
    }
    employee.greet();
}
// Implement the Employee interface
const alice = {
    name: "Alice",
    age: 25,
    greet: () => {
        console.log("Hello, everyone!");
    },
    department: "Engineering",
    position: "Software Engineer",
};
displayEmployeeInfo(alice);
