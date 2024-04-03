// Type Aliases
// In TypeScript, a type alias is a way to give a name to a type. It allows you to
// create custom names for complex types.

type Point = {
  x: number;
  y: number;
};

function printCoordV1(pt: Point) {
  console.log(`The x-coordinate is ${pt.x}`);
  console.log(`The y-coordinate is ${pt.y}`);
}

printCoordV1({ x: 6, y: -5 });

type ID = number | string;

// Using a type alias for a Union Type
function processID(id: ID) {
  // Type narrowing based on the type guard
  if (typeof id === "number") {
    console.log("Processing numeric ID:", id.toFixed(2));
  } else {
    console.log("Processing string ID:", id.toUpperCase());
  }
}

// Calling the function with different types of IDs
processID(123); // Processing numeric ID: 123.00
processID("abc"); // Processing string ID: ABC

// Extending type via intersection
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
// & -->  Intersection operator combines multiple types into a single type 
// called Intersection Type, intersecting their properties. 
// This allows the resulting type to have all properties 
// and methods from each of the constituent types.

// Create an object of type Bear
const grizzlyBear: Bear = {
  name: "Grizzly",
  honey: true,
};

// Display information about the bear
console.log(`Name: ${grizzlyBear.name}`);
console.log(`Honey: ${grizzlyBear.honey ? "Yes" : "No"}`);

// In case of type aliases, Once a type has been created we can not change it(add, delete or update properties).
