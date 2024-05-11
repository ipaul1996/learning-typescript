// Optional Parameters

function f1(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}

// Functions in JavaScript often take a variable number of arguments just like
// toFixed here. To moidel that we can use optional parameters in typescript.
// We make a paramter optional by marking it with ?:

function f2(x?: number) {
  console.log(x); // (parameter) x: number | undefined
}
f2(); // OK
f2(10); // OK
// Although the parameter is specified as type number, the x parameter will actually
// have the type number | undefined because unspecified parameters in JavaScript get
// the value undefined. We can provide a default parameter using,

function f3(x = 10) {
  console.log(x);
}
// Now in the body of f, x will have type number because any undefined argument 
// will be replaced with 10.

// Note that when a parameter is optional, callers can always pass undefined, 
// as this simply simulates a “missing” argument:
// All OK
f3();
f3(10);
f3(undefined);
