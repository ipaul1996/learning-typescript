// Optional parameters in callbacks

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
// Here as index is optional thus both the above calls are legal.

myForEach([1, 2, 3], (a, i) => {
  // console.log(i.toFixed()); //Error: 'i' is possibly 'undefined'.ts(18048). 
  // (parameter) i: number | undefined
});

// Rule4: When writing a function type for a callback, never write an optional 
// parameter unless you intend to call the function without passing that argument.
