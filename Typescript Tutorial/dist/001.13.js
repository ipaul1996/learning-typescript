"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = exports.sayHello = exports.studentAge = exports.studentName = void 0;
exports.studentName = "Kaju";
exports.studentAge = 20;
function sayHello() {
    console.log("Hello!");
}
exports.sayHello = sayHello;
class Demo {
    constructor(message) {
        this.message = message;
    }
    showMessage() {
        console.log(this.message);
    }
}
exports.Demo = Demo;
