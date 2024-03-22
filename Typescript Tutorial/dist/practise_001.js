"use strict";
const x = 2;
const y = "Hello world!";
let z = 2;
z = "Number changed to string";
let bool = false;
let myArray1 = ["a", "b", "c", "d", "e"];
let myArray2 = ["a", "b", "c", "d", "e"];
let myArray3 = ["a", 0, "c", 1, "e"];
let myUser = [1, "IP", true];
let m = undefined;
let m2 = null;
console.log(typeof m);
console.log(typeof m2);
var MatchResult;
(function (MatchResult) {
    MatchResult["success"] = "SUCCESS";
    MatchResult["failure"] = "FAILURE";
    MatchResult["tie"] = "TIE";
})(MatchResult || (MatchResult = {}));
var MatchResult1;
(function (MatchResult1) {
    MatchResult1[MatchResult1["success"] = 0] = "success";
    MatchResult1[MatchResult1["failure"] = 1] = "failure";
    MatchResult1[MatchResult1["tie"] = 2] = "tie";
})(MatchResult1 || (MatchResult1 = {}));
console.log(MatchResult);
let resultOfMatch1 = MatchResult.success;
console.log(resultOfMatch1);
console.log(MatchResult1);
let person1;
person1 = { name: "Amit", age: 29 };
let persons = [
    { name: "Amit", age: 29 },
    { name: "IP", age: 27 },
];
let person2;
person2 = { name: "Amit", age: 29 };
let updatedPerson2 = Object.assign(Object.assign({}, person2), { newProperty: "some value" });
person2 = updatedPerson2;
let acc1;
let acc2;
let acc3;
acc1 = {
    account_number: 123456789,
    ifsc_code: "ABC123",
    name: "John Doe",
    branch: "Main Street Branch",
    bank: "Bank of Example",
    comment: (data) => {
        console.log(data);
    },
};
let accounts;
