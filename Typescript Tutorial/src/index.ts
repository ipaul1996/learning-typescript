// console.log("Hello world!");

// let age: number = 20;
// age = 'a';  // Type 'string' is not assignable to type 'number'.


const userForm = document.querySelector('.user-form') as HTMLFormElement;
console.log(userForm);


const username = document.querySelector('#name') as HTMLInputElement;



userForm.addEventListener("submit", (event: Event) => {

    event.preventDefault();

    const data = {
        name: username.value
    };

    console.log(data);

});