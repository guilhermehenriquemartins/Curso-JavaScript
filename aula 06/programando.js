//MENSAGEM DE AVISO
window.alert('Seja bem-vindo(a) novamente!')

//MENSAGEM DE RECEBER DADOS
var nome = window.prompt('Qual é o seu nome?')
var idade = Number.parseInt(window.prompt('Quantos anos você tem?'))
var profissao = window.prompt('Qual área de formação você concluiu?')
var empresa = window.prompt('Onde você trabalha no momento?')
var salario = Number.parseFloat(window.prompt('Quanto você recebe?'))
var tempo = window.prompt(`Quanto tempo você está trabalhando na ${empresa}? [OBS: Digite em quantidade de meses]`)

//MENSAGEM DE MOSTRAR DADOS
window.alert(`Seja muito bem-vindo(a) ${nome}!`)
document.write(`Nome do usuário: <strong>${nome}</strong> <br>`)
document.writeln(`Quantidade de Letras: <strong>${nome.length}</strong> <br>`)
document.writeln(`${nome} em "MAIÚSCULO:" <strong>${nome.toUpperCase()}</strong> <br>`)
document.writeln(`${nome} em "minúsculo:" <strong>${nome.toLowerCase()}</strong> <br>`)
document.write(`Idade: <strong>${idade} anos</strong><br>`)
document.write(`Formação: <strong>${profissao}</strong><br>`)
document.write(`Empresa onde trabalha no momento: <strong>${empresa}</strong><br>`)
document.write(`Tempo de trabalho na ${empresa} até o momento: <strong>${tempo} meses</strong>`)

if (tempo >= 12 && tempo < 18) {
  var real = salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
  var soma = salario + 250
  var aumento = soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
  document.write(`, por esta causa você receberá um aumento de <strong>R$250,00</strong> (${real} + R$250,00 = <strong>${aumento}</strong>)`)
} else if (tempo >= 18 && tempo < 24) {
  var real = salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
  var soma = salario + 500
  var aumento = soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
  document.write(`, por esta causa você receberá um aumento de <strong>R$500,00</strong> (${real} + R$500,00 = <strong>${aumento}</strong>)`)
} else if (tempo >= 24 && tempo < 36) {
  var real = salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
  var soma = salario + 800.00
  var aumento = soma.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  document.write(`, por esta causa você receberá um aumento de <strong>R$800,00</strong> (${real} + R$800,00 = <strong>${aumento}</strong>)`)
} else if (tempo >= 36 && tempo < 48) {
  var real = salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
  var soma = salario + 1200.00
  var aumento = soma.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  document.write(`, por esta causa você receberá um aumento de <strong>R$1.200,00</strong> (${real} + R$1.200,00 = <strong>${aumento})</strong>`)
}