var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();
    
    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("add_todo", () => {
        let todo = {
            "id": 4,
            "title": "T4",
            "completed": true
        };

      todo_service.add_todo(todo);
      expect(todo_service.get_todos().todo.length).toEqual(4);
    });

    test("update_todo", () => {
        let todo = {
            "id": 4,
            "title": "T4",
            "completed": false
        };
        todo_service.update_todo(4,todo);
        expect(todo_service.get_todos().todo.find(todo => todo.id===4).completed).toBeFalsy();
    })

    test("delete_todo", () => {
       todo_service.delete_todo(4);
       expect(todo_service.get_todos().todo.length).toEqual(3);
    })

   
    

    // Write all your test cases here that corresponds to software requirements


});