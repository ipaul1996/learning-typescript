// Abstract class

// Abstraction ---> Hiding the implementation details
// class defined with the abstract keyword is an abstract class
// We can not instantiate an abstract class


abstract class UserDetails2 {

    usersName: string;
    usersAge: number;

    constructor(usersName: string, usersAge: number) {
        this.usersName = usersName;
        this.usersAge = usersAge;
    }

    abstract display(): void;

}


class Students extends UserDetails2 {

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

let student5 = new Students("Sandip", 25, 1);
student5.display();

// If a class extends from an abstract class then any abstract method present inside 
// the abstract class has to be implemented in that class. Otherwise, the said class
// also has to be marked as abstract.