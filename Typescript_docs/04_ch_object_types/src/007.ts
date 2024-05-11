// Generic Object Type

interface Box<Type> {
  contents: Type;
}

// Here the Box is of generic type. Box is reusable in that Type can be substituted
// with anything.

let boxA: Box<string> = { contents: "hello" };
let boxB: Box<boolean> = { contents: true };
let boxC: Box<number> = { contents: 5 };

type Student = {
  name: string;
  gender: "MALE" | "FEMALE" | "OTHERS";
  class: number;
};

let boxD: Box<Student> = {
  contents: { name: "Sara", gender: "FEMALE", class: 12 },
};

type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

const numberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 25,
};

const stringPair: KeyValuePair<string, string> = {
  key: "name",
  value: "John",
};


// Generic helper types

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>; // type OneOrManyOrNull<Type> = OneOrMany<Type> | null
type OneOrManyOrNullStrings = OneOrManyOrNull<string>; // type OneOrManyOrNullStrings = OneOrMany<string> | null

// Example usage of OrNull<Type>
const maybeString: OrNull<string> = "Hello";
const maybeNumber: OrNull<number> = null;

// Example usage of OneOrMany<Type>
const singleValue: OneOrMany<number> = 42;
const multipleValues: OneOrMany<number> = [1, 2, 3];

// Example usage of OneOrManyOrNull<Type>
const singleOrNull: OneOrManyOrNull<number> = null;
const multipleOrNull: OneOrManyOrNull<number> = [4, 5, 6];

// Example usage of OneOrManyOrNullStrings
const stringsOrNull: OneOrManyOrNullStrings = ["apple", "banana"];
const stringOrNull: OneOrManyOrNullStrings = "orange";
const nullValue: OneOrManyOrNullStrings = null;