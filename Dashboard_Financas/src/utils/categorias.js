// separei categoria de receita e de despesa porque não faz sentido categorizar
// uma entrada de dinheiro como "Transporte", por exemplo. Se um dia eu quiser
// deixar o usuário criar categoria própria, é só transformar isso num state
export const CATEGORIAS_RECEITA = ['Salário', 'Freelance', 'Investimentos', 'Outros']

export const CATEGORIAS_DESPESA = [
  'Alimentação',
  'Transporte',
  'Moradia',
  'Lazer',
  'Saúde',
  'Educação',
  'Outros',
]

// cor por categoria pro gráfico, só pra não ficar tudo na mesma cor
// (repete a paleta se um dia tiver mais categoria que cor, não trava nada)
const PALETA = ['#5b6cff', '#ff8a5b', '#22c08f', '#f4c744', '#e5484d', '#8b5cf6', '#06b6d4']

export function corDaCategoria(categoria) {
  const categorias = [...CATEGORIAS_RECEITA, ...CATEGORIAS_DESPESA]
  // uso a posição do nome dentro da lista combinada só pra ter um índice
  // determinístico (mesma categoria sempre cai na mesma cor)
  const indice = categorias.indexOf(categoria)
  return PALETA[indice % PALETA.length]
}
