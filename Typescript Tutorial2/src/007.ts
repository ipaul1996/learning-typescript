const namesArray: string[] = ["john", "jane", "jim", "jill"];

function isNameInArray(name: string): boolean {
  return namesArray.includes(name);
}

let nameToCheck = "john";

if (isNameInArray(nameToCheck)) {
  console.log(`${nameToCheck} is in the array`);
} else {
  console.log(`${nameToCheck} is not in the array`);
}
