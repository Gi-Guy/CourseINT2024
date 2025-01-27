type Todo = {
    readonly id: number;
    title: string;
    description: string;
    done: boolean;
}

// create new todo mission
function createTodo(title: string): Todo {
    return {
        id: Math.random(),
        title,
        description: '',
        done: false
    }
}

function updateTitle(todo: Todo, title: string): Todo {
    return {
        ...todo,
        title
    }
}
function completeTodo(todo: Todo): Todo {
    return {
        ...todo,
        done: true
    }
}
function unCompleteTodo(todo: Todo): Todo {
    return {
        ...todo,
        done: false
    }
}
function updateDescription(todo: Todo, description: string): Todo {
    return {
        ...todo,
        description
    }
}

function filterTodos(todos: Todo[], status: boolean): Todo[] {
    return todos.filter(todo => todo.done === status);
}
function start() {
    console.clear();
    const todos: Todo[] = [
        { id: 1, title: "Buy groceries", description: "Get milk, eggs, and bread.", done: false },
        { id: 2, title: "Finish report", description: "Complete the quarterly business report.", done: true },
        { id: 3, title: "Go for a run", description: "Run 5km at the park.", done: false },
        { id: 4, title: "Read a book", description: "Start reading 'Clean Code'.", done: true },
        { id: 5, title: "Call mom", description: "Check in and say hi.", done: false },
        { id: 6, title: "Clean the kitchen", description: "Wash dishes and wipe down surfaces.", done: false },
        { id: 7, title: "Learn TypeScript", description: "Practice interfaces and generics.", done: true },
        { id: 8, title: "Cook dinner", description: "Try making homemade pasta.", done: false },
        { id: 9, title: "Meditate", description: "Spend 10 minutes in mindfulness.", done: true },
        { id: 10, title: "Organize workspace", description: "Declutter desk and arrange cables.", done: false },
        { id: 11, title: "Water the plants", description: "Make sure all plants are hydrated.", done: true },
        { id: 12, title: "Write a blog post", description: "Draft a new article about JavaScript best practices.", done: false },
        { id: 13, title: "Practice guitar", description: "Learn a new song and improve chord transitions.", done: true },
        { id: 14, title: "Plan weekend trip", description: "Find a good location for a short getaway.", done: false },
        { id: 15, title: "Stretch and exercise", description: "Do a 15-minute morning stretch routine.", done: true }
    ];

    console.log(filterTodos(todos, true));

}

start();