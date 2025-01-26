function getEmployee() {
    var name = prompt("Enter employee name:");
    var age = parseInt(prompt("Enter employee age:") || "0");
    var department = prompt("Enter employee department (optional):");
    var sallary = parseFloat(prompt("Enter employee salary:") || "0");
    var employee = {
        name: name,
        age: age,
        department: department || undefined,
        sallary: sallary
    };
    return employee;
}
function start() {
    var employees = [];
    var maxEmployees = 5;
    // Get employees
    for (var i = 0; i < maxEmployees; i++) {
        employees.push(getEmployee());
    }
    alert("Highest salary:" + Math.max.apply(Math, employees.map(function (employee) { return employee.sallary; })));
    alert("Lowest salary:" + Math.min.apply(Math, employees.map(function (employee) { return employee.sallary; })));
    alert("Average salary:" +
        employees.reduce(function (acc, employee) { return acc + employee.sallary; }, 0) /
            employees.length);
    // print all employees
    alert(employees
        .map(function (employee) {
        return "Name: " + employee.name + ", Age: " + employee.age + ", Department: " + (employee.department || "N/A") + ", Salary: " + employee.sallary;
    })
        .join("\n"));
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
