// Generics
// Generics in TypeScript provide a way to create reusable components that
// can work with a variety of data types while preserving type safety. They allow
// you to define functions, classes, and interfaces with placeholders for types that
// are specified when the component is used. This enables you to write flexible and
// type-safe code that can be applied to different data types without sacrificing type checking.
// Generics are used when we want to describe a correspondence between input of the function and
// the output (the return value).

// Example: 1
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// <Type> --> type parameter or generic type parameter.

// s is of type 'string'
const s = firstElement(["a", "b", "c"]); // const s: string | undefined
// n is of type 'number'
const n = firstElement([1, 2, 3]); // const n: number | undefined
// u is of type undefined
const u = firstElement([]); // const u: undefined
// Here for all the above cases, the type was inferred - chosen automatically - by TypeScript compiler.

//****************************************************************** */

// Example: 2
// Define a generic function with two type parameters
function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const stringArray = ["a", "b", "c"];
const numberArray = [1, 2, 3];
const mergedArray = mergeArrays(stringArray, numberArray); // const mergedArray: (string | number)[]

console.log(mergedArray); // Output: ['a', 'b', 'c', 1, 2, 3]
