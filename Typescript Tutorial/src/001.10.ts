/*
private:
1. Members marked as private are accessible only within the class where they are declared.They cannot be 
accessed or modified from outside the class.
2. private provides a way to encapsulate the internal details of a class, preventing external entities from 
directly interacting with its private members. This helps in hiding implementation details and reducing the risk 
of unintended interference.
3. Private members of a base class are not accessible in derived classes. Derived classes cannot directly access 
or override private members of the base class.

*/

class Example2 {
    private secret: string;
  
    constructor(secret: string) {
      this.secret = secret;
    }
  
    revealSecret(): string {
      return this.secret; // Accessing private property within the class
    }

    private doSomethingSecret(): void {
      console.log('Doing something secret');
    }
    
    revealSecretAndDoSomething(): void {
      this.doSomethingSecret(); // Accessing private method within the class
    }
}
  
const instance2 = new Example2('hidden');
console.log(instance2.revealSecret()); // Accessing private property through a public method
// console.log(instance.secret); // Error: Property 'secret' is private and only accessible within class 'Example'.
instance2.revealSecretAndDoSomething(); // Accessing private method through a public method



class Base {

    private baseSecret: string;
  
    constructor(secret: string) {
      this.baseSecret = secret;
    }
  
    revealBaseSecret(): string {
      return this.baseSecret;
    }

}
  
class Derived extends Base {

    revealDerivedSecret(): string {
      // return this.baseSecret; // Error: Property 'baseSecret' is private and only accessible within class 'Base'.
      return this.revealBaseSecret(); // Accessing through a public method is allowed
    }

}
  