"use strict";
class UserDetails {
    constructor(usersName, usersAge) {
        this.usersName = usersName;
        this.usersAge = usersAge;
    }
    display() {
        console.log(`userName: ${this.usersName}, usersAge: ${this.usersAge}`);
    }
}
let myUser1 = new UserDetails("IP", 27);
myUser1.display();
