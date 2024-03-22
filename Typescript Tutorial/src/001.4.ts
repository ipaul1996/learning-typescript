// object type

let user1: object;
user1 = { name: "John", age: 25 };
// user1 = 22; // Compilation Error

let users: object[];
users = [
  { name: "Pravin", age: 27 },
  { name: "Kamal", age: 36 },
];

let user3: { userName: string; age?: number }; // Question Mark means optional property
user3 = { userName: "Alok", age: 17 };

users.push(user3);
console.log(users);
