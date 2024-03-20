// class
class UserDetails {

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

let myUser1 = new UserDetails("IP", 27);
myUser1.display();

