"use strict";
class UserDetails1 {
    constructor(usersName, usersAge) {
        this.usersName = usersName;
        this.usersAge = usersAge;
    }
    display() {
        console.log(`userName: ${this.usersName}, usersAge: ${this.usersAge}`);
    }
}
class Student extends UserDetails1 {
    constructor(usersName, usersAge, studentId) {
        super(usersName, usersAge);
        this.studentId = studentId;
    }
    display() {
        console.log(`userName: ${this.usersName}, usersAge: ${this.usersAge}, studentId: ${this.studentId}`);
    }
}
let student1 = new Student('IP', 27, 1002589);
student1.display();
