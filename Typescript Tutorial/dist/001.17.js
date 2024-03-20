"use strict";
let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    return "I am 27 years old.";
};
userInfo2 = (name) => {
    console.log(name);
};
userInfo3 = (name, age) => {
    console.log(`Name is ${name}, Age is ${age}`);
};
userInfo1();
userInfo2("Indrajit");
userInfo3("Indrajit", 27);
