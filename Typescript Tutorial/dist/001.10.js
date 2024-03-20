"use strict";
class Example2 {
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        return this.secret;
    }
    doSomethingSecret() {
        console.log('Doing something secret');
    }
    revealSecretAndDoSomething() {
        this.doSomethingSecret();
    }
}
const instance2 = new Example2('hidden');
console.log(instance2.revealSecret());
instance2.revealSecretAndDoSomething();
class Base {
    constructor(secret) {
        this.baseSecret = secret;
    }
    revealBaseSecret() {
        return this.baseSecret;
    }
}
class Derived extends Base {
    revealDerivedSecret() {
        return this.revealBaseSecret();
    }
}
