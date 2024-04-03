// Intersection Type

type Book = {
  id: number;
  name: string;
  price: number;
};

type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "The secret life of unicorns",
  price: 55,
};

const book2: Book = {
  id: 2,
  name: "Rich Dad, Poor Dad",
  price: 75,
};

const discountedBook1: Book & { discount: number } = {
  id: 3,
  name: "The Servent Leadership",
  price: 100,
  discount: 20,
};

const discountedBook2: DiscountedBook = {
  id: 3,
  name: "The Servent Leadership",
  price: 100,
  discount: 20,
};
