function printTodos(todos: string[] | null) {

    if(todos) {
        todos.forEach((todo) => console.log(todo));

    } else {
        console.log("No todos");

    }

}


const todos = ["t1", "t2", "t3", "t4"];


let firstname: string;
let lastname: typeof firstname;