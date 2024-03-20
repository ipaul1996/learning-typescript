"use strict";
class Example5 {
    constructor(value) {
        this.constantValue = value;
    }
    updateValue(newValue) {
        console.log(newValue);
    }
}
const instance5 = new Example5(100);
console.log(instance5.constantValue);
const obj = { value: 42 };
