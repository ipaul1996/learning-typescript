// The in operator narrowing
// JavaScript has an operator for determining if an object or its prototype chain has
// a property with a name: the in operator. TypeScript takes this into account as a way
// to narrow down potential types.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim(); // (parameter) animal: Fish
  }

  return animal.fly(); // (parameter) animal: Bird
}

// The optional properties will exist in both sides for narrowing.
type Car = { drive: () => void };
type Plane = { fly: () => void };
type Vehicle = { drive?: () => void; fly?: () => void };

function operate(vehicle: Car | Plane | Vehicle) {
  if ("drive" in vehicle) {
    vehicle; // (parameter) vehicle: Car | Vehicle
    // TypeScript narrows down vehicle to Car or Vehicle
  } else {
    vehicle; // (parameter) vehicle: Plane | Vehicle
    // TypeScript narrows down vehicle to Plane or Vehicle
  }
}
