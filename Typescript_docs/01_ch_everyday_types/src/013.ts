// Computed and constant members
// Each enum member has a value associated with it which can be either constant or computed.
// An enum member is considered constant if:
// (1) It is the first member in the enum and it has no initializer,
// in which case it’s assigned the value 0:

// E.X is constant:
enum E {
  X,
}

// (2) It does not have an initializer and the preceding enum member was a numeric constant.
// In this case the value of the current enum member will be the value of the preceding
// enum member plus one.

enum E1 {
  A = 1,
  B,
  C,
}

// (3) The enum member is initialized with a constant enum expression. A constant enum expression
// is a subset of TypeScript expressions that can be fully evaluated at compile time. An expression
// is a constant enum expression if it is:
// a literal enum expression(string or numeric), a reference to previously defined constant enum member,
// a parenthesized constant enum expression, one of the +, -, ~ unary operators applied to constant
// enum expression, +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions as operands
// In all other cases, enum member is considered computed.

enum E2 {
  A = 1, // constant
  B = "Hello", // constant
  C = E1.C, // constant
  D = A + 1, // constant
  Read = 1 << 1, // constant
  Write = 1 << 2, // constant
  ReadWrite = Read | Write, // constant
  G = "123".length, // computed
}
