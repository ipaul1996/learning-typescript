/*
protected: 
1. Members marked as protected are accessible within the class where they are declared and its derived classes.
They cannot be accessed or modified from outside the class hierarchy.
2. Protected members of a base class are inherited by derived classes. Derived classes can access and override 
protected members of the base class.
It is particularly useful when you want to expose certain members to derived classes while still maintaining 
some level of encapsulation.

*/


class Example3 {

    protected internalValue: number;
  
    constructor(value: number) {
      this.internalValue = value;
    }
  
    getInternalValue(): number {
      return this.internalValue; // Accessing protected property within the class
    }

}
  
class Derived3 extends Example3 {

    getDerivedValue(): number {
      return this.internalValue; // Accessing protected property in a derived class
    }


    updateDerivedValue(value: number): void {
        this.internalValue = value; // update protected property in a derived class
    }

}


const instance3 = new Example3(42);
// console.log(instance.internalValue); // Error: Property 'internalValue' is protected and only accessible within class 'Example' and its subclasses.

const instance4 = new Derived3(62);
console.log(instance4.getDerivedValue()); // 62
instance4.updateDerivedValue(99);
console.log(instance4.getDerivedValue()); // 99
