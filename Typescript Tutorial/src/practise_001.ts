const x: number = 2;

const y: string = "Hello world!";

let z: string | number = 2;
z = "Number changed to string";

let bool: boolean = false;

let myArray1: string[] = ["a", "b", "c", "d", "e"];

let myArray2: Array<string> = ["a", "b", "c", "d", "e"];

let myArray3: (string | number)[] = ["a", 0, "c", 1, "e"];

let myUser: [number, string, boolean] = [1, "IP", true];

let m: undefined = undefined;

let m2: null = null;

console.log(typeof m);

console.log(typeof m2);

enum MatchResult {
  success = "SUCCESS",
  failure = "FAILURE",
  tie = "TIE",
}

enum MatchResult1 {
  success,
  failure,
  tie,
}

console.log(MatchResult);
let resultOfMatch1: MatchResult = MatchResult.success;
console.log(resultOfMatch1);

console.log(MatchResult1);

// object type
let person1: object;
person1 = { name: "Amit", age: 29 };

let persons: object[] = [
  { name: "Amit", age: 29 },
  { name: "IP", age: 27 },
];

let person2: { name: string; age: number; married?: boolean };

person2 = { name: "Amit", age: 29 };

let updatedPerson2 = { ...person2, newProperty: "some value" };

person2 = updatedPerson2;



type Account = {
  account_number: number;
  ifsc_code: string;
  name: string;
  branch?: string;
  bank?: string;
  comment?: (data: string) => void;
};

let acc1: Account;
let acc2: Account;
let acc3: Account;

acc1 = {
  account_number: 123456789,
  ifsc_code: "ABC123",
  name: "John Doe",
  branch: "Main Street Branch",
  bank: "Bank of Example",
  comment: (data: string) => {
    console.log(data);
  },
};



let accounts: Account[];


