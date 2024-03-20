"use strict";
let employee1 = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    }
};
let calculator1 = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};
let car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    owner: {
        name: "John",
        age: 30,
    },
};
let students1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
let dynamicObject1 = {
    apples: 5,
    oranges: 3,
    bananas: 7,
};
function createUser1(id, name) {
    return { id, name };
}
let newUser1 = createUser1(1, "Alice");
