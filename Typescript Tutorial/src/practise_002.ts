// const value = Math.random() < 0.5 ? "a" : "b";

// if(value !== "a") {

// } else if(value === "b") {

// }

const names = ["a", 1, 2, "b"];

names.forEach((name) => {
  // Narrowing
  if (typeof name === "string") console.log(name.toUpperCase());
  else console.log(name);
});

function printName(obj: { first: string; last?: string }) {
  console.log(`Name is : ${obj.first} ${obj.last?.toUpperCase() ?? ""}`.trim());
}

printName({ first: "Indrajit" });

let constString: "Hello World!" = "Hello World!";

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}

liveDangerously(null);
