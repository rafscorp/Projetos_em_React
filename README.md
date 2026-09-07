# ⚛️ Projetos em React — Rafael Costa

![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/status-ativo-35e3a3?style=flat-square)
![License](https://img.shields.io/badge/licença-MIT-34c3e6?style=flat-square)

Depois de praticar lógica e estrutura de dados em C, decidi migrar pra
front-end e aprender React construindo interfaces reais, não só seguindo
tutorial. Cada pasta deste repositório é um projeto completo, criado com
[Vite](https://vite.dev/), focado em consolidar os hooks básicos
(`useState`, `useEffect`, custom hooks) e em pensar em componentização e
gerenciamento de estado de um jeito que se aproxime do que se usa no
mercado.

## 📂 Projetos

| Projeto | Nível | O que tem dentro |
| --- | --- | --- |
| [`Lista_Tarefas`](./Lista_Tarefas) | Iniciante | To-do list com persistência em `localStorage`, filtro (todas/pendentes/concluídas), contador de itens restantes e componentização (`TaskForm`, `TaskList`, `TaskItem`, `TaskFilter`) |
| [`Dashboard_Financas`](./Dashboard_Financas) | Avançado | Dashboard de finanças pessoais: lançamento de receita/despesa por categoria, saldo calculado em tempo real, gráfico de gastos por categoria com [recharts](https://recharts.org/) e toda a lógica de cálculo isolada num custom hook (`useTransacoes`) |

## 🚀 Como Rodar

Cada projeto é independente, com seu próprio `package.json`. Pra rodar
qualquer um deles:

```bash
cd NomeDoProjeto
npm install
npm run dev
```

Depois é só abrir o endereço que o terminal mostrar (geralmente
`http://localhost:5173`).

## 🛠️ Tecnologias e Conceitos

- **React 19** com **Vite** (sem TypeScript, JavaScript puro)
- Hooks: `useState`, `useEffect`, `useMemo` e custom hooks
- Gerenciamento de estado local (lifting state up, estado derivado)
- Componentização e separação de responsabilidades
- Persistência client-side com `localStorage`
- Formulários controlados
- Integração com biblioteca externa (`recharts`) pra visualização de dados
- CSS puro (sem framework), com suporte a modo claro/escuro via
  `prefers-color-scheme`

## 👤 Autor

Rafael Costa
GitHub: [github.com/rafscorp](https://github.com/rafscorp)
