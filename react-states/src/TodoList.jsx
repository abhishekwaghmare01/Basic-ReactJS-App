import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    //main array to store the task
    let [todos, setTodos] = useState([{task : "sample task", id : uuidv4(), isDone: false}]);
    //to print new task in the todo
    let [newTodo, setNewTodo] = useState("");

    //function define Add new task
    let addNewTask = ()=>{
       // console.log("we have to add new task in todo");
       //for arrays input items add
       setTodos((prevTodos)=>{
        return [...prevTodos, {task : newTodo, id : uuidv4(), isDone: false}];
       });
       setNewTodo("");
        
    }

    //Update the Todo task List
    let updateTodoList = (event)=>{
        setNewTodo(event.target.value);
    }

    //Delete todo task
    let deleteTodo = (id)=>{
        //console.log(id);
     
        //use Filter method to delete task
        // let copy = todos.filter((todo)=> todo.id != id);
        // console.log(copy);

       // setTodos(todos.filter((todo)=> todo.id != id));

       setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
        
        
    }

    //Updating task in arrays to upperCase;
    let upperCaseTask = () =>{
        setTodos( (previTodo)=>
                
            previTodo.map((todo)=>{ 
            //console.log(todo);
            //All todos ki copy banani hai...
            return {
                ...todo,
                task : todo.task.toUpperCase()
            } 
        }));
    }

    //Updating one task arrays to upper case 
    let UpperCaseOne= (id)=>{
        setTodos( (previTodo)=>      
            previTodo.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        task : todo.task.toUpperCase()
                    } 
                }else{
                    return todo;
                }
           
        }));
    }
    // const strikethroughStyle = {
    //     textDecoration: 'line-through',
    // };

    //mark as done
    let MarkAsDone = (id)=>{
        setTodos( (prevTodo)=> 
            prevTodo.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    }
                }else{
                    return todo;
                }
            })

        )
    }


    return(
        <div>
            <input type="text" placeholder="Add a Task" 
            value={newTodo} onChange={updateTodoList}/>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />  <br /> <br /> <br />
            <hr />
            <h3>Task To-Do List</h3>
            <ul>
                {/* Arrays ko render krne ke liye */}
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                           <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}> 
                            
                            {todo.task} 
                            </span>
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           <button style={{marginTop: "12px"}} onClick={
                            () => deleteTodo(todo.id)}>Delete</button>
                           <button style={{marginTop: "12px",  marginLeft: "12px"}} onClick={
                            () => UpperCaseOne(todo.id)}>UpperCase one</button>
                           <button style={{marginTop: "12px",  marginLeft: "12px"}} onClick={
                            () => MarkAsDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseTask}>toUpperCase</button>
        </div>
    )
}