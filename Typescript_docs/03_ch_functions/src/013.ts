// Writing good overloads

// Always prefer parameters with union types instead of overloads when possible.


// Let’s consider a function that returns the length of a string or an array:

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
// len(Math.random() > 0.5 ? "hello" : [0]); // Error
/*
No overload matches this call.
  Overload 1 of 2, '(s: string): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.
  Overload 2 of 2, '(arr: any[]): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
      Type 'string' is not assignable to type 'any[]'.ts(2769)

The call would have succeeded against this implementation, but implementation 
signatures of overloads are not externally visible.

(Here we can’t invoke it with a value that might be a string or an array, because 
TypeScript can only resolve a function call to a single overload)

Because both overloads have the same argument count and same return type, 
we can instead write a non-overloaded version of the function:
*/
function lenV2(x: any[] | string) {
  return x.length;
}
