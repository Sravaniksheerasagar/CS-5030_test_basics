class todoservice{
    todo_data = {
        "todo":[{
            "id": 1,
            "title": "T1",
            "completed": false
        },{
            "id": 2,
            "title": "T2",
            "completed": false
        },{
            "id": 3,
            "title": "T3",
            "completed": true
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos.todo.push(todo);
    }

    delete_todo(id){
        let index = this.todos.todo.findIndex((todo) => todo.id === id);
        if(index>-1) {
            this.todos.todo.splice(index,1);
        }
    }

    update_todo(id, todo){
       let index = this.todos.todo.findIndex(todo => todo.id===id)
       this.todos.todo[index] = todo;
    }
}


module.exports= todoservice;