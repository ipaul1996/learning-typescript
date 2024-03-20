// Default export

export default class Demo {

    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    showMessage(): void {
        console.log(this.message);
    }

}