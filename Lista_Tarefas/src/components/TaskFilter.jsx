// botões de filtro + o contador de pendentes, tudo num componente só porque
// os dois dependem da mesma info (quantas tarefas restam) e ficam lado a lado na tela
const FILTROS = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'pendentes', label: 'Pendentes' },
  { valor: 'concluidas', label: 'Concluídas' },
]

function TaskFilter({ filtroAtual, onFiltroChange, restantes }) {
  return (
    <div className="task-filter">
      <span className="contador">
        {restantes} {restantes === 1 ? 'tarefa restante' : 'tarefas restantes'}
      </span>
      <div className="filtro-botoes">
        {FILTROS.map((f) => (
          <button
            key={f.valor}
            type="button"
            className={filtroAtual === f.valor ? 'ativo' : ''}
            onClick={() => onFiltroChange(f.valor)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskFilter
