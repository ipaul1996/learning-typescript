// unknown type
// The unknown type in TypeScript represents a type-safe counterpart to the any type.
// While any allows for unrestricted values, unknown is a type-safe alternative that
// ensures type checking and type safety when working with values of unknown types.
// type safety --> Unlike any, which disables all type checking, unknown still enforces
// type safety. You cannot perform arbitrary operations on values of type unknown without
// first narrowing the type.
// type checking --> Variables of type unknown require type checking or narrowing before
// they can be safely used.

function processData(data: unknown): void {
  // Type checking or narrowing is required before using 'data' safely
  if (typeof data === "string") {
    console.log(data.toUpperCase()); // 'data' is narrowed to 'string' type
  } else if (Array.isArray(data)) {
    console.log(data.length); // 'data' is narrowed to 'any[]' type
  } else {
    console.log("Data is of unknown type");
  }
}

// Example usage
processData("hello"); // Output: HELLO
processData([1, 2, 3]); // Output: 3
processData({}); // Output: Data is of unknown type

// Values with an unknown type can be assigned to variables of any type without
// causing type errors
// We can use type assertion (e.g., as syntax) or type guards to narrow down 
// the type of variables with an unknown type.
function assignUnknown(data: unknown) {
  if (typeof data === "string") {
    let str: string = data; ``
    console.log(str.toLowerCase());
  } else if (typeof data === "number") {
    let num: number = data;
    console.log(num.toFixed(2));
  } else if (typeof data === "boolean") {
    let bool: boolean = data;
    console.log(!bool);
  } else if (isNumberArray(data)) {
    let numArr: number[] = data; // (parameter) data: number[]
    console.log(numArr);
  } else if (Array.isArray(data)) {
    let strArr: string[] = data as string[];
    console.log(strArr);
  }
}

function isNumberArray(data: unknown): data is number[] {
  return Array.isArray(data) && data.every((elem) => typeof elem === "number");
}
