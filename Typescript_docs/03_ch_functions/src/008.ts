function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

// Rule2: We’ve created a type parameter Func that doesn’t relate two values. That’s always a red flag, 
// because it means callers wanting to specify type arguments have to manually specify an extra 
// type argument for no reason. Func doesn’t do anything but make the function harder to read 
// and reason about! So, always use as few type parameters as possible.


const filteredArray1: number[] = filter1<number>(
  [1, 2, 3, 4, 5],
  (num: number) => num % 2 === 0
);
// Callers of filter1 only need to specify the type of the array elements (Type). The function signature 
// is simpler and more intuitive.


const filteredArray2: number[] = filter2<number, (arg: number) => boolean>(
  [1, 2, 3, 4, 5],
  (num: number) => num % 2 === 0
);
// Here the caller need to explicitly specifiy both Type (number) and Func (a function that takes 
// a number and returns a boolean).
