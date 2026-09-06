// cada tarefa é só um item de lista com checkbox + botao de excluir
// recebe a tarefa e duas funções de callback, não sabe nada sobre localStorage nem sobre as outras tarefas
function TaskItem({ tarefa, onToggle, onRemove }) {
  return (
    <li className={`task-item ${tarefa.concluida ? 'concluida' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => onToggle(tarefa.id)}
        />
        <span className="task-texto">{tarefa.texto}</span>
      </label>
      <button
        type="button"
        className="btn-remover"
        onClick={() => onRemove(tarefa.id)}
        aria-label={`Remover tarefa: ${tarefa.texto}`}
        title="Remover"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
