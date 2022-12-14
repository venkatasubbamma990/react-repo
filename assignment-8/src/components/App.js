/* import React, { useEffect, useRef } from "react";
 import "./../styles/App.css"; 
import { useState } from "react";
import TodoList from "./Todolist";
import "./Todolist.css";
 */
/* function App() {
	let [task,settask] = useState("");
let [todos,settodos] = useState([]);

let input = useRef(null)
let SubmitHandler = (e) =>{
	e.preventDefault();
	let newtodos;
    if (edit.isEdit){
      newtodos = todos.map((todo) =>
        todo.id === edit.id ? { ...todo, task } : todo
      );
      setEdit({ isEdit: false, id: null });
    } 
	else {
      newtodos = [...todos, { task, id: new Date().getTime() }];
    }
	settodos(newtodos);
    settask("");
}
let DeleteHandler = (indexvalue) =>{
	let newtodos = todos.filter((todo,index)=>
		index!==indexvalue)
		settodos(newtodos);
}
let [edit,setEdit] = useState({ isEdit: false, id: null });
let EditHandler = (todo) => {
    settask(todo.task);
    setEdit({ isEdit: true, id: todo.id });
  };
 useEffect(()=>{
input.current.focus()
  },[])  
return (
	<div id="main">
		 <pre>{JSON.stringify(task)}</pre> 
	<div>
		<input ref={input} type="text" name="task"  value={task} onChange={(e)=>{settask(e.target.value)}} />
		<input onClick={SubmitHandler} type="button" value={edit.isEdit ? "Edit Task" : "Add Task"} />
		
	</div>
	<div>
		
		<TodoList todolist = {todos} deletehandler={DeleteHandler} editHandler={EditHandler}/>
	</div>

	</div>
	);
} */
 

//export default App;
 import React, { useState } from 'react';
import TodoList from './Todolist';
import "./Todolist.css";

let App = () =>{
	let [task,settask] = useState("");
	let [todos,settodos] = useState([]);
	let [edit,setedit] = useState({isEdit:false,id:null})
	let SubmitHandler = (e) =>{
		e.preventDefault();
		let newtodos;
		if(edit.isEdit==true){
			newtodos = todos.map((todo)=>
				todo.id==edit.id ? {...todo,task}:todo
			)
			setedit({isEdit:false,id:null})
		}
		else{
			newtodos = [...todos,{task,id:new Date().getTime()}]
		}
		settodos(newtodos);
		settask("")
	}
	let EditHandler = (todo) =>{
		settask(todo.task)
		setedit({isEdit:true,id:todo.id})
	}
	let DeleteHandler = (indexvalue)=>{
		let newtodos = todos.filter((todo,index)=>
		index!==indexvalue)
		settodos(newtodos)
	}
	return(
		<div>
			<pre>{JSON.stringify(task)}</pre>
			<div>
			<input type='text' value={task} onChange={(e)=>{settask(e.target.value)}} ></input>
			<input onClick={SubmitHandler} type='button' value={edit.isEdit==true?'Save Task':'Add task'}></input>
			</div>
			<div>
				<TodoList todolist={todos} editHandler={EditHandler} deletehandler={DeleteHandler}/>
			</div>
		</div>
	)
}

export default App;





