
// Named Export
export let studentName = "Kaju";
export let studentAge = 20;

export function sayHello() {
    console.log("Hello!");
}

export class Demo {

    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    showMessage(): void {
        console.log(this.message);
    }

}