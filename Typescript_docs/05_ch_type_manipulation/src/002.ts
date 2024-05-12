// keyof
// The keyof operator takes an object type and produces a string or numeric
// literal union of its keys.

type Person = {
  name: string;
  age: number;
};

type Details = keyof Person;
// type Details is same as type Details = "name" | "age";

// If the type has a string or number index signature, keyof will return those types instead,
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number
// M is string | number — this is because JavaScript object keys are
// always coerced to a string, so obj[0] is always the same as obj["0"].

function extractAndConvert<T extends object, P extends keyof T>(
  obj: T,
  key: P
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Sara" }, "name");
// extractAndConvert({ name: "Sara" }, "age");
// Argument of type '"age"' is not assignable to parameter of type '"name"'.ts(2345)

