// Conditional Types
// Conditional types take a form that looks a little like conditional expressions
// (condition ? trueExpression : falseExpression) in JavaScript.
// SomeType extends OtherType ? TrueType : FalseType;
// When the type on the left of the extends is assignable to the one on the right,
// then you’ll get the type in the first branch (the “true” branch); otherwise you’ll
// get the type in the latter branch (the “false” branch).

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

interface Cat {
  meow(): void;
}

type Example1 = Dog extends Animal ? number : string; // type Example1 = number
type Example2 = Cat extends Animal ? number : string; // type Example2 = string


type SomeType = number;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
  };
  return someOtherFunction;
}
// The type of someArg is evaluated based on the type of T when it is called passing some
// argument

let r1 = someFunction(true);
// let r1: (someArg: "TYPE A") => void

let r2 = someFunction("Hello!");
// let r2: (someArg: "TYPE B") => void


type StringOrNot<T> = T extends string ? string : never;
type CustomType = number;

// let x: StringOrNot<CustomType> = 2;
// Type 'number' is not assignable to type 'never'.ts(2322)