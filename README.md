# ⚛️ Projetos em React — Rafael Costa

![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/status-ativo-35e3a3?style=flat-square)
![License](https://img.shields.io/badge/licença-MIT-34c3e6?style=flat-square)

Depois de C, migrei pra front-end. Cada pasta é um projeto completo em [Vite](https://vite.dev/) — interface real, não tutorial seguido.

## 📂 Projetos

| Projeto | Nível | O que tem dentro |
| --- | --- | --- |
| [`Lista_Tarefas`](./Lista_Tarefas) | Iniciante | To-do list com persistência em `localStorage`, filtro (todas/pendentes/concluídas), contador de itens restantes e componentização (`TaskForm`, `TaskList`, `TaskItem`, `TaskFilter`) |
| [`Dashboard_Financas`](./Dashboard_Financas) | Avançado | Dashboard de finanças pessoais: lançamento de receita/despesa por categoria, saldo calculado em tempo real, gráfico de gastos por categoria com [recharts](https://recharts.org/) e toda a lógica de cálculo isolada num custom hook (`useTransacoes`) |

## Como rodar

```bash
cd NomeDoProjeto
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Tecnologias

React 19 + Vite (JS puro, sem TS), hooks (`useState`/`useEffect`/custom hooks), `localStorage`, recharts no dashboard.

## Autor

Rafael Costa — [github.com/rafscorp](https://github.com/rafscorp)
