// function type expression
// In TypeScript, a `function type expression` is a way to describe the type of
// a function. TypeScript allows us to treat functions as first-class citizens,
// meaning we can pass functions as arguments to other functions, return them
// from functions, and store them in variables. Function type expressions are used
// to define the structure of functions, including their parameters and return types.

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
// Here (a: string) => void is `function type expression` and it  means “a function with
// one parameter, named a, of type string, that doesn’t have a return value”.

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// We can use a type alias to name a function type:
type GreetFunction = (a: string) => void;
function greeterV2(fn: GreetFunction) {
  fn("Hello, World2");
}

// Function type expression for a function that takes two numbers
// and returns a number
let add: (x: number, y: number) => number;

// Assigning a function to the variable that matches the function
// type expression
add = function (x: number, y: number): number {
  return x + y;
};
