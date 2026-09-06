# 💰 Dashboard de Finanças

## 🔎 Visão Geral

Um dashboard financeiro pessoal em React + Vite: lança receita e despesa, vê o
saldo atualizar na hora, e enxerga pra onde o dinheiro tá indo através de um
gráfico de gastos por categoria (usando [recharts](https://recharts.org/)).

Esse é o projeto "avançado" do repositório. O foco aqui não foi só montar
tela bonita, mas caprichar na **lógica de cálculo** por trás dela: saldo,
total de receita, total de despesa e total por categoria são todos derivados
da mesma lista de transações, calculados num lugar só (`useTransacoes`) em vez
de espalhados pelos componentes.

## ✅ Funcionalidades

- Lançar receita ou despesa (com descrição, categoria e valor)
- Categorias diferentes pra receita e despesa (não faz sentido categorizar uma
  entrada de salário como "Transporte")
- Saldo total atualizado automaticamente
- Total de receitas e total de despesas em cards separados
- Lista de todas as transações, com opção de remover
- Gráfico de barras dos gastos agrupados por categoria
- Persistência em `localStorage` (os lançamentos sobrevivem ao refresh)

## 🚀 Como Rodar

```bash
npm install && npm run dev
```

Depois é só abrir o endereço que o terminal mostrar (geralmente
`http://localhost:5173`).

## 🧠 Conceitos Aplicados

- **Custom hook (`useTransacoes`)**: toda a "regra de negócio" (somar,
  filtrar, persistir) fica isolada num hook próprio, então o `App.jsx` só
  pede os dados prontos e monta a tela, sem lógica de cálculo espalhada pelo
  JSX
- **`useMemo`**: o resumo (saldo, total por categoria etc) só é recalculado
  quando a lista de transações realmente muda, não em toda renderização
- **`useState` + `useEffect`** pra persistir as transações no `localStorage`,
  igual no projeto da lista de tarefas
- **Agregação de dados com `reduce`/loop**: transformar uma lista "achatada"
  de transações num objeto agrupado por categoria (`{ categoria: total }`) e
  depois num array ordenado, no formato que o gráfico espera
- **Integração com lib externa (recharts)**: usei uma biblioteca de gráfico
  de verdade em vez de desenhar barras só com `<div>` + CSS, pra treinar como
  ler a API de uma lib de terceiro, plugar meus dados no formato que ela
  espera (`[{ categoria, total }]`) e customizar tooltip/cores. Pra um gráfico
  de barra simples até dava pra fazer só com CSS, mas achei mais valioso pro
  portfólio mostrar essa integração
- **Formulário controlado com estado dependente**: ao trocar entre "Receita" e
  "Despesa" no formulário, a lista de categorias disponíveis muda junto (e a
  categoria selecionada é resetada), pra nunca ficar uma categoria de receita
  selecionada num lançamento de despesa

## 🔮 Melhorias Futuras

- Editar uma transação já lançada (hoje só dá pra criar/remover)
- Filtro por período (mês atual, últimos 30 dias etc)
- Gráfico de evolução do saldo ao longo do tempo
- Exportar as transações em CSV

## 👤 Autor

Rafael Costa
GitHub: [github.com/rafscorp](https://github.com/rafscorp)
