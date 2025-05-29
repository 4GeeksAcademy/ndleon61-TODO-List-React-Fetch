import React, { useState } from "react";
import './home.css';

//create your first component
const Home = () => {
const [toDos, setToDos] = useState([]);
const [input, setInput] = useState('');
 
const addToDo = () => {
	if (input.trim()){
		const newToDo = {
			id: Date.now(),
			text: input
		}

		setToDos([...toDos, newToDo]);
		setInput('')
	} else {
		alert ("Please add a task")
	};
};

const deleteToDo = (idToDelete) => {
	setToDos(toDos.filter((toDo) => toDo.id !==idToDelete));
};

  return (
    <div className="container to-do-container">
		<h3>To-Do List</h3>
		<div className="header-container">
			<input type="text" 
			placeholder="Add a Task" 
			value={input} 
			onChange={(e) => setInput(e.target.value)}
			className="text-input"
			/>
			<button className="btn btn-primary" onClick={addToDo}>Add</button>
		</div>

		<ul>
			{toDos.map((toDo) => (
				<li key={toDo.id} className="individual-task">
					<span>{toDo.text}</span>
					<button className="btn btn-danger" onClick={() => deleteToDo(toDo.id)}>Delete</button>
				</li>
			))}
		</ul>
    </div>
  );
};

export default Home;