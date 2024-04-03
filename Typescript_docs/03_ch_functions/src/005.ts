// Constraints in Generics

// Let us understand subtype of an object type,
interface Person {
  name: string;
  age: number;
}

interface Student {
  name: string;
  age: number;
  studentID: string;
}

// Here Student is a subtype of Person and Person is supertype of Student.
// This is because every instance of Student will
// have all the properties of Person (name and age) in addition to its own
// properties (studentID). So, a Student object can be treated as a Person object,
// but not vice versa.

function printPersonName(p: Person) {
  console.log(p.name);
}

let s1: Student = {
  name: "IP",
  age: 27,
  studentID: "123",
};

printPersonName(s1);

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// <Type extends { length: number }>: This syntax declares a generic type parameter Type,
// which is constrained to be a subtype of an object type that has a length property of
// type number. This constraint ensures that any argument passed to longest must have
// a length property, allowing the function to compare the lengths of the two arguments.

const longerArray = longest([1, 2], [1, 2, 3]); // const longerArray: number[]
// In this case, both arguments are arrays, and arrays have a length property.

const longerString = longest("alice", "bob"); // const longerString: "alice" | "bob"
// Here, both arguments are strings, and strings also have a length property.

// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

function longestV2(a: string, b: string) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerStringV2 = longestV2("alice", "bob"); // const longerStringV2: string


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
It means, TypeScript cannot guarantee that Type will always be the exact same subtype 
as { length: number; }. In other words, Type could potentially be a more specific subtype 
that includes additional properties beyond just length.

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
