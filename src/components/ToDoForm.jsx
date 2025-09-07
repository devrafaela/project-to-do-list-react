import React from 'react'

const ToDoForm = () => {
  return (
    <div>
      <h2>Criar Tarefa</h2>
      <form>
        <input type="text" placeholder='Digite o título' />
        <select>
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