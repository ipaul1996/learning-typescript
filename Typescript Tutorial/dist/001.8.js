"use strict";
class UserDetails2 {
    constructor(usersName, usersAge) {
        this.usersName = usersName;
        this.usersAge = usersAge;
    }
}
class Students extends UserDetails2 {
    constructor(usersName, usersAge, studentId) {
        super(usersName, usersAge);
        this.studentId = studentId;
    }
    display() {
        console.log(`userName: ${this.usersName}, usersAge: ${this.usersAge}, studentId: ${this.studentId}`);
    }
}
let student5 = new Students("Sandip", 25, 1);
student5.display();
