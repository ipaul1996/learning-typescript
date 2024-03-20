// object

let employee1: {
    readonly id: number;  // Can not be modified
    name: string;
    salary?: number;    // optional property
    retire: (date: Date) => void
} = {
    id: 1, 
    name: "John",
    retire: (date: Date) => {
        console.log(date);
    }

};


let calculator1: {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
} = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};
  

let car1: {
    make: string;
    model: string;
    year: number;
    owner: {
      name: string;
      age: number;
    };
} = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    owner: {
      name: "John",
      age: 30,
    },
};


// array of objects
let students1: {
    id: number;
    name: string;
}[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];


// dynamic objects
let dynamicObject1: {
    [key: string]: number;
} = {
    apples: 5,
    oranges: 3,
    bananas: 7,
};

// function returning an object
function createUser1(id: number, name: string): { id: number; name: string } {
    return { id, name };
}
  
let newUser1 = createUser1(1, "Alice");
  
  
  


