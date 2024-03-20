// Encapsulation and access modifiers
// access modifiers --> public, private, protected, readonly

/*
public:
1. If no access modifier is specified for a class member (property or method), it is considered public by default.
2. Members marked as public are accessible and modifiyable from outside the class.
3. Inheritance: Public members of a base class are inherited by derived classes. Derived classes can access 
and override public members of the base class.
4. Visibility: Public members are visible and accessible from any part of the program. Other classes and modules 
can interact with public members of a class.
5. When a class implements an interface, the implemented members are implicitly considered public.

*/

class Example {

    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }

    public greet(): string {
        return 'Hello, World!';
    }

}
  
const instance = new Example('John');
console.log(instance.name); // Accessing public property
instance.name = 'Jane'; // Modifying public property
console.log(instance.name); // Accessing modified public property
console.log(instance.greet()); // Calling public method




class Animal {

    public sound(): string {
      return 'Generic animal sound';
    }

}
  
class Dog extends Animal {

    public sound(): string {
      return 'Woof, woof!';
    }

}
  
const dog = new Dog();
console.log(dog.sound()); // Calling overridden public method






interface ExampleInterface {
    greet(): string;
}
  
class Example1 implements ExampleInterface {

    greet(): string {
      return 'Hello, TypeScript!';
    }

}
  
const instance1: ExampleInterface = new Example1();
console.log(instance.greet()); // Accessing interface method through the instance



