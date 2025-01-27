type todo = {
    readonly id: number;
    title: string;
    discription: string;
    done: boolean;
}

// create new todo mission
function createTodo(title: string): todo {
    return {
        id: Math.random(),
        title,
        discription: '',
        done: false
    }
}

function updateTitle(todo: todo, title: string): todo {
    return {
        ...todo,
        title
    }
}
function completeTodo(todo: todo): todo {
    return {
        ...todo,
        done: true
    }
}
function unCompleteTodo(todo: todo): todo {
    return {
        ...todo,
        done: false
    }
}
function updateDiscription(todo: todo, discription: string): todo {
    return {
        ...todo,
        discription
    }
}
