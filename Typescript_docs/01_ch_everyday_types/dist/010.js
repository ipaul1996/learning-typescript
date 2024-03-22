"use strict";
// Literal Inference
// Literal inference in TypeScript refers to the process where TypeScript infers
// a more specific type based on literal values used in the code.
const specialObj = { counter: 0 };
// When we initialize a variable with an object, TypeScript assumes that the properties of
// that object might change values later. In other words we can say properties are of general types
// not literal types so can be changed.
specialObj.counter = 1;
// But if I want that properties should not change i.e., they all are assigned literal types then, we
// can do the following:
const specialObjV1 = { counter: 0 };
function makeApiCall(url, method) {
    console.log(`Calling api with url: ${url} and method: ${method}`);
}
const reqObj = { url: "https://example.com", method: "GET" }; // Here method is of type string
// makeApiCall(reqObj.url, reqObj.method); // Error
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
const reqObjV2 = { url: "https://example.com", method: "GET" }; // Change1
makeApiCall(reqObjV2.url, reqObjV2.method); // Change2
// We can do any one change i.e., Change1 or Change2.
// Change1 --> I intend for req.method to always have the literal type "GET"
// Change2 --> I know for other reasons that req.method has the value "GET"
// We can also do the following
const reqObjV3 = { url: "https://example.com", method: "GET" };
// as const syntax tells TypeScript to infer literal types for all properties of the object.
// This means that url cannot be changed to another string value like "https://anotherurl.com",
// and method cannot be changed to another string value like "POST".
makeApiCall(reqObjV3.url, reqObjV3.method);
