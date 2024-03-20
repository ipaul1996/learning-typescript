"use strict";
let myUserId;
myUserId = "101";
myUserId = 101;
function displayUserInfo(myUserId) {
    console.log(myUserId);
}
displayUserInfo("101");
displayUserInfo(101);
function kgTolbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgTolbs(10));
console.log(kgTolbs('10kg'));
