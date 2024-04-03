// Assignments
// When we assign to any variable, TypeScript looks at the right side of 
// the assignment and narrows the left side appropriately.
let u = Math.random() < 0.5 ? 10 : "hello world!"; // let u: string | number
u = 1; // let u: string | number
console.log(u); // let u: number
u = "goodbye!";  // let u: string | number
console.log(u); // let u: string


// Each of these assignments is valid. Even though the observed type of x changed 
// to number after our first assignment, we were still able to assign a string to x. 
// This is because the declared type of x - the type that x started with - 
// is string | number, and assignability is always checked against the declared type.

/*
When you initialize the variable u with Math.random() < 0.5 ? 10 : "hello world!", 
TypeScript infers its type to be string | number because it could either be a number 
(if Math.random() < 0.5 evaluates to true) or a string (if Math.random() < 0.5 evaluates 
to false).

Then, when you assign 1 to u, TypeScript doesn't immediately narrow down the type of u to number. 
This is because TypeScript is conservative in narrowing types automatically to prevent 
unintended behavior. Instead, it retains the union type string | number for u.

However, when you log u using console.log(u), TypeScript is able to infer that u must be a number 
at that point in the code. This is due to control flow analysis: TypeScript knows that u has been 
assigned a value of 1 previously, so within the scope of console.log(u), u must be a number. 
Therefore, TypeScript narrows down the type of u to number for that specific statement.

When you later assign "goodbye!" to u, TypeScript again infers the type of u to be string | number 
because it could now be either a string or a number.

*/