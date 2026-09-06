import { useTransacoes } from './hooks/useTransacoes'
import TransactionForm from './components/TransactionForm'
import SummaryCards from './components/SummaryCards'
import TransactionList from './components/TransactionList'
import CategoryChart from './components/CategoryChart'
import './App.css'

// App aqui só orquestra: pega os dados e as funções prontas do hook
// useTransacoes e distribui pros componentes. Toda a conta (saldo, total por
// categoria etc) já vem calculada de lá, então não tem lógica de negócio
// espalhada pelo JSX
function App() {
  const {
    transacoes,
    adicionarTransacao,
    removerTransacao,
    saldo,
    totalReceitas,
    totalDespesas,
    totalPorCategoria,
  } = useTransacoes()

  return (
    <div className="app">
      <header>
        <h1>💰 Dashboard de Finanças</h1>
        <p className="subtitulo">controle suas receitas e despesas num só lugar</p>
      </header>

      <SummaryCards saldo={saldo} totalReceitas={totalReceitas} totalDespesas={totalDespesas} />

      <div className="grid-principal">
        <section className="card-secao">
          <h2>Nova transação</h2>
          <TransactionForm onAdd={adicionarTransacao} />
        </section>

        <section className="card-secao">
          <h2>Gastos por categoria</h2>
          <CategoryChart dados={totalPorCategoria} />
        </section>
      </div>

      <section className="card-secao">
        <h2>Transações</h2>
        <TransactionList transacoes={transacoes} onRemove={removerTransacao} />
      </section>
    </div>
  )
}

export default App
