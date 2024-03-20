"use strict";
class Example {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return 'Hello, World!';
    }
}
const instance = new Example('John');
console.log(instance.name);
instance.name = 'Jane';
console.log(instance.name);
console.log(instance.greet());
class Animal {
    sound() {
        return 'Generic animal sound';
    }
}
class Dog extends Animal {
    sound() {
        return 'Woof, woof!';
    }
}
const dog = new Dog();
console.log(dog.sound());
class Example1 {
    greet() {
        return 'Hello, TypeScript!';
    }
}
const instance1 = new Example1();
console.log(instance.greet());
