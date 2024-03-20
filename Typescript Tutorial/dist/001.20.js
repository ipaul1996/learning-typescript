"use strict";
class MyUser {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
        this.formatUser = () => {
            return `name: ${this.fullName}, age: ${this.age}`;
        };
    }
    ;
}
let myuser1 = new MyUser('Kaju', 25);
let res = myuser1.formatUser();
console.log(res);
