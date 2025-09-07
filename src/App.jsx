import { useState } from "react"
import "./App.css"
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm"

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

  return (
    <div className="app">

      <h1>Project To Do List</h1>

      <div className="todo-list">
        {todos.map((todo) => (
          <ToDo todo={todo} />
        ))}
      </div>

      <ToDoForm />

    </div>
  )
}

export default App