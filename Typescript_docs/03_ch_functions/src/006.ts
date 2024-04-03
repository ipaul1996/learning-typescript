// Specifying Type Argument

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr1 = combine([1, 2], [3, 4]);

// const arr2 = combine([1, 2, 3], ["hello"]); // Type 'string' is not assignable to type 'number'.ts(2322)

// TypeScript infers the type Type based on the elements of both arrays passed to the function. Since Type 
// must accommodate both number and string types, TypeScript infers it as string | number, which means it 
// could be either a string or a number. However, when we try to concatenate arrays with different element 
// types (number and string), TypeScript raises an error because it's not safe to assume that the resulting 
// array will have elements of type string | number. This is because arrays in TypeScript are homogeneous, 
// meaning they can only contain elements of a single type. To resolve this issue,
const arr2 = combine<number | string>([1, 2, 3], ["hello"]);
