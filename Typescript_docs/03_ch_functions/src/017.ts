// Parameter Destructuring
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

// With type annotation,
function sumV2({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

type ABC = { a: number; b: number; c: number };
function sumV3({ a, b, c }: ABC) {
  console.log(a + b + c);
}
