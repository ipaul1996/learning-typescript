"use strict";
// Type Assertions
// Type assertions are a way to tell the compiler "trust me, I know what I'm doing."
// A type assertion is like a type cast in other languages, but it performs no special
// checking or restructuring of data. It has no runtime impact and is used purely
// by the compiler. TypeScript assumes that you, the programmer, have performed any
// special checks that you need.
// Assume we have an HTML element with id="myInput"
let inputElement = document.getElementById("myInput");
// Without type assertion, TypeScript will give an error
// Property 'value' does not exist on type 'HTMLElement'.
// We know it's an input element, so we assert it.
let inputValue = inputElement.value;
console.log(inputValue);
// Define a variable with a union type
let someValue = "this is a string";
// Assert that someValue is of type string
let strLength = someValue.length;
console.log(strLength); // Output: 16
// Typescript only allows type assertions which convert to a more specific(string | number --> number, string) or 
// less specific(string --> any) version of a type. This rule prevents "impossible" coercions.
// const x1 = "hello" as number; // Error
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps 
// with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
const x1 = "hello";
const x2 = "hello";
