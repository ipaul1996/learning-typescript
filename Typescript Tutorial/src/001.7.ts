// Inheritance - Using feature of one class in other

class UserDetails1 {

    // properties, methods, constructor

    usersName: string;
    usersAge: number;

    constructor(usersName: string, usersAge: number) {
        this.usersName = usersName;
        this.usersAge = usersAge;
    }

    display(): void {
        console.log(`userName: ${ this.usersName }, usersAge: ${ this.usersAge }`);
    }


}


class Student extends UserDetails1 {

    studentId: number;

    constructor (usersName: string, usersAge: number, studentId: number) {
        super(usersName, usersAge);
        this.studentId = studentId;
    }

    // super class methods can be overidden
    display(): void {
        console.log(`userName: ${ this.usersName }, usersAge: ${ this.usersAge }, studentId: ${ this.studentId }`);
    }


}


let student1: Student = new Student('IP', 27, 1002589);
student1.display();