"use strict";
// Computed and constant members
// Each enum member has a value associated with it which can be either constant or computed.
// An enum member is considered constant if:
// (1) It is the first member in the enum and it has no initializer,
// in which case it’s assigned the value 0:
// E.X is constant:
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
// (2) It does not have an initializer and the preceding enum member was a numeric constant.
// In this case the value of the current enum member will be the value of the preceding
// enum member plus one.
var E1;
(function (E1) {
    E1[E1["A"] = 1] = "A";
    E1[E1["B"] = 2] = "B";
    E1[E1["C"] = 3] = "C";
})(E1 || (E1 = {}));
// (3) The enum member is initialized with a constant enum expression. A constant enum expression
// is a subset of TypeScript expressions that can be fully evaluated at compile time. An expression
// is a constant enum expression if it is:
// a literal enum expression(string or numeric), a reference to previously defined constant enum member,
// a parenthesized constant enum expression, one of the +, -, ~ unary operators applied to constant
// enum expression, +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions as operands
// In all other cases, enum member is considered computed.
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2["B"] = "Hello";
    E2[E2["C"] = 3] = "C";
    E2[E2["D"] = 2] = "D";
    E2[E2["Read"] = 2] = "Read";
    E2[E2["Write"] = 4] = "Write";
    E2[E2["ReadWrite"] = 6] = "ReadWrite";
    E2[E2["G"] = "123".length] = "G";
})(E2 || (E2 = {}));
