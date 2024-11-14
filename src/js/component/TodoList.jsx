import React, { useState } from "react";

//include images into your bundle


//create your first component
const TodoList = () => {
	
    const [inputValue, setInputValue] = useState("");
    const [arrInput, setArrInput] = useState([])
    const [doneTasks, setDoneTasks] = useState([])


    const addTask = () => {
        if (inputValue === '') return;
        setArrInput([...arrInput, inputValue]);
        setDoneTasks([...doneTasks, false]);
        setInputValue('');
    }
    
    
    const deleteTask = (index) => {
        const newArr = arrInput.filter((_, i) => i !== index);
        const newDoneTasks = doneTasks.filter((_, i) => i !== index);
        setArrInput(newArr);
        setDoneTasks(newDoneTasks);
    }

    const closeTask = (index) => {
        const newDoneTasks = [...doneTasks];
        newDoneTasks[index] = !newDoneTasks[index];
        setDoneTasks(newDoneTasks);
    }


    return (
        <>
        <div className="text-secondary">
            <h1 className="text-center" style={{fontSize: '80px'}}>todos</h1>
            <div className="container">
                <ul className="list-group">
                <input className="list-group-item" type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter'){
                        addTask();
                    }
                }}
                placeholder="What needs to be done?"
                />
                {arrInput.map((item, index)=> (
                    <li className="list-group-item" key={index}>
                       <p onClick={() => closeTask(index)} className={`${doneTasks[index] === true ? 'text-success' : ''} fs-5`}>{item} {doneTasks[index] === true ? <i class="fa-solid fa-check"></i> : ''}  <i onClick={() => deleteTask(index)} className="fa-solid fa-x float-end"></i>
                       </p>
                    </li>
                ))}
                <li className="list-group-item">
                    <label className={arrInput.length === 0 ? 'text-danger' : 'text-success'} style={{fontSize: '11px'}}>{arrInput.length === 0  ? 'There are no tasks, add a new task.' : `${arrInput.length} items left.`}</label>
                </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default TodoList;
