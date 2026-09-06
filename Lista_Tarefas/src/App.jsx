import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import './App.css'

const CHAVE_STORAGE = 'lista-tarefas:tarefas'

// le do localStorage só na primeira renderização (usando a função de inicialização do useState,
// que só roda uma vez, diferente de passar useState(lerTarefasSalvas()) que rodaria toda renderização)
function lerTarefasSalvas() {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    // se o JSON salvo tiver corrompido por algum motivo, melhor começar do zero
    // do que quebrar o app inteiro
    return []
  }
}

function App() {
  const [tarefas, setTarefas] = useState(lerTarefasSalvas)
  const [filtro, setFiltro] = useState('todas')

  // toda vez que a lista de tarefas muda, salva de novo no localStorage
  // assim o refresh da página não perde nada
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas))
  }, [tarefas])

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: crypto.randomUUID(), // mais seguro que Date.now() pra evitar colisão se clicar rapido
      texto,
      concluida: false,
    }
    setTarefas((atuais) => [...atuais, novaTarefa])
  }

  function alternarConcluida(id) {
    setTarefas((atuais) =>
      atuais.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    )
  }

  function removerTarefa(id) {
    setTarefas((atuais) => atuais.filter((t) => t.id !== id))
  }

  // o filtro é só uma "visão" derivada da lista real, não guardo isso em outro state
  // pra não correr risco de desincronizar os dois
  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'pendentes') return !t.concluida
    if (filtro === 'concluidas') return t.concluida
    return true
  })

  const restantes = tarefas.filter((t) => !t.concluida).length

  return (
    <div className="app">
      <header>
        <h1>📝 Lista de Tarefas</h1>
        <p className="subtitulo">organize seu dia sem stress</p>
      </header>

      <main>
        <TaskForm onAdd={adicionarTarefa} />

        <TaskFilter
          filtroAtual={filtro}
          onFiltroChange={setFiltro}
          restantes={restantes}
        />

        <TaskList
          tarefas={tarefasFiltradas}
          onToggle={alternarConcluida}
          onRemove={removerTarefa}
        />
      </main>
    </div>
  )
}

export default App
