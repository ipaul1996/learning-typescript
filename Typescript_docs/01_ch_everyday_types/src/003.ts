// object type

let coordinate: { x: number; y: number } = { x: 0, y: 1 };

// In object type annotation we can seprate properties by ; or , and the last
// separator is optional

function printCoord(pt: { x: number; y: number }): void {
  console.log("The x-corrdinate value is " + pt.x);
  console.log("The y-corrdinate value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

// Optional properties
function printName(obj: { firstName: string; lastName?: string }) {
  console.log(`Name is ${obj.firstName} ${obj.lastName ?? ""}`.trim());
}

printName({ firstName: "Sara" });
printName({ firstName: "Indrajit", lastName: "Paul" });
