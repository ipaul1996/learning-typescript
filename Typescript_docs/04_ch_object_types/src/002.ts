// Property Modifiers
// Each property within that object type can specify several attributes:
// 1. Type
// 2. Optional - By default, properties in TypeScript object types are
// required, meaning they must be present in any object of that type. However,
// you can indicate that a property is optional by appending a ? to its name in
// the type definition. This means that the property may or may not be present
// in objects of that type.
// 3. Readonly - This specifies whether the property can be written to or modified
// after the object is created. By default, properties in TypeScript object types are
// mutable, meaning their values can be changed. However, you can indicate that a
// property is readonly by using the readonly modifier before the property name in
// the type definition. Readonly properties can only be assigned a value when the
// object is created, and their values cannot be modified afterward. It should be
// noted that it won’t change any behavior at runtime.

type Fellow = {
  name: string; // Type is string, required
  age: number; // Type is number, required
  email?: string; // Type is string, optional
  readonly id: number; // Type is number, readonly
};

const person1: Fellow = {
  name: "Alice",
  age: 30,
  id: 123456,
};

// Accessing properties
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30
console.log(person1.email); // Output: undefined

// Attempting to modify a readonly property (this will cause a TypeScript error)
// person1.id = 789;   // Error: Cannot assign to 'id' because it is a read-only property.

interface Shape {
  readonly color: string;
  width: number;
  height: number;
}

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function getShape(): Shape {
  // Randomly generate values for color, width, and height
  const colors = ["red", "green", "blue", "yellow", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const minWidth = 20;
  const maxWidth = 100;
  const minHeight = 20;
  const maxHeight = 100;
  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  const randomHeight =
    Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  // Return a randomly generated shape object
  return {
    color: randomColor,
    width: randomWidth,
    height: randomHeight,
  };
}

function paintShape(opts: PaintOptions) {
  // let xPos = opts.xPos; // (property) PaintOptions.xPos?: number | undefined
  // let yPos = opts.yPos; // (property) PaintOptions.yPos?: number | undefined
  let xPos = opts.xPos === undefined ? 0 : opts.xPos; // let xPos: number
  let yPos = opts.yPos === undefined ? 0 : opts.yPos; // let yPos: number
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

function paintShapeV2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos); // (parameter) xPos: number
  console.log("y coordinate at", yPos); // (parameter) yPos: number
}

// Using the readonly modifier doesn’t necessarily imply that a value is totally
// immutable - or in other words, that its internal contents can’t be changed.
// It just means the property itself can’t be re-written to.

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
/*
function evict(home: Home) {
  home.resident = {
    name: "Victor the Evictor",
    age: 42,
  };  // We cannot assign to 'resident' because it is a read-only property.
}
*/
