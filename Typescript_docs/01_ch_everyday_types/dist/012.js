"use strict";
// Enums
// Enums, short for "enumerations," in TypeScript are a way to define a set of named 
// constants. They allow you to define a collection of related values that are known 
// at compile time. Enums are particularly useful when you have a fixed set of values 
// that a variable can take on. Enum members are the individual named constants within an enum. 
// Each member represents a distinct value that the enum can take on.
// Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// Up is initialized with 1. All of the following members are auto-incremented
// from that point on. In other words, Direction.Up has the value 1, Down has 2,
// Left has 3, and Right has 4.
var DirectionV2;
(function (DirectionV2) {
    DirectionV2[DirectionV2["Up"] = 0] = "Up";
    DirectionV2[DirectionV2["Down"] = 1] = "Down";
    DirectionV2[DirectionV2["Left"] = 2] = "Left";
    DirectionV2[DirectionV2["Right"] = 3] = "Right";
})(DirectionV2 || (DirectionV2 = {}));
// Up would have the value 0, Down would have 1, etc. This auto-incrementing behavior
// is useful for cases where we might not care about the member values themselves,
// but do care that each value is distinct from other values in the same enum.
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    console.log(`Recipient: ${recipient}, Message: ${message}`);
}
respond("Princess Caroline", UserResponse.Yes);
// While this automatic incrementing behavior is convenient, the numeric values themselves
// might not be very meaningful or informative when we're debugging our code. For example,
// if we had a numeric enum representing days of the week, and we encountered a value of 3,
// it wouldn't immediately convey which day it represents without consulting the enum declaration
// or reverse mapping.
// On the other hand, string enums in TypeScript allow you to explicitly assign meaningful string values
// to each enum member. These string values are retained at runtime. So, when debugging or inspecting the
// value of a string enum member, you can see a human-readable string that provides useful information without
// needing to reference the enum declaration or perform reverse mapping.
// String enums
var DirectionV3;
(function (DirectionV3) {
    DirectionV3["Up"] = "UP";
    DirectionV3["Down"] = "DOWN";
    DirectionV3["Left"] = "LEFT";
    DirectionV3["Right"] = "RIGHT";
})(DirectionV3 || (DirectionV3 = {}));
// Heterogeneous enums
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
