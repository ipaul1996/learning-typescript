// instanceof Narrowing
// JavaScript has an operator for checking whether or not a value is an
// “instance” of another value. More specifically, in JavaScript x instanceof
// Foo checks whether the prototype chain of x contains Foo.prototype.
// instanceof is also a type guard, and TypeScript narrows in branches guarded
// by instanceofs.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    // TypeScript narrows down x to Date because it's an instance of Date
    console.log(x.getDay()); // (parameter) x: Date
  } else {
    // TypeScript narrows down x to string because it's not an instance of Date
    console.log(x.toUpperCase()); // (parameter) x: string
  }
}

class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark(); // OK, animal is narrowed down to Dog type
  } else if (animal instanceof Cat) {
    animal.meow(); // OK, animal is narrowed down to Cat type
  } else {
    console.log("Unknown animal");
  }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!
