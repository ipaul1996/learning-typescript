// never type

// When narrowing, we can reduce the options of a union to a point where we
// have removed all possibilities and have nothing left. In those cases, TypeScript
// will use a never type to represent a state which shouldn’t exist.

// Function that takes a string or number and performs an action based on the type
function processInput(input: string | number) {
  if (typeof input === "string") {
    // Handle string input
    console.log("Input is a string:", input.toUpperCase());
  } else if (typeof input === "number") {
    // Handle number input
    console.log("Input is a number:", input * 2);
  } else {
    // In theory, this branch should never be reached
    // Here, TypeScript infers the type of 'input' as 'never'
    const unreachable = input; // const unreachable: never
    console.log("This line should never be reached");
  }
}

// Example usage
processInput("hello"); // Output: Input is a string: HELLO
processInput(5); // Output: Input is a number: 10

// The never return type in TypeScript represents a function that never returns normally.
// This means that the function either throws an error, has an infinite loop, or exits
// abruptly in some other way.

function funA(message: string): never {
  throw new Error(message);
}

function funB(): never {
  while (true) {
    // Some logic here
  }
}



