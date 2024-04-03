let randomValues: [] = []; // let randomValues: []
// Here the literal type is of an empty array

// randomValues = ["Hello"] 
// Type '[string]' is not assignable to type '[]'. Source has 1 element(s) 
// but target allows only 0.

// let emptyValues = []; // let emptyValues: any[]
let emptyValues: number[] = [];

let names = ['peter', 'susan', 10]; // let names: (string | number)[]
let myArray: (string | boolean) [] = ['apple', true];

