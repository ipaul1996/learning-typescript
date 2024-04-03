let car: { brand: string; year: number } = { brand: "TATA", year: 2024 };

car.brand = "ford";
// car.color = 'blue'; // Property 'color' does not exist on type '{ brand: string; year: number; }'.

let car1: { brand: string; year: number } = { brand: "AUDI", year: 2022 };

let book = { title: "Book", cost: 20 };
let pen = { title: "Pen", cost: 10 };
let noteBook = { title: "Note Book" };

let items: { readonly title: string; cost?: number }[] = [book, pen, noteBook];
// items[0].title = 'New Book'; // Cannot assign to 'title' because it is a read-only property.


