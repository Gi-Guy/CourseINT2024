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

  // List of all employees
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
