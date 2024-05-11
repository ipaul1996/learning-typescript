// Specifying Type Argument

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr1 = combine([1, 2], [3, 4]);

// const arr2 = combine([1, 2, 3], ["hello"]); // Type 'string' is not assignable to type 'number'.ts(2322)
// const arr3 = combine(["hello"], [1, 2, 3]); // Type 'number' is not assignable to type 'string'.ts(2322)

// We can resolve the above issue by explicitly specifying the type argument,
const arr4 = combine<number | string>([1, 2, 3], ["hello"]);
