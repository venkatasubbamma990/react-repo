import React from "react";
import "./Todolist.css";

/* let TodoList = ({todolist,editHandler,deletehandler}) =>{
    return(
        <div>
            {
                todolist.map((todo,index)=>
                <div key={index}>
                    {
                        <h5>
                            {todo.task}
                            <button className="Edit" onClick={()=>{editHandler(todo)}}>Edit</button>
                            <button className="delete" onClick={()=>{deletehandler(index)}}>Delete</button>
                        </h5>
                    }

                </div>
                )
            }

        </div>
    )
}
export default TodoList;


 */










let TodoList = ({todolist,deletehandler,editHandler})=>{
    return(
       <div>
        {
            todolist.map((todo,index) => 
            <div  key={index}>
{              <h5>{todo.task}{" "} 
                <button className="Edit" onClick={()=>{editHandler(todo)}}>Edit</button> 
                <button onClick={()=>{deletehandler(index)}} className="delete" >Del</button></h5> }
            </div>) 
        }
       </div>
    )
}
export default TodoList; 

 

