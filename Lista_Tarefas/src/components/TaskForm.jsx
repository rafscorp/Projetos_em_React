import { useState } from 'react'

// componente burro (nao guarda o estado da lista, só o texto que o usuario ta digitando)
// quem decide o que fazer com a tarefa nova é o App, aqui só repassamos pra cima via onAdd
function TaskForm({ onAdd }) {
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault() // sem isso o form recarrega a pagina, clássico

    const textoLimpo = texto.trim()
    if (!textoLimpo) return // nao deixa adicionar tarefa vazia ou só espaço

    onAdd(textoLimpo)
    setTexto('') // limpa o campo pra já poder digitar a proxima
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="O que você precisa fazer?"
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskForm
