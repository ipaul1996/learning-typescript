// For the following function if padding is a number, it will treat that as the number
// of spaces we want to prepend to input. If padding is a string, it should just
// prepend padding to input.

/*
function padLeft(padding: number | string, input: string): string {
  return " ".repeat(padding) + input; // Error
    Argument of type 'string | number' is not assignable to parameter of type 'number'.
      Type 'string' is not assignable to type 'number'.
}
*/

// TypeScript is warning us that we’re passing a value with type number | string to the repeat function,
// which only accepts a number, and it’s right. To resolve the issue,

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

/*
In TypeScript, the way types are understood adapts to how our code runs in JavaScript. 
This means that TypeScript's grasp of types is influenced by how our JavaScript code behaves 
during execution, especially when it encounters constructs like if/else conditions, 
ternary operators, loops, and truthiness checks.
Within our if check, TypeScript sees typeof padding === "number" and understands that as a special form 
of code called a "type guard". TypeScript follows possible paths of execution that our programs can take 
to analyze the most specific possible type of a value at a given position. It looks at these 
special checks (called type guards) and assignments, and the process of refining types to more 
specific types than declared is called narrowing.
*/

// typeof operator gives following operators on runtime - string, number, boolean, bigint, symbol, undefined,
// object, function. In TypeScript, checking against the value returned by typeof is a type guard.

/*
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) { Error - 'strs' is possibly 'null'.ts(18047)
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

Here the problem is typeof null is also object. Here we can use Truthiness Narrowing.
*/

// Truthiness Narrowing:
// In JavaScript, truthiness and falsiness describe how non-boolean values are interpreted
// as either true or false when they're evaluated in a boolean context
// (a process known as coercion). For instance, values like an empty string (""),
// 0, 0n, null, undefined, NaN, and false are considered falsy. On the other hand,
// all other values are treated as truthy.
// We can always coerce values to booleans by running them through the Boolean function,
// or by using the shorter double-Boolean negation.
let de = Boolean("world"); // type: boolean, value: true
let df = !!"world"; // type: boolean, value: true

// Truthiness narrowing in TypeScript refers to the process by which TypeScript narrows
// down the type of a value based on its truthiness or falsiness in conditional statements.
function getOutput() {
  if(Math.random() < 0.33) return "Hello";
  return null;
}

let value: string | null = getOutput();

if (value) {
  // TypeScript narrows down the type of `value` to `string` within this block
  console.log(value.toUpperCase()); // let value: string
} else if(value === "") {
  console.log(value); // let value: ""
} else {
  console.log("Value is null", value); // let value: string | null
  // In complex scenarios typescript's type inference is not always accurate
}

// Also we can resolve our previous issue in the following way,
function printAllV2(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
