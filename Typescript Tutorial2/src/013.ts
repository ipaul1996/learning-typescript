// Interface

interface BookIntf {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // methods
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: BookIntf = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message: string) {
    return `${this.title} ${message}`;
  },

  // Option - 1
  //   printSomething: function (someValue) {
  //     return someValue;
  //   },

  // Option - 2
  //   printSomething: (someValue) => {
  //     console.log(this); // Captures global this
  //     console.log(deepWork.author);
  //     return someValue;
  //   },

  // Option - 3
  printSomething(someValue) {
    return someValue;
  },
};

// deepWork.isbn = 451; // Cannot assign to 'isbn' because it is a read-only property.ts(2540)
deepWork.printAuthor();
const res = deepWork.printTitle(" is awesome book!");
console.log(res);
