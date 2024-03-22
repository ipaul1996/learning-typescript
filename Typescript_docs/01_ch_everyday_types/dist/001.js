"use strict";
// Three commonly used primitive types in typescript are string, number, boolean
let x = 2;
// Here number is a type annotation. In most cases, typescript can infer the type automatically.
// It is called Contextual typing i.e., here the type of an expression is deduced based on 
// its usage context
let k = 5;
let y = "Hello!";
let z = true;
// To specify the type of an array
let numArr1 = [1, 2, 3];
let numArr2 = [0, 5, 6];
let strArr1 = ["a", "b", "c", "d", "e", "f"];
// Special type - any
// In TypeScript, the any type is a special type that represents any kind of value.
// Variables declared with the any type can hold values of any type, and TypeScript's type
// system does not perform type checking on them.
let obj = { x: 0 };
// None of the following lines of code will give compilation error. It means disabling type checking.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n = obj;
// When we don't specify a type, and also typescript can't infer the type then the compiler 
// will default to any. If we don't want this behaviour we can make noImplicitAny option to true in tsconfig.json.
// function SayHi(x) {
//     console.log(x);
// }
