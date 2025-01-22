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
    for (var i = 0; i < 5; i++) {
        employees.push(getEmployee());
    }
    alert(employees.map(function (employee) { return "Name: " + employee.name + ", Age: " + employee.age + ", Department: " + (employee.department || 'N/A') + ", Salary: " + employee.sallary; }).join('\n'));
}
start();
