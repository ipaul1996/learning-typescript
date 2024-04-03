// Tupple
let personV2: [string, number] = ["john", 25];
let date: [number, number, number] = [12, 17, 2001];

// date.push("Hello"); // Argument of type 'string' is not assignable to parameter of type 'number'.
date.push(25);
date.push(38);
date.push(67);
date.push(19);
date.push(21);
console.log(date);
// Here typescript is not stopping us to add element, because, TypeScript's type system 
// is designed to provide compile-time checks for type safety, but it doesn't enforce 
// immutability of arrays or tuples.
// Here the solution is,

let dateV2: readonly [number, number, number] = [12, 17, 2001];
// dateV2.push(5); // Property 'push' does not exist on type 'readonly [number, number, number]'


function getPerson(): [string, number] {
  return ["john", 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susana: [string, number?] = ['susana'];
// The tuple susana is defined as having two elements: the first one is of type string, 
// and the second one is of type number with the ? indicating that it's optional.
