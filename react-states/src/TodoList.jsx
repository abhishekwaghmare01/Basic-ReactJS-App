import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos, setTodos] = useState([{task : "sample task", id : uuidv4()}]);

    let [newTodo, setNewTodo] = useState("");

    //function define Add new task
    let addNewTask = ()=>{
       // console.log("we have to add new task in todo");
       //for arrays input items add
       setTodos((prevTodos)=>{
        return [...prevTodos, {task : newTodo, id : uuidv4()}];
       });
       setNewTodo("");
        
    }

    //Update the Todo task List
    let updateTodoList = (event)=>{
        setNewTodo(event.target.value);
    }

    return(
        <div>
            <input type="text" placeholder="Add a Task" 
            value={newTodo} onChange={updateTodoList}/>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h3>Task To-Do List</h3>
            <ul>
                {/* Arrays ko render krne ke liye */}
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    )
}