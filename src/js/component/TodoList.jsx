import React, { useState } from 'react';


const TodoList = () => {

  const [task, setTask] = useState('')
  const [arrayTodos, setArrayTodos] = useState([])
  const [doneTask, setDoneTask] = useState([])

  const addTask = () => {
    if (task !== ''){
    const newArr = [...arrayTodos, task]
    const newDoneTask = [...doneTask, {task, completed: false}]
    setArrayTodos(newArr)
    setDoneTask(newDoneTask)
    setTask('')
    }
  }

  const deleteTask = (index) => {
    const newArr = arrayTodos.filter((_, i) => i !== index);
    const newDoneTask = doneTask.filter((_, i) => i !== index)
    setArrayTodos(newArr);
    setDoneTask(newDoneTask)
  }

  const triggerDoneButton = (index) => {
    const newState = [...doneTask]
    newState[index].completed = !newState[index].completed
    setDoneTask(newState)
  }
 

  return (
    <>
    <div className="container text-center">
      <h1 className='p-3' style={{backgroundColor: 'cyan'}}>My tasks List</h1>
      <ul className='list-group'>
      <input 
      className='text-center list-group-item'
      type="text" 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder='Insert a new task'
      onKeyDown={(e) => {
        if (e.key === 'Enter'){
          addTask();
        }
      }}
      />
      
        {arrayTodos.map((item, index)=> (
          <li 
          className='list-group-item'
          key={index}>
            <i onClick={() => {
              const deleteAnswer = prompt('Do you want to delete the task? Yes/No')
              return deleteAnswer.toLowerCase() === 'yes' ? deleteTask(index) : ''
            }} style={{float: 'left', cursor: 'pointer'}} className="fa-solid fa-minus"></i> <b style={{textTransform: 'capitalize'}} className={`${doneTask[index].completed === true ? 'text-success' : ' text-danger'}`}>{item.toLowerCase()}</b> <i onClick={() => triggerDoneButton(index)} style={{float: 'right', cursor: 'pointer'}} className="fa-solid fa-check"></i>
          </li>
        ))}
        <label 
        className={`list-group-item ${arrayTodos.length === 0 ? 'text-danger' : 'text-success'}`} 
        style={{fontSize: '11px'}}>
          {arrayTodos.length === 0 ? 'No tasks, add a new task.' : `${arrayTodos.length} tasks.`}
          
        </label>
      </ul>
      </div>
    </>
  )

}

export default TodoList;