// typeof

// typeof operator refers to the type of a variable or property.

let num: number = 42;
type NumType = typeof num; // type NumType = number

const num1 = 24;
type NumType1 = typeof num1; // type NumType1 = 24

const s = "hello";
let n: typeof s; // let n: "hello"

function greet(name: string) {
  return `Hello, ${name}!`;
}

type GreetFunction = typeof greet; // type GreetFunction = (name: string) => string

const colors = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type k = keyof typeof colors; // type k = "red" | "green" | "blue"

