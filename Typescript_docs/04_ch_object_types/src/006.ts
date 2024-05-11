// Intersection Types
// This construct called is mainly used to combine existing object types.

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircleV2 = Colorful & Circle;
//  We’ve intersected Colorful and Circle to produce a new type that has all
// the members of Colorful and Circle.

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 }); // OK
// draw({ color: "red", raidus: 42 }); // Error
// Object literal may only specify known properties, but 'raidus' does not exist
// in type 'Colorful & Circle'. Did you mean to write 'radius'? ts(2561)

type DogType = {
  name: string;
  bark(): void;
};

type CatType = {
  name: string;
  meow(): void;
};

// TypeScript will create a new type that includes both members
type PetType = DogType & CatType;

type A1 = {
  id: string;
};

type A2 = {
  id: number;
};

type Af = A1 & A2;

/*
let obj: Af = {
    id: 2, // Type 'number' is not assignable to type 'never'.ts(2322)
}
*/
// The error message hints at what our type intersection actually did. No value can
// be both a string and a number at the same time, so our id property gets the type
// never. The overall Af type is {id: never}.

interface B1 {
  id: string;
}

interface B2 {
  id: number;
}

type Bf = B1 & B2;

/*
let obj1: Bf = {
    id: 5, // Type 'number' is not assignable to type 'never'.ts(2322)
};
*/
