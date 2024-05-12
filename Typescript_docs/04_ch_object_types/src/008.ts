// Array Type

function doSomething<T>(value: Array<T>) {
  return value[0];
}
// Array itself is  a type of it's own like object type and by providing type
// argument in the angular bracket we provide additional information that what
// type of data will be inside the array.

let myArray0: string[] = ["hello", "world"];
let myArray1: number[] = [1, 2, 3];
let myArray2: (number | string)[] = [1, "Golu", 3];
let myArray3: Array<boolean> = [true, false];

// All of these work!
let x1 = doSomething(myArray0); // let x1: string
let x2 = doSomething(new Array("hello", "world")); // let x2: string
let x3 = doSomething(myArray1); // let x3: number
let x4 = doSomething(myArray2); // let x4: string | number
let x5 = doSomething(myArray3); // let x5: boolean

/*
interface Array<Type> {

  Gets or sets the length of the array.
  length: number;


  Removes the last element from an array and returns it.
  pop(): Type | undefined;

  
  Appends new elements to an array, and returns the new length of the array.
  push(...items: Type[]): number;

}

Modern JavaScript also provides other data structures which are generic, 
like Map<K, V>, Set<T>, and Promise<T>.
These all are built-in types.

*/

// ReadOnlyArray Type
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  // values.push("hello!"); // Property 'push' does not exist on type 'readonly string[]'.
}

// Unlike Array, there isn’t a ReadonlyArray constructor that we can use.
// new ReadonlyArray("red", "green", "blue");
// 'ReadonlyArray' only refers to a type, but is being used as a value here.

// we can assign regular Arrays to ReadonlyArrays.
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

// Just as TypeScript provides a shorthand syntax for Array<Type> with Type[],
// it also provides a shorthand syntax for ReadonlyArray<Type> with readonly Type[].
function doStuffV2(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  // values.push("hello!");
  // Property 'push' does not exist on type 'readonly string[]'.
}

// Assignability isn’t bidirectional between regular Arrays and ReadonlyArrays.
let x: readonly string[] = [];
let y: string[] = [];

x = y;
// y = x; // The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.ts(4104)


// Promise Type
const promise = new Promise((resolve, reject) => {  // const promise: Promise<unknown>
  setTimeout(() => {
    resolve("This is done!")
  }, 2000);
});

const promise2: Promise<string> = new Promise((resolve, reject) => {  // const promise: Promise<string>
  setTimeout(() => {
    resolve("This is done!")
  }, 2000);
});
// Here the Promise is reolves to a string

promise2.then(data => data.toUpperCase()); 
// Here typescript can infer the type of data i.e., string such that we can all the
// string methods.