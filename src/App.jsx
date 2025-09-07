import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, 
      text: 'Estudar React', 
      category: "Trabalho",
      isCompleted: false, 
    },
    { id: 2, 
      text: 'Fazer trabalho de Malu', 
      category: "Universidade",
      isCompleted: false, 
    },
    { id: 3, 
      text: 'Estudar Computação Natural', 
      category: "Universidade",
      isCompleted: false, 
    },
  ])

  return <div className="app">
    <h1>Project To Do List</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              ({todo.category})
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default App