// Type Predicate
// In TypeScript, a type predicate is a way to assert the type of a variable within
// a certain context. We define a function whose return type is a type predicate
// and is used to narrow down the type of a variable within a conditional block.

type Fish = {
  name?: string;
  swim: boolean;
};

type Bird = {
  name?: string;
  fly: boolean;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// pet is Fish --> type predicate(parameterName is Type)
// Any time isFish is called with some variable, TypeScript will narrow that
// variable to that specific type if the original type is compatible.

function getSmallPet(): Fish | Bird {
  // Simulating a random selection of pet
  const isFish: boolean = Math.random() < 0.5;
  if (isFish) {
    return { swim: true };
  } else {
    return { fly: true };
  }
}

let pet = getSmallPet(); // let pet: Fish | Bird

if (isFish(pet)) {
  // let pet: Fish | Bird
  pet.swim; // let pet: Fish
} else {
  pet.fly; // let pet: Bird
}

// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows
// that in the else branch, you don’t have a Fish, so you must have a Bird.

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// Explicitly asserts the type of the result as Fish[].

// The predicate may need repeating for more complex examples
// Here, instead of directly passing the isFish function as a predicate to filter(), 
// a custom predicate function is defined inline.
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
