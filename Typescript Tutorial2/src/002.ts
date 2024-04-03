const books = ["1984", "Brave New World", "IPL Documentary"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

console.log(foundBook?.toUpperCase());
