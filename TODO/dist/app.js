// רשימת משימות לדוגמה
var todos = [
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs", done: false },
    { id: 2, title: "Study TypeScript", description: "Practice and build projects", done: true },
    { id: 3, title: "Workout", description: "Go to the gym at 6 PM", done: false },
    { id: 4, title: "Workout", description: "Go to the gym at 6 PM", done: true },
    { id: 5, title: "Workout", description: "Go to the gym at 6 PM", done: false },
];
// פונקציה להצגת המשימות
function renderTodos(todoList) {
    var container = document.getElementById("todo-container");
    if (!container)
        return;
    container.innerHTML = "";
    todoList.forEach(function (todo) {
        var todoElement = document.createElement("div");
        todoElement.classList.add("todo-card");
        todoElement.classList.add(todo.done ? "todo-card--done" : "todo-card--pending");
        todoElement.innerHTML = "\n            <h3 class=\"todo-card__title\">" + todo.title + "</h3>\n            <p class=\"todo-card__description\">" + todo.description + "</p>\n        ";
        container.appendChild(todoElement);
    });
}
// טעינת המשימות
document.addEventListener("DOMContentLoaded", function () { return renderTodos(todos); });
