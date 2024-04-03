function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("Indrani");
// sayHi(3); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

function calculateDiscount(price: number) {
  const hasDiscount = true;
  if (hasDiscount) return "Discount Applied";
  return price * 0.9;
}

const finalPrice = calculateDiscount(200); // const finalPrice: number | "Discount Applied"



