function getEmployee(): PersonV3 | DogOwnerV3 | ManagerV3 {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Managing people...");
      },
      delegateTasks() {
        console.log("Delegating Tasks...");
      },
    };
  }
}

interface PersonV3 {
  name: string;
}

interface DogOwnerV3 extends PersonV3 {
  dogName: string;
}

interface ManagerV3 extends PersonV3 {
  managePeople(): void;
  delegateTasks(): void;
}

const employee3: PersonV3 | DogOwnerV3 | ManagerV3 = getEmployee();
console.log(employee3.name);
// employee3.delegateTasks(); // Error
// Property 'delegateTasks' does not exist on type 'PersonV3 | DogOwnerV3 | ManagerV3'.
// Property 'delegateTasks' does not exist on type 'PersonV3'.ts(2339)

function isManager(obj: PersonV3 | DogOwnerV3 | ManagerV3): boolean {
  return "managePeople" in obj;
}

// if(isManager(employee3)) {
//    employee3.delegateTasks(); // Error
//     Property 'delegateTasks' does not exist on type 'PersonV3 | DogOwnerV3 | ManagerV3'.
//     Property 'delegateTasks' does not exist on type 'PersonV3'.ts(2339)
// }

// Type Predicate - it not only returns boolean but also asserts that the argument is
// of a specific type
function isManagerV2(obj: PersonV3 | DogOwnerV3 | ManagerV3): obj is ManagerV3 {
  return "managePeople" in obj;
}

if (isManagerV2(employee3)) {
  employee3.delegateTasks(); // const employee3: ManagerV3 // No Error
} else {
  console.log(employee3); // const employee3: PersonV3 | DogOwnerV3
}
