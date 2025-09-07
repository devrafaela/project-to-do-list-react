import { useState, useEffect } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  // Inicializa os todos a partir do localStorage, ou com os padrões
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, text: "Estudar React", category: "Trabalho", isCompleted: false },
          { id: 2, text: "Fazer trabalho de Malu", category: "Universidade", isCompleted: false },
          { id: 3, text: "Estudar Computação Natural", category: "Universidade", isCompleted: false },
        ];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [theme, setTheme] = useState("day"); // tema inicial

  // Atualiza a classe do body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Salva os todos no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  const addTodo = (text, category) => {
    const newTodos = [...todos, { id: Math.floor(Math.random() * 10000), text, category, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeToDo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  // Gera 100 estrelas
  const stars = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 3 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const twinkleDuration = Math.random() * 3 + 2;
    const floatDuration = Math.random() * 20 + 10;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}vh`,
          left: `${left}vw`,
          animationDuration: `${twinkleDuration}s, ${floatDuration}s`,
        }}
      ></div>
    );
  });

  // Gera 10 nuvens aleatórias (apenas no tema dia)
  const clouds =
    theme === "day"
      ? Array.from({ length: 10 }, (_, i) => {
          const size = Math.random() * 100 + 50; // largura
          const top = Math.random() * 60;
          const left = Math.random() * 100;
          const duration = Math.random() * 30 + 20;
          return (
            <div
              key={i}
              className="cloud"
              style={{
                width: `${size}px`,
                height: `${size / 2}px`,
                top: `${top}vh`,
                left: `${left}vw`,
                animationDuration: `${duration}s`,
              }}
            ></div>
          );
        })
      : null;

  return (
    <>
      {/* Fundo */}
      <div className="stars">
        {theme === "night" && stars}
        {theme === "night" && (
          <div
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 5 + 10}s`,
            }}
          ></div>
        )}
        {clouds}
      </div>

      {/* App */}
      <div className="app">
        <div className="title-container">
          <h1>To Do List</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "day" ? "🌞" : "🌚"}
          </button>
        </div>

        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted
            )
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => (sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)))
            .map((todo) => (
              <ToDo key={todo.id} todo={todo} removeToDo={removeToDo} completeToDo={completeToDo} />
            ))}
        </div>

        <ToDoForm addTodo={addTodo} />
      </div>

      {/* Créditos logo abaixo do App */}
      <div className="creditos" style={{ marginTop: "2px" }}>
        <b>Rafaela Pereira Santos</b> • baseado no tutorial de 'Matheus Battisti – Hora de Codar'
      </div>
    </>
  );
}

export default App;
