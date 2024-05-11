// Tuple Type
// A tuple type is another sort of Array type that knows exactly how many elements
// it contains, and exactly which types it contains at specific positions.
type StringNumberPair = [string, number];
// Like ReadonlyArray, it has no representation at runtime, but is significant to
// TypeScript. To the type system, StringNumberPair describes arrays whose 0 index
// contains a string and whose 1 index contains a number.

function doSomethingV2(pair: [string, number]) {
  const a = pair[0]; // const a: string
  const b = pair[1]; // const b: number
  // const c = pair[2]; // Tuple type '[string, number]' of length '2' has no element at index '2'.ts(2493)
}

doSomethingV2(["hello", 42]);

// Destructuring tuples
function doSomethingV3(stringHash: [string, number]) {
  const [inputString, hash] = stringHash; // const inputString: string // const hash: number
  console.log(inputString);
  console.log(hash);
}

// tuples can have optional properties
type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord; // const z: number | undefined
  console.log(`Provided coordinates had ${coord.length} dimensions`); // (property) length: 2 | 3
}

// Tuples can also have rest elements, which have to be an array/tuple type.
type StringNumberBooleans = [string, number, ...boolean[]];
// It describes a tuple whose first two elements are string and number
// respectively, but which may have any number of booleans following.

type StringBooleansNumber = [string, ...boolean[], number];
// StringBooleansNumber describes a tuple whose first element
// is string and then any number of booleans and ending with a number.

type BooleansStringNumber = [...boolean[], string, number];
// BooleansStringNumber describes a tuple whose starting
// elements are any number of booleans and ending with a string then a number.

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

// readonly Tuple Types
// tuple types have readonly variants, and can be specified by sticking a readonly
// modifier in front of them - just like with array shorthand syntax.

function doSomething(pair: readonly [string, number]) {
  // pair[0] = "hello!"; // Cannot assign to '0' because it is a read-only property.
}

let point = [3, 4] as const; // let point: readonly [3, 4]

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

// distanceFromOrigin(point);
/*
Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
  The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.ts(2345)
*/
// Here, distanceFromOrigin never modifies its elements, but expects a mutable tuple. 
// Since point’s type was inferred as readonly [3, 4], it won’t be compatible with 
// [number, number] since that type can’t guarantee point’s elements won’t be mutated.