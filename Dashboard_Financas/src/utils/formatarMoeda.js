// centralizei a formatação de moeda aqui pra não ficar repetindo
// `new Intl.NumberFormat(...)` em cada componente que precisa mostrar um valor
const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatarMoeda(valor) {
  return formatador.format(valor)
}
