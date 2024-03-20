"use strict";
const userForm = document.querySelector('.user-form');
console.log(userForm);
const username = document.querySelector('#name');
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        name: username.value
    };
    console.log(data);
});
