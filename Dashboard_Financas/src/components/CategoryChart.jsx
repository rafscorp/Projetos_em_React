import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { corDaCategoria } from '../utils/categorias'
import { formatarMoeda } from '../utils/formatarMoeda'

// usei recharts em vez de desenhar as barras na mão com div/CSS porque esse é
// o projeto "avançado" do portfólio — queria mostrar que sei integrar uma lib
// de terceiro (ler a API dela, plugar os dados no formato que ela espera,
// customizar tooltip/cores) e não só CSS puro. Pra um gráfico de barra simples
// dava pra fazer só com divs e % de altura, mas recharts já resolve eixo,
// tooltip acessível e responsividade de graça
function TooltipCustom({ active, payload }) {
  if (!active || !payload?.length) return null
  const { categoria, total } = payload[0].payload
  return (
    <div className="chart-tooltip">
      <strong>{categoria}</strong>
      <span>{formatarMoeda(total)}</span>
    </div>
  )
}

function CategoryChart({ dados }) {
  if (dados.length === 0) {
    return <p className="lista-vazia">Lance uma despesa pra ver o gráfico por categoria.</p>
  }

  return (
    // ResponsiveContainer precisa de um pai com altura definida, por isso o
    // wrapper com altura fixa em vez de deixar só o CSS da classe cuidar disso
    <div style={{ width: '100%', height: 260 }}>
      <ResponsiveContainer>
        <BarChart data={dados} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="categoria"
            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<TooltipCustom />} cursor={{ fill: 'var(--bg)' }} />
          <Bar dataKey="total" radius={[6, 6, 0, 0]}>
            {dados.map((entrada) => (
              // cada categoria com a própria cor, senão o gráfico fica sem
              // graça (uma barra igual a outra, só muda o tamanho)
              <Cell key={entrada.categoria} fill={corDaCategoria(entrada.categoria)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart
