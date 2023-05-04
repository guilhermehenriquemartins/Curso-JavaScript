//MENSAGEM DE ALERTA
window.alert('Minha primeira mensagem...')

//MENSAGEM DE RECEBER DADOS
var nome = window.prompt('Qual é o seu nome?')
var idade = Number.parseInt(window.prompt('Qual é sua idade?'))
var salario = Number.parseFloat(window.prompt(`Qual é seu salário?`))
var empresa = window.prompt('Qual empresa você trabalha atualmente?')
var tempo = Number.parseInt(window.prompt(`Quanto tempo você já trabalha na ${empresa}? [OBS: Digite em meses]`))

//MENSAGEM PARA INFORMAR DADOS
window.confirm(`Seja muito bem-vindo(a) ${nome}!`)
window.confirm(`Seu nome tem ${nome.length} letras`)
window.confirm(`Seu nome em MAIÚSCULO fica como ${nome.toUpperCase()}`)
window.confirm(`Seu nome em "minúsculo" fica como ${nome.toLowerCase()}`)
window.confirm(`Você recebe ${salario.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
window.confirm(`Seu salário sem sinal de real: ${salario.toFixed(2).replace('.',',')}`)
window.confirm(`No momento você trabalha na ${empresa} com ${tempo} meses trabalhados.`)
if (tempo >= 12 && tempo < 18) {
  window.confirm('Por esta causa você receberá uma promoção de R$200,00')
  var soma = salario + 200.00
  window.confirm(`Seu salário anterior: ${salario.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})} + R$200,00 = ${soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`)
} else if (tempo >= 18 && tempo < 24) {
  window.confirm('Por esta causa você receberá uma promoção de R$300,00')
  soma = salario + 300.00
  window.confirm(`Seu salário anterior: ${salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} + R$300,00 = ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
} else if (tempo >= 24 && tempo < 36) {
  window.confirm('Por esta causa você receberá uma promoção de R$400,00')
  soma = salario + 400.00
  window.confirm(`Seu salário anterior: ${salario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} + R$400,00 = ${soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`)
} else if (tempo >= 36 && tempo < 48) {
  window.confirm('Por esta causa você receberá uma promoção de R$600,00')
  soma = salario + 600.00
  window.confirm(`Seu salário anterior: ${salario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} + R$600,00 = ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
} else if (tempo >= 48 && tempo < 60) {
  window.confirm('Por esta causa você receberá uma promoção de R$900,00')
  soma = salario + 900.00
  window.confirm(`Seu salário anterior: ${salario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} + R$900,00 = ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
} else if (tempo >= 60) {
  window.confirm('Por esta causa você receberá uma promoção de R$1.200,00')
  soma = salario + 1200.00
  window.confirm(`Seu salário anterior: ${salario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} + R$1.200,00 = ${soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
} else {
  window.confirm('No momento você não tem quantidade de meses suficientes para receber uma promoção adequada')
  window.confirm(`Mas não desanime, faltam ${12 - tempo} meses para a primeira promoção!`)
}