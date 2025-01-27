var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// create new todo mission
function createTodo(title) {
    return {
        id: Math.random(),
        title: title,
        discription: '',
        done: false
    };
}
function updateTitle(todo, title) {
    return __assign(__assign({}, todo), { title: title });
}
function completeTodo(todo) {
    return __assign(__assign({}, todo), { done: true });
}
function unCompleteTodo(todo) {
    return __assign(__assign({}, todo), { done: false });
}
function updateDiscription(todo, discription) {
    return __assign(__assign({}, todo), { discription: discription });
}
