type Employee = {
  name: string;
  age: number;
  department?: string;
  sallary: number;
};

function getEmployee(): Employee {
  const name = prompt("Enter employee name:");
  const age = parseInt(prompt("Enter employee age:") || "0");
  const department = prompt("Enter employee department (optional):");
  const sallary = parseFloat(prompt("Enter employee salary:") || "0");

  const employee: Employee = {
    name,
    age,
    department: department || undefined,
    sallary,
  };

  return employee;
}

function start() {
  const employees: Employee[] = [];
  const maxEmployees = 5;
  // Get employees
  for (let i = 0; i < maxEmployees; i++) {
    employees.push(getEmployee());
  }
  alert(
    "Highest salary:" +
      Math.max(...employees.map((employee) => employee.sallary))
  );
  alert(
    "Lowest salary:" +
      Math.min(...employees.map((employee) => employee.sallary))
  );
  alert(
    "Average salary:" +
      employees.reduce((acc, employee) => acc + employee.sallary, 0) /
        employees.length
  );

  // print all employees
  alert(
    employees
      .map(
        (employee) =>
          `Name: ${employee.name}, Age: ${employee.age}, Department: ${
            employee.department || "N/A"
          }, Salary: ${employee.sallary}`
      )
      .join("\n")
  );
}

start();

// from class, not working here
// function findEmployeeByName(name: string){
//     let employee: Employee | undefined;
//     for (const key of employees) {
//         if (key.name === name) {
//             return key;
//         }
//     }
// }
// function deleteEmployee(name: string){
//     let employee = findEmployeeByName(name);
//     while(employee === undefined){
//         alert("Employee not found");
//         name = prompt("Please enter employee name");   
//         employee = findEmployeeByName(name);
//     }
//     employees.splice(employees.indexOf(employee), 1);
//     alert("Employee deleted");
// }
// deleteEmployee(prompt("Please enter employee name"));