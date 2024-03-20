"use strict";
let allUsers;
allUsers = [];
let userA;
userA = { userName: 'Ram', age: 25 };
let userB;
userB = { userName: 'Raja', age: 29 };
let userC;
userC = { userName: 'Rahul', age: 32 };
allUsers.push(userA);
allUsers.push(userB);
allUsers.push(userC);
let getRequest;
getRequest = "GET";
function requesthandler(requestType) {
    console.log(requestType);
}
requesthandler("GET");
let newEmployee1 = {
    id: 1,
    name: "IP",
    retire: (date) => {
        console.log(date);
    }
};
