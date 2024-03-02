const todoList = [];
export function getTodoList() {
    return todoList;
}

export function addTodo(texte) {
    let todo = {
        texte: texte,
        estFait: false
    };

    todoList.push(todo);

}

export function checkTodo(index) {
    todoList[index].estFait = !todoList[index].estFait;
}