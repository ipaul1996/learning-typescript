// Index signature
// The idea of the index signatures is to type objects of unknown structure
// when you only know the key and value types.

type SalaryObject = {
  [key: string]: number;
};
// It tells TypeScript that salaryObject has to be an
// object with string type as key and number type as value.

const salary: SalaryObject = {
  baseSalary: 100_000,
  yearlyBonus: 20_000,
};

interface StringArray {
  [index: number]: string;
}
// This index signature states that when a StringArray is
// indexed with a number, it will return a string.

const myArray: StringArray = ["Ravi", "Ashok", "Raman"];
const secondItem = myArray[1];

// Only some types are allowed for index signature properties: string,
// number, symbol, template string patterns, and union types consisting only of these.

// While string index signatures are a powerful way to describe the “dictionary”
// pattern, they also enforce that all properties match their return type.
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok
  // name: string; // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

// properties of different types are acceptable if the index signature is a union
// of the property types
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

// We can make index signatures readonly,
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let friends: ReadonlyStringArray = ["Bob", "Fred"];
console.log(friends[0]); // Output: "Bob"

// Attempting to modify the value
// friends[0] = "Alice"; // This line would result in a TypeScript error

// What would happen if you try to access a non-existing property of an object whose
// index signature is { [key: string]: string }?
// As expected, TypeScript infers the type of the value to string. But if you check
// the runtime value — it's undefined
interface StringByString {
  [key: string]: string;
}

const object: StringByString = {};

const value = object["nonExistingProp"];
console.log(value); // const value: string // => undefined
// The index signature maps a key type to a value type — that's all.
// If you don't make that mapping correct, the value type can deviate
// from the actual runtime data type. To make typing more accurate, mark
// the indexed value as string or undefined. Doing so, TypeScript becomes
// aware that the properties you access might not exist

interface StringByStringV2 {
  [key: string]: string | undefined;
}

const obj: StringByStringV2 = {};

const val = obj["nonExistingProp"];
console.log(val); // const value: string // => undefined



interface NumbersNames {
  [key: string]: string;
}

const names: NumbersNames = {
  "1": "one",
  "2": "two",
  "3": "three",
};

// Accessing a value by a string key works as expected:
const value1 = names['1']; // OK
// Would it be an error if you access a value by a number 1?
const value2 = names[1]; // OK
// Nope, all good! JavaScript implicitly coerces numbers to strings when 
// used as keys in property accessors (names[1] is the same as names['1']). 
// TypeScript performs this coercion too.
// We can think that [key: string] is the same as [key: string | number].
