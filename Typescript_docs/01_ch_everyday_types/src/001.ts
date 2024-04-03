// Three commonly used primitive types in typescript are string, number, boolean
let x: number = 2;
// Here number is a type annotation. In most cases, typescript can infer the type automatically.
// It is called type inference.
let k = 5; // let k: number

let y: string = "Hello!";
let z: boolean = true;

// To specify the type of an array
let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [0, 5, 6];
let strArr1: string[] = ["a", "b", "c", "d", "e", "f"];

// Special type - any
// In TypeScript, the any type is a special type that represents any kind of value.
// Variables declared with the any type can hold values of any type, and TypeScript's type
// system does not perform type checking on them.
let obj: any = { x: 0 };
// None of the following lines of code will give compilation error. Using any means disabling the type checking.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
// When we don't specify a type, and also typescript can't infer the type then the compiler 
// will default to any. If we don't want this behaviour we can make noImplicitAny option to true in tsconfig.json.

// function SayHi(x) { // Parameter 'x' implicitly has an 'any' type.ts(7006)
//     console.log(x);
// }


