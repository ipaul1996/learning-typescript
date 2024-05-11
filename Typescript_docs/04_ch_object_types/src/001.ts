// object type can be anonymous,
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// They can be named by using an interface,
interface Person {
  name: string;
  age: number;
}

function greetV2(person: Person) {
  return "Hello " + person.name;
}

// They can be named by using a type alias,
type PersonType = {
  name: string;
  age: number;
};

function greetV3(person: Person) {
  return "Hello " + person.name;
}
