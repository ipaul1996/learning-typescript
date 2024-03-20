"use strict";
function printTodos(todos) {
    if (todos) {
        todos.forEach((todo) => console.log(todo));
    }
    else {
        console.log("No todos");
    }
}
const todos = ["t1", "t2", "t3", "t4"];
let firstname;
let lastname;
