function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet("world");

function greetV2(s: string) {
  console.log("Hello, " + s);
}

// Rule3: If a type parameter only appears in one location, strongly reconsider 
// if you actually need it -->  type parameters are for relating the types of multiple 
// values. If a type parameter is only used once in the function signature, it’s not 
// relating anything. This includes the inferred return type; for example, if Str was 
// part of the inferred return type of greet, it would be relating the argument and 
// return types, so would be used twice despite appearing only once in the written code.