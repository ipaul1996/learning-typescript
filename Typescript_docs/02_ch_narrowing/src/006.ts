// Control Flow Analysis
// This analysis of code based on reachability is called control flow analysis,
// and TypeScript uses this flow analysis to narrow types as it encounters type
// guards and assignments. When a variable is analyzed, control flow can split off
// and re-merge over and over again, and that variable can be observed to have a
// different type at each point.
function example() {
  let p: string | number | boolean;

  p = Math.random() < 0.5; // let p: string | number | boolean

  console.log(p); // let p: boolean

  if (Math.random() < 0.5) {
    p = "hello"; // let p: string | number | boolean
    console.log(p); // let p: string
  } else {
    p = 100; // let p: string | number | boolean
    console.log(p); // let p: number
  }

  return p; // let p: string | number
}
