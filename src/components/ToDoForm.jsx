import {useState} from 'react'

const ToDoForm = ({addTodo}) => {

  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value || !category) return;

    addTodo(value, category)
    console.log("Tarefa criada: ", {value, category})
    //adicionar toDo e limpar os campos
    setValue("");
    setCategory("");
  }

  return (
    <div>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Digite o título" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
         />

        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Desenvolvimento de Jogos">Desenvolvimento de Jogos</option>
          <option value="Teste em Software">Teste em Software</option>
          <option value="Computação Natural">Computação Natural</option>
          <option value="Residência">Residência</option>
          <option value="TCC">TCC</option>
          <option value="Estudo">Estudo</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Outro">Outro</option>
        </select>

        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default ToDoForm