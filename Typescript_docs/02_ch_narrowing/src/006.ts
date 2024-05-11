// Control Flow Analysis
// The analysis of code based on reachability is called control flow analysis,
// and TypeScript uses this flow analysis to narrow types as it encounters type
// guards and assignments. When a variable is analyzed, control flow can split off
// and re-merge over and over again, and that variable can be observed to have a
// different type at each point.
function exampleV2() {
  let p: string | number | boolean;
  // p is initially of type string | number | boolean

  p = Math.random() < 0.5; // let p: string | number | boolean

  console.log(p); // let p: boolean
  // At this point, p can be safely narrowed down to boolean

  if (Math.random() < 0.5) {
    p = "hello"; // let p: string | number | boolean
    console.log(p); // let p: string
    // At this point, p is narrowed down to string
  } else {
    p = 100; // let p: string | number | boolean
    console.log(p); // let p: number
    // At this point, p is narrowed down to number
    // depending on which branch was executed
  }

  return p; // let p: string | number
}
