import React from 'react'

const Todo = ({todo ,handleClick}) => {

    const handleClickk = (e) => {
        e.preventDefault()
        handleClick(e.currentTarget.id)
    }
  return (
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClickk}  className={todo.complete ? 'todo strike' : 'todo'}>
        {todo.task}
    </div>
  )
}

export default Todo