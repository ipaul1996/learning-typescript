// Generics

function printUserInfo<X>(userId: X) {
    console.log(`User Id: ${ userId }`);

}

const printUserInfo1 = <X>(userId: X) => {
    console.log(`User Id: ${ userId }`);

}


printUserInfo("101");
printUserInfo(101);
printUserInfo(true);
printUserInfo({ id: 101 });