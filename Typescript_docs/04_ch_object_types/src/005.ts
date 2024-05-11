// Extending Types

// Let us consider a type,
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// Let us consider a more specific type of the above type,
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
// Here all the properties of BasicAddress type are repeated and one new property
// is added i.e., unit. So we have a better way to write AddressWithUnit,
interface AddressWithUnitV2 extends BasicAddress {
  unit: string;
}
// The extends keyword on an interface allows us to effectively copy members from other
// named types, and add whatever new members we want. This can be useful for cutting down
// the amount of type declaration boilerplate we have to write, and for signaling intent
// that several different declarations of the same property might be related.
// For example, AddressWithUnit didn’t need to repeat the street property, and because
// street originates from BasicAddress, a reader will know that those two types are
// related in some way.

// interfaces can also extend from multiple types,
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

// When extending another interface, if there's a conflict (i.e., two interfaces have
// a member with the same name), TypeScript will merge the member types if they are
// compatible or raise an error if they're not.
interface A {
  prop: string;
}

interface B {
  prop: string;
}

// Merging A and B
interface C extends A, B {}

interface X {
  id: string;
}

interface Y {
  id: number;
}

/*
interface Z extends X, Y {
  
}
*/
// Interface 'Z' cannot simultaneously extend types 'X' and 'Y'.
//  Named property 'id' of types 'X' and 'Y' are not identical.ts(2320)
