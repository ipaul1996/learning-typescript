// Call Signature
// In JavaScript, functions can have properties in addition to being callable.
// However, the function type expression syntax doesn’t allow for declaring properties.
// If we want to describe something callable with properties, we can write a call signature
// in an object type

// Example: 1
type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // call signature - the syntax is slightly different compared to a
  // function type expression - use : between the parameter list and
  // the return type rather than =>.
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFuncV1(someArg: number) {
  return someArg > 3;
}

// doSomething(myFuncV1); // Error
// Argument of type '(someArg: number) => boolean' is not assignable to parameter
// of type 'DescribableFunction'.
// Property 'description' is missing in type '(someArg: number) => boolean' but
// required in type 'DescribableFunction'.ts(2345)

function myFuncV2(someArg: number) {
  return someArg > 1;
}
myFuncV2.description = "default description";

doSomething(myFuncV2);


// *************************************************************************

// Example: 2

// Define a type for a function with a special property
type OperationFunction = {
  operationName: string;
  (x: number, y: number): number; // Call signature
};

// Function that takes an operation function and two numbers
function performOperation(operation: OperationFunction, x: number, y: number) {
  console.log(`Performing ${operation.operationName} on ${x} and ${y}`);
  return operation(x, y);
}

// Define a function that adds two numbers
function addV1(x: number, y: number): number {
  return x + y;
}
addV1.operationName = "Addition";

// Define a function that subtracts two numbers
function subtractV1(x: number, y: number): number {
  return x - y;
}
subtractV1.operationName = "Subtraction";

// Perform addition and subtraction
console.log(performOperation(addV1, 5, 3)); // Output: Performing Addition on 5 and 3, Result: 8
console.log(performOperation(subtractV1, 10, 4)); // Output: Performing Subtraction on 10 and 4, Result: 6
