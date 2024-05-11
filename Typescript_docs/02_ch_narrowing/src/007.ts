// Type Predicate
// In TypeScript, a type predicate is a way to assert the type of a variable within
// a certain context. We define a function whose return type is a type predicate
// and is used to narrow down the type of a variable within a conditional block.

type FishV2 = {
  name?: string;
  swim: boolean;
};

type BirdV2 = {
  name?: string;
  fly: boolean;
};

function isFish(pet: FishV2| BirdV2): pet is FishV2 {
  return (pet as FishV2).swim !== undefined;
}
// pet is FishV2 --> type predicate(parameterName is Type)
// Any time isFish is called with some variable, TypeScript will narrow that
// variable to that specific type if the original type is compatible.

// Function to randomly get a small pet, either Fish or Bird
function getSmallPet(): FishV2 | BirdV2 {
  // Simulating a random selection of pet
  const isFish: boolean = Math.random() < 0.5;
  if (isFish) {
    return { swim: true };
  } else {
    return { fly: true };
  }
}

let pet = getSmallPet(); // let pet: Fish | Bird

// Checking the type of pet using the isFish predicate
if (isFish(pet)) {
  // let pet: FishV2 | BirdV2
  pet.swim; // let pet: FishV2
} else {
  pet.fly; // let pet: BirdV2
}

// Notice that TypeScript not only knows that pet is a Fish in the if branch; 
// it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.

const zoo: (FishV2 | BirdV2)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: FishV2[] = zoo.filter(isFish);
// or, equivalently
const underWater2: FishV2[] = zoo.filter(isFish) as FishV2[];
// Explicitly asserts the type of the result as Fish[].

// The predicate may need repeating for more complex examples
// Here, instead of directly passing the isFish function as a predicate to filter(), 
// a custom predicate function is defined inline.
const underWater3: FishV2[] = zoo.filter((pet): pet is FishV2 => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
