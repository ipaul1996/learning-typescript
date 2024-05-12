
type AUnion = string | boolean | never; // type AUnion = string | boolean
// never is ignored here

// Distributive Conditional Types
// type Exclude<T, U> = T extends U ? never : T; --> Inbuilt Type
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // type ResultType = "c"
/*
'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' |  'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => 'c'
*/


type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[
// Distributive conditional types in TypeScript distribute over union types, 
// transforming each constituent type individually and combining them into a union.
// In this example, the `ToArray<Type>` type takes a type `Type` and returns an array of `Type`.
// The conditional type `Type extends any ? Type[] : never` checks if `Type` extends `any`.
// Since `Type` in our usage (string | number) is a union type, the distributive property applies.
// TypeScript processes each constituent type (string and number) separately.
// So, `StrArrOrNumArr` is a union of arrays: `string[] | number[]`.
// It transforms each constituent type of the union (`string` and `number`) into an array of that type.
// Therefore, `StrArrOrNumArr` represents either an array of strings or an array of numbers.
// To avoid the above behavior we can do the following,

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'ArrOfStrOrNum' is no longer a union.
type ArrOfStrOrNum = ToArrayNonDist<string | number>; // type ArrOfStrOrNum = (string | number)[]




