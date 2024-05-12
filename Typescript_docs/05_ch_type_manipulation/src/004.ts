// Indexed Access Types
// We can use an indexed access type to look up a specific property on another type,

type Human = { age: number; name: string; alive: boolean };
type Age = Human["age"]; // type Age = number

type I1 = Human["age" | "name"]; // type I1 = string | number
type I2 = Human[keyof Human]; // type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Human[AliveOrName]; // type I3 = string | boolean

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person1 = (typeof MyArray)[number]; // type Person1 = { name: string; age: number; }
type Age1 = (typeof MyArray)[number]["age"]; // type Age1 = number
type Age2 = Person1["age"]; // type Age2 = number
type x = "age";
type Age3 = Person1[x]; // type Age3 = number 
// But we can't do the following,
const y = "age";
// type Age4 = Person1[y]; // Error
/*
Type 'y' cannot be used as an index type.ts(2538)
'y' refers to a value, but is being used as a type here. Did you mean 'typeof y'?ts(2749)
*/

