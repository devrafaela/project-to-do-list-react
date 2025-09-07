import { useState } from "react"
import "./App.css"
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm"
import Search from "./components/Search"

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

  const [search, setSearch] = useState("")

  const addTodo = (text, category) => { 
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }, 
    ]

    setTodos(newTodos)
  }

  const removeToDo = (id) => {
    const filteredTodos = todos.filter(
      todo => todo.id !== id
    )
    setTodos(filteredTodos)
  }

  const completeToDo = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id 
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    )
    setTodos(updatedTodos)
  }


  return (
    <div className="app">

      <h1>To Do List</h1>

      <Search search={search} setSearch={setSearch}/>

      <div className="todo-list">
        {todos
          .filter(todo => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <ToDo 
              key={todo.id} 
              todo={todo} 
              removeToDo={removeToDo}
              completeToDo={completeToDo}
            />
          ))}
      </div>

      <ToDoForm  addTodo={addTodo} />

    </div>
  )
}

export default App