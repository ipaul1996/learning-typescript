/*
readonly:
1. Members marked as readonly can only be assigned a value during initialization or within the constructor.
Once initialized, their values cannot be changed.
2. Readonly can also be used in interfaces to indicate that the property of an object implementing the 
interface should not be modified after initialization.

*/

class Example5 {

    readonly constantValue: number;
  
    constructor(value: number) {
      this.constantValue = value;
    }
  
    updateValue(newValue: number): void {
        console.log(newValue);
      // this.constantValue = newValue; // Error: Cannot assign to 'constantValue' because it is a read-only property.
    }

}
  
const instance5 = new Example5(100);
console.log(instance5.constantValue); // Accessing readonly property


interface ReadonlyExample {
    readonly value: number;
}
  
const obj: ReadonlyExample = { value: 42 };
// obj.value = 50; // Error: Cannot assign to 'value' because it is a read-only property.
  
  