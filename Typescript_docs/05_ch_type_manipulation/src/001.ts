// Generics
// Generics in TypeScript provide a mechanism for creating reusable components,
// enabling the use of multiple data types while retaining type information.
// This is achieved through `type variables`, which store the type and allow for
// flexibility in code implementation.

// The identity function is a function that will return back whatever is passed in.
// Identity function with a specific type,
function identity(arg: number): number {
  return arg;
}

// Here we can only number type argument
let res0 = identity(5); // let res0: number

// Identity function with any type,
function identityV2(arg: any): any {
  return arg; // (parameter) arg: any
}
// This is ofcourse generic that it will accept all type of argument but we actually
// are losing the information about what that type was when the function returns.

let res1 = identityV2(5); // let res1: any
let res2 = identityV2("Hello"); // let res2: any
// Here we are able to pass all type of argument but return type is always of
// type 'any'. So, we are loosing type information.

// Identity function with type variable,
function identityV3<T>(arg: T): T {
  return arg; // (parameter) arg: T
}

let res3 = identityV3(5); // let res3: number
let res4 = identityV3("Hello"); // let res4: string
// Here we are able to pass all type of argument and also we don't lose type
// information. This is a generic function and it works over a range of types.
// Also we can pass the type argument explicitly,
let res5 = identityV3<boolean>(true); // let res5: boolean
// In the previous cases(res3, res4), `type argument inference` occured — that is,
// we want the compiler to set the value of Type for us automatically based on the
// type of the argument.

/*
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);  // Property 'length' does not exist on type 'Type'.
  return arg;
}

the compiler will gives us an error that we’re using the .length member of arg, 
but nowhere have we said that arg has this member. We know that these `type variables` 
stand in for any and all types, so someone using this function 
could have passed in a number instead, which does not have a .length member.

But if we want the function to work with arrays of Type rather than Type directly.
Since we’re working with arrays, the .length member should be available. So,

*/

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}
// Here the generic function loggingIdentity takes a type parameter Type,
// and an argument arg which is an array of Types, and returns an array of Types.
// Alternatively,
function loggingIdentityV2<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
