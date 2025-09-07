import React from 'react'

const ToDo = ({todo}) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category"> ({todo.category}) </p>
      </div>
      <div>  
        <button>Completar</button>
        <button>X</button>
      </div>
    </div>
  )
}

export default ToDo