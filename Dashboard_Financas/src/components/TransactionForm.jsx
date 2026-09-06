import { useState } from 'react'
import { CATEGORIAS_DESPESA, CATEGORIAS_RECEITA } from '../utils/categorias'

const valoresIniciais = {
  tipo: 'despesa',
  descricao: '',
  categoria: CATEGORIAS_DESPESA[0],
  valor: '',
}

// formulario controlado: cada campo do form é um pedaço do state `form`
// escolhi juntar tudo num objeto só (em vez de 4 useState separados) porque
// os campos aqui têm tudo a ver uns com os outros e resetam juntos no submit
function TransactionForm({ onAdd }) {
  const [form, setForm] = useState(valoresIniciais)

  // quando troca entre receita/despesa, a lista de categoria válida muda
  // (ex: "Salário" não faz sentido como categoria de despesa), então já
  // resetamos a categoria pra primeira opção do tipo novo
  function handleTipoChange(tipo) {
    const categoriasDoTipo = tipo === 'receita' ? CATEGORIAS_RECEITA : CATEGORIAS_DESPESA
    setForm((atual) => ({ ...atual, tipo, categoria: categoriasDoTipo[0] }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const valorNumerico = parseFloat(form.valor)
    if (!form.descricao.trim() || !valorNumerico || valorNumerico <= 0) {
      // validação simples: sem descrição ou com valor inválido, não deixa passar
      return
    }

    onAdd({ ...form, valor: valorNumerico })
    setForm({ ...valoresIniciais, tipo: form.tipo, categoria: form.categoria })
  }

  const categoriasDisponiveis = form.tipo === 'receita' ? CATEGORIAS_RECEITA : CATEGORIAS_DESPESA

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="tipo-toggle">
        <button
          type="button"
          className={form.tipo === 'receita' ? 'ativo receita' : ''}
          onClick={() => handleTipoChange('receita')}
        >
          + Receita
        </button>
        <button
          type="button"
          className={form.tipo === 'despesa' ? 'ativo despesa' : ''}
          onClick={() => handleTipoChange('despesa')}
        >
          − Despesa
        </button>
      </div>

      <div className="form-linha">
        <input
          type="text"
          placeholder="Descrição (ex: mercado, salário...)"
          value={form.descricao}
          onChange={(e) => setForm((f) => ({ ...f, descricao: e.target.value }))}
          aria-label="Descrição"
        />
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="0,00"
          value={form.valor}
          onChange={(e) => setForm((f) => ({ ...f, valor: e.target.value }))}
          aria-label="Valor"
        />
      </div>

      <div className="form-linha">
        <select
          value={form.categoria}
          onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value }))}
          aria-label="Categoria"
        >
          {categoriasDisponiveis.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" className="btn-adicionar">
          Adicionar
        </button>
      </div>
    </form>
  )
}

export default TransactionForm
