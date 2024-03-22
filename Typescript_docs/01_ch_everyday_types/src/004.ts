// Union Type - a type that is formed by combining two or more other types
// representing values that may be one of those types. Each of these types is
// an union's member.

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("103");
// printId(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

/*
function printIdV2(id: number | string) {
  console.log("Your ID is: " + id.toUpperCase());
}
Property 'toUpperCase' does not exist on type 'string | number'.
Property 'toUpperCase' does not exist on type 'number'.ts(2339).


Here we can use methods on id that are available on both string and number 
otherwise we have to do Narrowing.
Narrowing in TypeScript refers to the process of refining or reducing the types of a variable within 
a certain code block based on conditional checks or type guards. It allows TypeScript to infer more specific types 
for variables based on the conditions under which they are used, leading to improved type safety and more accurate 
type inference. 

*/

function printIdV3(id: number | string) {
  if (typeof id === "number") {
    console.log("Your ID is: " + id);
  } else {
    console.log("Your ID is: " + id.toUpperCase());
  }
}
// Here the typeof operator is used for conditional checks to narrow down the type of the id variable.

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome to our home " + x);
  }
}
