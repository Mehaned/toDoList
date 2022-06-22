import React from 'react'
import Todo from './Todo';

const ToDoList = ({DoList,handleClick,handleFilter}) => {
  return (
    <div className="item">
        {DoList.map(todo => (
            <Todo todo={todo} handleClick={handleClick} handleFilter={handleFilter}/>
        ))}
        <button onClick={handleFilter}> Clear completeD</button>
    </div>
  )
}

export default ToDoList
