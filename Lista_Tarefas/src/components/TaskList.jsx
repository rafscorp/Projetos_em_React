import TaskItem from './TaskItem'

// só renderiza a lista que já vem filtrada do App, não faz filtro aqui
// separei isso do App só pra não deixar o JSX principal gigante
function TaskList({ tarefas, onToggle, onRemove }) {
  if (tarefas.length === 0) {
    return <p className="lista-vazia">Nenhuma tarefa por aqui ainda 👀</p>
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        // uso o id (nao o index) como key, senao o React confunde os itens
        // quando a gente remove um do meio da lista
        <TaskItem
          key={tarefa.id}
          tarefa={tarefa}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

export default TaskList
