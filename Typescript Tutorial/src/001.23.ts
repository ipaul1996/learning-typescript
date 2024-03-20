// Intersection Type
// type CombinedType = Type1 & Type2 & ... & TypeN;
// CombinedType will have all the properties and methods from Type1, Type2, ..., TypeN.

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

// Combined Type using Intersection Type
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// This pattern is useful when you have different functionalities or behaviors (methods) that you want to 
// combine into a single type. In this example, a UI widget is expected to be both draggable and resizable, 
// and the type system ensures that an object adhering to this type has both functionalities.



type Person = {
    name: string;
    age: number;
};

type Employees = {
    jobTitle: string;
    salary: number;
};

type WorkingPerson = Person & Employees;

const employeeDetails: WorkingPerson = {
    name: "John Doe",
    age: 30,
    jobTitle: "Software Developer",
    salary: 80000
};






  
  