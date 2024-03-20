// Class Implementing an interface


interface UserFormatter {
    formatUser: () => string;
}

class MyUser implements UserFormatter {

    constructor(private fullName: string, private age: number) {};

    formatUser = () => {
        return `name: ${this.fullName}, age: ${this.age}`;
    }

}


let myuser1 = new MyUser('Kaju', 25);
let res = myuser1.formatUser();
console.log(res);