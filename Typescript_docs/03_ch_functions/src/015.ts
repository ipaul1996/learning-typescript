// Other Types to Know About

// void
// void represents the return value of functions which don’t return a value.
// It’s the inferred type any time a function doesn’t have any return statements,
// or doesn’t return any explicit value from those return statements.

// The inferred return type is void
function noop() {
  return;
}

// In JavaScript, a function that doesn’t return any value will implicitly return
// the value undefined. However, void and undefined are not the same thing in TypeScript.

// Contextual typing with a return type of void does not force functions to not
// return something. Another way to say this is a contextual function type with
// a void return type (type voidFunc = () => void), when implemented, can return
// any other value, but it will be ignored
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};
const f2: voidFunc = () => true;
const f3: voidFunc = function () {
  return true;
};

const v1 = f1(); // const v1: void
const v2 = f2(); // const v2: void
const v3 = f3(); // const v3: void

// object
// The special type object refers to any value that isn’t a primitive
// (string, number, bigint, boolean, symbol, null, or undefined). This is different
// from the empty object type { }, and also different from the global type Object.
// The object type represents all non-primitive values while the Object type describes
// the functionality of all objects. For example, the Object type has the toString()
// and valueOf() methods that can be accessible by any object.

let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);

employee = {
  firstName: "John",
  age: 25,
  city: "Kolkata",
};

// But if we do,
// employee = "John"; // Type 'string' is not assignable to type 'object'.ts(2322)

// empty type {}
// TypeScript has another type called empty type denoted by {} , which is quite similar
// to the object type. The empty type {} describes an object that has no property on
// its own. If you try to access a property on such object, TypeScript will issue a
// compile-time error:
let vacant: {};
// vacant.firstName = 'John'; // Property 'firstName' does not exist on type '{}'.ts(2339)

// unknown
// Refer 01_ch_everyday_types --> 014.ts

// never
// The never type represents values which are never observed. In a return type,
// this means that the function throws an exception or terminates execution
// of the program. never also appears when TypeScript determines there’s nothing
// left in a union.
function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

// Function
// doubt
