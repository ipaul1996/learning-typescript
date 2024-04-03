// null and undefined
// JavaScript has two primitive values used to signal absent or uninitialized
// value: null and undefined. TypeScript has two corresponding types by the same names.

/*
strictNullChecks: false
let myName: string;
myName = null; // Allowed
TypeScript allows assigning null to the name variable, 
even though it's declared as a string.

console.log(myName.length); // Runtime error: Cannot read property 'length' of null
*/

// strictNullChecks: true
let myName: string;
// myName = null; // Error: Type 'null' is not assignable to type 'string'
// console.log(myName.length); // Error: Object is possibly 'null'

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
// With strictNullChecks on, when a value is null or undefined, we need
// to test for those values before using methods or properties on that value.

// Non-null Assertion Operator (Postfix !)
// TypeScript also has a special syntax for removing null and undefined from
// a type without doing any explicit checking. Writing ! after any expression
// is effectively a type assertion that the value isn’t null or undefined:

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());  // No Error
}
// Just like other type assertions, this doesn’t change the runtime 
// behavior of our code, so it’s important to only use ! when 
// we know that the value can’t be null or undefined.