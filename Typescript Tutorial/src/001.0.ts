// Built-In Types: number, boolean, string, void, undefined, null

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = false;
let dax = "Hello";


// number
let userId: number;

// string
let firstName: string;
let lastName: string;
let fullName: string;

// boolean
let isActivated: boolean;

userId = 1;
firstName = "Indrajit";
lastName = " Paul";
isActivated = true;

fullName = firstName.concat(lastName);

console.log(fullName);
console.log(fullName.split(" "));


// any (super type) --> the any type is a special type that can represent values of any data type. It is a way to opt out of the 
// static type checking that TypeScript provides. When a variable is declared with the any type, it means that 
// TypeScript will not enforce type checking on that variable, allowing you to assign values of any type to it.
let level;  // type is 'any' --> Not recommended to use
level = 1;
level = 'a';

let userName: any;
userName = "IP";
userName = 121;
userName = true;
userName = [10, 20];



// array --> arrays are used to store ordered collections of elements of the same type.
// Arrays in TypeScript can dynamically grow or shrink as elements are added or removed.
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(number =>  console.log(number * number));

// let userNames: string[];
let userNames: Array<string>;
userNames = ["Indrajit", "Amit", "Kaju"];

// let multipleTypes: (string | number)[];
let multipleTypes: Array<string | number>;
multipleTypes = ["Indrajit", "Amit", "Kaju", 1];


// tuples --> It is a fixed size array where each element has a specific type. (It is like key - value pairs)
// Each element in the tuple can have a different data type, and the order of the elements is fixed.
let user: [number, string] = [1, "Indrajit"];
console.log(user[0].toString());
console.log(user[1].toLowerCase());

let testUser: [number, string, boolean] = [1, "Indrajit", true];

let myUser5: [number, string];
myUser5 = [101, "IP"];
myUser5.push(102, "Mimi"); // Here myUser5 is internally treated as an array at the runtime. 
// TypeScript cares about types and type checking during the compile-time phase, it does not care about what happens 
// at the runtime. At runtime it is just regular JavaScript.
console.log(myUser5); // [ 101, 'IP', 102, 'Mimi' ]


let myUser6: [number, string];
// myUser6 = [101, "IP", 102, "Mimi"]; // Compilation Error
// console.log(myUser6);



// null and undefined types
// The value undefined means value is not assigned & you don’t know its value. It is an 
// unintentional absence of value. It means that a variable has been declared but has not 
// yet been assigned a value.The value null indicates that you know that the field does 
// not have a value. It is an intentional absence of value.
// Whenever we declare a variable without initializing it with a value, TypeScript 
// initializes it as undefined. But TypeScript never assigns null to any variable. We have 
// to assign Null to variable to make it null.

let a: undefined;          // a is a variable of type undefined
// The only value that we can assign to an undefined variable is undefined.  
// We can assign null only if StrictNullCheck is disabled). Any other values like 
// string, object, numbers, etc are not allowed.



let b: null=null;          // b is a variable of type null
// The only value that we can assign to it is null.  We can also assign undefined 
// only if StrictNullCheck is disabled.
 
console.log(typeof(a));   //undefined
console.log(typeof(b));   //object




// void
function display(): void {
    console.log("Hi! I am displaying");
}

display();

