import { useState } from "react";

export default function TodoList(){

    let [todos, setTodos] = useState([]);

    let [newTodo, setNewTodo] = useState("");

    //function define Add new task
    let addNewTask = ()=>{
       // console.log("we have to add new task in todo");
       //for arrays input items add
       setTodos([...todos, newTodo]);
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
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}