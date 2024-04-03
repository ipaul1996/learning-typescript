// instanceof Narrowing
// JavaScript has an operator for checking whether or not a value is an
// “instance” of another value. More specifically, in JavaScript x instanceof
// Foo checks whether the prototype chain of x contains Foo.prototype.
// instanceof is also a type guard, and TypeScript narrows in branches guarded
// by instanceofs.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.getDay()); // (parameter) x: Date
  } else {
    console.log(x.toUpperCase()); // (parameter) x: string
  }
}
