import { formatarMoeda } from '../utils/formatarMoeda'

// três cartões: saldo, total de receita e total de despesa
// componente burro, só recebe os números já calculados e mostra
function SummaryCards({ saldo, totalReceitas, totalDespesas }) {
  return (
    <div className="summary-cards">
      <div className={`card saldo ${saldo >= 0 ? 'positivo' : 'negativo'}`}>
        <span className="card-label">Saldo</span>
        <strong className="card-valor">{formatarMoeda(saldo)}</strong>
      </div>
      <div className="card">
        <span className="card-label">Receitas</span>
        <strong className="card-valor receita">{formatarMoeda(totalReceitas)}</strong>
      </div>
      <div className="card">
        <span className="card-label">Despesas</span>
        <strong className="card-valor despesa">{formatarMoeda(totalDespesas)}</strong>
      </div>
    </div>
  )
}

export default SummaryCards
