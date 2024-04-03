type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(s: Staff): void {
  if ("employees" in s) {
    console.log(`{s.name} is a manager of ${s.employees.length} employees`);
  } else {
    console.log(`${s.name} is an employee in the ${s.department}`);
  }
}

const alice: Employee = { id: 1, name: "Alice", department: "Sales" };
const steve: Employee = { id: 1, name: "Steve", department: "Tech" };
const bob: Manager = { id: 1, name: "Bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(steve);
printStaffDetails(bob);
