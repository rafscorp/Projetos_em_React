import { formatarMoeda } from '../utils/formatarMoeda'

function formatarData(isoString) {
  return new Date(isoString).toLocaleDateString('pt-BR')
}

function TransactionList({ transacoes, onRemove }) {
  if (transacoes.length === 0) {
    return <p className="lista-vazia">Nenhuma transação lançada ainda.</p>
  }

  return (
    <ul className="transaction-list">
      {transacoes.map((t) => (
        <li key={t.id} className="transaction-item">
          <div className="transaction-info">
            <span className="transaction-descricao">{t.descricao}</span>
            <span className="transaction-meta">
              {t.categoria} · {formatarData(t.data)}
            </span>
          </div>
          <span className={`transaction-valor ${t.tipo}`}>
            {t.tipo === 'receita' ? '+' : '−'} {formatarMoeda(t.valor)}
          </span>
          <button
            type="button"
            className="btn-remover"
            onClick={() => onRemove(t.id)}
            aria-label={`Remover transação: ${t.descricao}`}
            title="Remover"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TransactionList
