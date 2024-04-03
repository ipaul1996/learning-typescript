// Guidelines for Writing Good Generic Functions
// Rule1: Favor using the type parameter directly over unnecessary constraints
// --> It suggests that whenever defining generic functions, it's preferable to
// use the type parameter itself to describe the type relationships within the
// function rather than applying constraints that don't add meaningful restrictions.

// Approach: 1
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

// Approach: 2
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number 
const a = firstElement1([1, 2, 3]);
// b: any
const b = firstElement2([1, 2, 3]);

// Here Approach: 1 is better than Approach: 2. 
// In Approach: 1, the type parameter Type is used directly to define the type of the 
// input array arr. This allows TypeScript to infer the type of the elements in the array 
// based on the input argument ([1, 2, 3]), and thus a will have the type number, which is 
// good because it accurately reflects the type of the elements in the array.
// In Approach: 2, the type parameter Type is constrained to be an array (Type extends any[]). 
// However, since any[] represents any array type, it doesn't provide any additional information 
// about the type of elements in the array. As a result, TypeScript infers the type of b as any, 
// which is considered bad because it's less specific and can lead to type-related errors.
