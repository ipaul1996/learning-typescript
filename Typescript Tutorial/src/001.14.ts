// import { studentName, studentAge, sayHello as myHello, Demo } from "./001.13";
import * as Student from "./001.13";


function displayInfo(): void {
    console.log(`${Student.studentName}, ${Student.studentAge}`);
}

displayInfo();

// myHello();
Student.sayHello();


let obj = new Student.Demo("Hello");
console.log(obj.showMessage);