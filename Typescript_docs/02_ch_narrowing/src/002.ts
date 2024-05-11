// Equality Narrowing
// TypeScript also uses equality checks like ===, !==, ==, and != to narrow types.

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // When x and y are equal, TypeScript narrows their types to string.
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase(); // (parameter) x: string
    y.toLowerCase(); // (parameter) y: string
  } else {
    // When x and y are not equal, TypeScript keeps their original types.
    console.log(x); // (parameter) x: string | number
    console.log(y); // (parameter) y: string | boolean
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    // TypeScript narrows the type of 'container.value' to 'number'.
    console.log(container.value); // (property) Container.value: number
    // Now we can safely multiply 'container.value'.
  container.value *= factor;
  }
  // But, if we use strict equality check,
  // if (container.value !== null) {
  //   console.log(container.value); // (property) Container.value: number | undefined
  //   container.value *= factor; // 'container.value' is possibly 'undefined'.ts(18048)
  // }
}

// Point to be noted that null == undefined --> true and null === undefined --> false

type Shape = Circle | Square;

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    // TypeScript knows 'shape' is a 'Circle' within this block.
    return Math.PI * Math.pow(shape.radius, 2); // TypeScript knows `shape` is a `Circle`
  } else {
    // TypeScript knows 'shape' is a 'Square' within this block.
    return Math.pow(shape.sideLength, 2); // TypeScript knows `shape` is a `Square`
  }
}
