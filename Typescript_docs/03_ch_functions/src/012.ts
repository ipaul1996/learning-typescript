// function overloads

// Let us write a function to produce a Date that takes either a timestamp (one argument)
// or a month/day/year specification (three arguments). In TypeScript, we can specify a
// function that can be called in different ways by writing overload signatures. To do this,
// write some number of function signatures (usually two or more), followed by the function
// implementation.

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// These first two signatures are called the overload signatures.

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
// here function implementation signature must be compatible with the overload signatures.
// This implementation signature can not be called directly as it is not visible from 
// the outside.

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // No overload expects 2 arguments, but overloads 
// do exist that expect either 1 or 3 arguments.ts(2575)



/*
function fn(x: boolean): void; // Argument type isn't right
function fn(x: string): void; // This overload signature is not compatible with its implementation signature.
function fn(x: boolean) {}

Let us write a compatible implementation signature,
*/

function fn(x: boolean): void;
function fn(x: string): void;
function fn(x: string | boolean) {}

/*
function fn1(x: string): string; // Return type isn't right
function fn1(x: number): boolean; // This overload signature is not compatible with its implementation signature.
function fn1(x: string | number) {
  return "oops";
}

Let us write a compatible implementation signature,
*/

function fn1(x: string): string; 
function fn1(x: number): boolean; 
function fn1(x: string | number): string | boolean {
  return "oops";
}




