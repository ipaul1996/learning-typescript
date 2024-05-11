// Constraints in Generics
// We use a constraint to limit the kinds of types that a type parameter can accept.

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// <Type extends { length: number }>: This syntax declares a generic type parameter Type,
// which is constrained to an object type that has a length property of type number. 
// Thus, we were allowed to access the .length property of the a and b parameters. 
// Without the type constraint, we wouldn’t be able to access those properties because 
// the values might have been some other type without a length property.

const longerArray = longest([1, 2], [1, 2, 3]); // const longerArray: number[]
// In this case, both arguments are arrays, and arrays have a length property.

const longerString = longest("alice", "bob"); // const longerString: "alice" | "bob"
// Here, both arguments are strings, and strings also have a length property.

// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);


// One common mistake that we do is,
/*
function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
  if(obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum }; // Error 
  }
};

Error: Type '{ length: number; }' is not assignable to type 'Type'.
'{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' 
could be instantiated with a different subtype of constraint '{ length: number; }'.ts(2322)
-->
It means, the function promises to return the same kind of object as was passed in, not just 
some object matching the constraint.

We can do the following to make typescript believe that Type has no additional properties
other than length,

*/

function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
  if(obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum } as Type; // Type Assertion
  }
};
