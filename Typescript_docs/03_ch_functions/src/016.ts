// Rest Parameters
//  we can define functions that take an unbounded number of arguments using
// rest parameters.

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3, 4); // 'a' gets value [10, 20, 30, 40]

// Rest Arguments
// we can provide a variable number of arguments from an
// iterable object (for example, an array) using the spread syntax.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
