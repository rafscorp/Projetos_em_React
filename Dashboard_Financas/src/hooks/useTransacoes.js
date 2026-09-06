import { useEffect, useMemo, useState } from 'react'

const CHAVE_STORAGE = 'dashboard-financas:transacoes'

function lerTransacoesSalvas() {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    return []
  }
}

// esse hook concentra toda a "lógica de negócio" do dashboard: guardar as
// transações, persistir, e principalmente CALCULAR os números derivados
// (saldo, total por categoria etc). Assim o App.jsx fica só montando a tela,
// sem precisar saber como a conta é feita
export function useTransacoes() {
  const [transacoes, setTransacoes] = useState(lerTransacoesSalvas)

  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(transacoes))
  }, [transacoes])

  function adicionarTransacao({ tipo, descricao, categoria, valor }) {
    const nova = {
      id: crypto.randomUUID(),
      tipo, // 'receita' | 'despesa'
      descricao,
      categoria,
      valor: Number(valor), // o input manda string, aqui garantimos numero de verdade
      data: new Date().toISOString(),
    }
    // novas transações entram no topo, é mais natural ver a mais recente primeiro
    setTransacoes((atuais) => [nova, ...atuais])
  }

  function removerTransacao(id) {
    setTransacoes((atuais) => atuais.filter((t) => t.id !== id))
  }

  // useMemo aqui evita recalcular tudo isso a cada render que não mude a lista
  // (ex: quando só o campo do formulário muda de valor) — com poucas
  // transações não faria muita diferença, mas é o jeito certo de fazer
  const resumo = useMemo(() => {
    let totalReceitas = 0
    let totalDespesas = 0
    const porCategoria = {} // só de despesa, é o que interessa pro gráfico

    for (const t of transacoes) {
      if (t.tipo === 'receita') {
        totalReceitas += t.valor
      } else {
        totalDespesas += t.valor
        porCategoria[t.categoria] = (porCategoria[t.categoria] || 0) + t.valor
      }
    }

    const totalPorCategoria = Object.entries(porCategoria)
      .map(([categoria, total]) => ({ categoria, total }))
      .sort((a, b) => b.total - a.total) // maior gasto primeiro, fica mais fácil de ler no gráfico

    return {
      saldo: totalReceitas - totalDespesas,
      totalReceitas,
      totalDespesas,
      totalPorCategoria,
    }
  }, [transacoes])

  return { transacoes, adicionarTransacao, removerTransacao, ...resumo }
}
