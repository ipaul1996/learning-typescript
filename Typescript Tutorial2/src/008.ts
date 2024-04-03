// Optional parameter
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// Default parameter
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

// Rest Parameter
function doubleSum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2); // (parameter) num: number
  let total = doubled.reduce((prev, curr) => prev + curr, 0); // (parameter) prev: number // (parameter) curr: number
  return `${message} ${total}`;
}

let result = doubleSum("The total is:", 1, 2, 3, 4);
console.log(result);

// Parameter of union type
function processInput(input: string | number): void {
  if (typeof input === "number") {
    console.log(`The result is: ${input * 2}`);
  } else {
    console.log(`The result is: ${input.toUpperCase()}`);
  }
}

processInput("Hello Typescript Learners!");
processInput(5);

// Parameter is of type object
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id: id, isActive: id % 2 === 0 };
}

const firstEmployee = createEmployee({ id: 1 });
const secondEmployee = createEmployee({ id: 2 });

function createEmployeeV2(employee: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id: employee.id, isActive: employee.id % 2 === 0 };
}

const thirdEmployee = createEmployeeV2({ id: 1 });

const myEmployee = {
  id: 2,
};
const fourthEmployee = createEmployeeV2(myEmployee);

// const fifthEmployee = createEmployeeV2({id: 3, name: "Ravi"}); // Error
// Object literal may only specify known properties, and 'name' does not exist in type '{ id: number; }'
// but,
const myEmployee2 = {
    id: 2,
    name: "Ravi"
};
const sixthEmployee = createEmployeeV2(myEmployee2); // No Error

// In TypeScript, object literals are subject to excess property checking. 
// This means that if we directly specify an object literal, TypeScript will enforce that 
// the properties you provide match exactly with what is expected. If you try to include 
// properties that are not defined in the type, TypeScript will raise an error.
// But, when we are creating an object myEmployee2 separately, which includes both id 
// and name properties. When you pass this object to createEmployeeV2, TypeScript doesn't 
// perform the same strict property check because it's not dealing with an object literal 
// directly. It simply checks that myEmployee2 has an id property, which it does, so no error is raised.


