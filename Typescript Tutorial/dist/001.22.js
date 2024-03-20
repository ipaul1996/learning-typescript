"use strict";
function printUserInfo(userId) {
    console.log(`User Id: ${userId}`);
}
const printUserInfo1 = (userId) => {
    console.log(`User Id: ${userId}`);
};
printUserInfo("101");
printUserInfo(101);
printUserInfo(true);
printUserInfo({ id: 101 });
