interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const myLaptop: Computer = {
  id: 1,
  brand: "Macintosh",
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

myLaptop.storage = 256;
let res1 = myLaptop.upgradeRam(4);
console.log(res1);
