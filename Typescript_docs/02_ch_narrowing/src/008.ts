// Discriminated Union
// A discriminated union in TypeScript is a union type that utilizes a common property
// (often referred to as a discriminant) to distinguish between its alternative types.
// This allows for more precise type checking and helps TypeScript infer the specific
// type within the union.

// Define the types
interface SquareV2 {
  kind: "square";
  size: number;
}

interface CircleV2 {
  kind: "circle";
  radius: number;
}

interface TriangleV2 {
  kind: "triangle";
  sideA: number;
  sideB: number;
  sideC: number;
}

// Union type combining all shapes
type ShapeV2 = SquareV2 | CircleV2 | TriangleV2;

// Function using the discriminated union
function calculateArea(shape: ShapeV2): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "triangle":
      // Heron's formula to calculate area of a triangle
      const s = (shape.sideA + shape.sideB + shape.sideC) / 2;
      return Math.sqrt(
        s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC)
      );
  }
}

// Example usage
const square: SquareV2 = { kind: "square", size: 5 };
const circle: CircleV2 = { kind: "circle", radius: 3 };
const triangle: TriangleV2 = { kind: "triangle", sideA: 3, sideB: 4, sideC: 5 };

console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(circle)); // Output: ~28.27
console.log(calculateArea(triangle)); // Output: 6
