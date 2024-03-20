// custom type

type User = { userName: string, age?: number};
let allUsers: User[];
allUsers = [];

let userA: User;
userA = { userName: 'Ram', age: 25 };

let userB: User;
userB = { userName: 'Raja', age: 29 };

let userC: User;
userC = { userName: 'Rahul', age: 32 };

allUsers.push(userA);
allUsers.push(userB);
allUsers.push(userC);


type MyRequestType = "GET" | "POST";
let getRequest: MyRequestType;
getRequest = "GET";


function requesthandler(requestType: MyRequestType) {
    console.log(requestType);
}

requesthandler("GET");



type Employee = {      // Pascal case
    readonly id: number,
    name: string,
    retire: (data: Date) => void
}


let newEmployee1: Employee = {
    id: 1,
    name: "IP",
    retire: (date: Date) => {
        console.log(date);
    }
}
