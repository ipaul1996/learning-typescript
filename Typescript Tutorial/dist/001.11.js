"use strict";
class Example3 {
    constructor(value) {
        this.internalValue = value;
    }
    getInternalValue() {
        return this.internalValue;
    }
}
class Derived3 extends Example3 {
    getDerivedValue() {
        return this.internalValue;
    }
    updateDerivedValue(value) {
        this.internalValue = value;
    }
}
const instance3 = new Example3(42);
const instance4 = new Derived3(62);
console.log(instance4.getDerivedValue());
instance4.updateDerivedValue(99);
console.log(instance4.getDerivedValue());
