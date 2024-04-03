// Merging and Extending interfaces

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "john",
  age: 25,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.getDetails());

interface EmployeeV2 extends Person {
  employeeId: number;
}

const employee: EmployeeV2 = {
  name: "jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface ManagerV2 extends Person, DogOwner {
  managePeople(): void;
}

console.log(employee.getDetails());

const manager: ManagerV2 = {
  name: "bob",
  age: 35,
  dogName: "rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}, Age: ${this.age}`;
  },
  managePeople() {
    console.log("Managing People...");
  },
};


manager.managePeople();
manager.getDetails();
manager.getDogDetails();