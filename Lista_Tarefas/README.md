# 📝 Lista de Tarefas

## 🔎 Visão Geral

Um to-do list de verdade, feito em React + Vite. Não é só uma lista bonitinha que
some quando você dá F5: as tarefas ficam salvas no `localStorage` do navegador,
então se você fechar a aba e voltar depois, tudo continua lá.

A ideia aqui foi praticar os hooks básicos do React (`useState` e `useEffect`) e
separar a interface em componentes pequenos, cada um com uma responsabilidade
só, em vez de jogar tudo dentro de um `App.jsx` gigante.

## ✅ Funcionalidades

- Adicionar tarefa nova (com validação pra não deixar adicionar texto vazio)
- Marcar/desmarcar tarefa como concluída
- Remover tarefa
- Filtrar por: Todas / Pendentes / Concluídas
- Contador de quantas tarefas ainda estão pendentes
- Persistência automática em `localStorage` (sobrevive a refresh)

## 🚀 Como Rodar

```bash
npm install && npm run dev
```

Depois é só abrir o endereço que o terminal mostrar (geralmente
`http://localhost:5173`).

## 🧠 Conceitos Aplicados

- **`useState`** pra guardar a lista de tarefas e o filtro ativo
- **`useEffect`** pra sincronizar o estado com o `localStorage` toda vez que a
  lista muda
- **Inicialização "lazy" do `useState`** (passando uma função em vez de um
  valor) pra ler o `localStorage` só uma vez, na primeira renderização, e não
  em toda re-renderização
- **Componentização**: `TaskForm`, `TaskList`, `TaskItem` e `TaskFilter`, cada
  um cuidando só da própria parte da tela
- **Lifting state up**: quem manda no estado de verdade é o `App`, os
  componentes filhos só recebem dados via props e avisam mudanças via
  callbacks (`onAdd`, `onToggle`, `onRemove`)
- **Filtro derivado do estado**: a lista filtrada não é guardada em outro
  `useState` separado, é calculada direto a partir da lista real toda vez que
  o componente renderiza, pra nunca ficar dessincronizada
- **`key` estável** (`crypto.randomUUID()`) em vez de usar o índice do array,
  pra evitar bug visual quando um item do meio da lista é removido

## 🔮 Melhorias Futuras

- Editar o texto de uma tarefa já criada (hoje só dá pra criar/marcar/remover)
- Categorias ou tags nas tarefas
- Drag and drop pra reordenar
- Sincronizar com um backend em vez de só `localStorage`

## 👤 Autor

Rafael Costa
GitHub: [github.com/rafscorp](https://github.com/rafscorp)
