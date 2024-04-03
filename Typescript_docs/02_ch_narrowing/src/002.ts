// Equality Narrowing
// TypeScript also uses equality checks like ===, !==, ==, and != to narrow types.

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase(); // (parameter) x: string
    y.toLowerCase(); // (parameter) y: string
  } else {
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
    console.log(container.value); // (property) Container.value: number
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

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
    return Math.PI * Math.pow(shape.radius, 2); // TypeScript knows `shape` is a `Circle`
  } else {
    return Math.pow(shape.sideLength, 2); // TypeScript knows `shape` is a `Square`
  }
}
