// Type alias
type User = { id: number; name: string; isActive: boolean };
// We can also export it

const john: User = { id: 1, name: "John", isActive: true };

const susan: User = { id: 2, name: "Susan", isActive: false };

function createUser(user: User): User {
  console.log(`Hello there! ${user.name.toUpperCase()}`);
  return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
value = 123;

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark');
