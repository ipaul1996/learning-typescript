// Type Assertions
// Type assertions are a way to tell the compiler "trust me, I know what I'm doing."
// A type assertion is like a type cast in other languages, but it performs no special
// checking or restructuring of data. It has no runtime impact and is used purely
// by the compiler. TypeScript assumes that you, the programmer, have performed any
// special checks that you need.

// Assume we have an HTML element with id="myInput"
let inputElement: HTMLElement | null = document.getElementById("myInput");

// Without type assertion, TypeScript will give an error
// Property 'value' does not exist on type 'HTMLElement'.
// We know it's an input element, so we assert it.
let inputValue: string = (inputElement as HTMLInputElement).value;

console.log(inputValue);

// Define a variable with a union type
let someValue: string | number = "this is a string";

// Assert that someValue is of type string
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16

// Typescript only allows type assertions which convert to a more specific(string | number --> number, string) or
// less specific(string --> any) version of a type. This rule prevents "impossible" coercions.

// const x1 = "hello" as number; // Error
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps
// with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)

const x1 = "hello" as unknown as number;
const x2 = "hello" as any as number;

// Let us consider a more practical example,
// Assume we have an asynchronous function that fetches user input
async function fetchUserInput(): Promise<unknown> {
  // Simulating user input arriving asynchronously after some time
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "42"; // User input received as string
}

// We want to process the user input as a number
// But TypeScript doesn't know the exact type of the user input

// We first assert the user input as any to bypass TypeScript's type checking temporarily
// Then, we assert it as a more specific type (a string)
async function processUserInput() {
  const userInput = (await fetchUserInput()) as any as string;

  // Now we're confident that userInput is of type string
  // We further assert it to be of type number
  const userNumber: number = parseInt(userInput); // Converting the string to number

  console.log(userNumber); // Output: 42
  console.log(userNumber + 10); // Output: 52
}

processUserInput();
