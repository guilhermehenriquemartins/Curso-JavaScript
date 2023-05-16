//MENSAGEM DE ALERTA
alert('Seja Bem-Vindo(a) Novamente!')


//MENSAGEM DE RECEBER DADOS
var nome = prompt('Qual é o seu nome?')
var idade = Number.parseInt(prompt('Qual é sua idade'))
var salario = Number.parseFloat(prompt('Qual é o seu salário?'))
var emprego = prompt(`${nome}, onde você trabalha atualmente?`)
var tempo = Number.parseInt(prompt(`Há quanto tempo você trabalha na ${emprego}? [OBS: Digite em qtd de meses]`))


//MENSAGEM DE RESULTADOS
document.write(`Prazer em te conhecer, <strong>${nome}!</strong><br>`)
document.write(`${nome}, seu nome tem <strong>${nome.length}</strong> letras<br>`)
document.write(`Seu nome em "MAIÚSCULO" fica como <strong>${nome.toUpperCase()}</strong><br>`)
document.write(`Seu nome em "minúsculo" fica como <strong>${nome.toLowerCase()}</strong><br>`)
document.write(`Você tem <strong>${idade}</strong> anos de idade<br>`)
document.write(`Você trabalha na <strong>${emprego}</strong> com <strong>${tempo}</strong> meses<br>`)
document.write(`No momento você recebe <strong>${salario.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</strong><br>`)


//MENSAGEM DE CONDIÇÕES

if (tempo > 0) {
  document.write('------------------------------------------------------------------------------------------------<br>')
  var aumento1 = salario + 300.00
  var aumento2 = aumento1 + 590.00
  var aumento3 = aumento2 + 610.00
  if (tempo < 12) {
    document.write(`Com ${tempo} meses de trabalho você ainda não alcançou o ideal para o primeiro aumento.<br>`)
    if ((12 - tempo) == 1) {
      document.write(`Ainda falta <strong>${12 - tempo} mês</strong> para o primeiro aumento.`)
    } else if ((12 - tempo) != 1) {
      document.write(`Ainda faltam <strong>${12 - tempo} meses</strong> para o primeiro aumento.`)
    }
  } else if (tempo >= 12 && tempo < 18) {
    document.write(`<strong>Parabéns!! Você conseguiu o seu primeiro aumento</strong><br>`)
    document.write(`Seu salário passou de ${salario.toLocaleString('pt-br',{style:'currency', currency:'BRL'})} para <strong>${aumento1.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</strong><br>`)
    document.write(`Próxima meta é de <strong>R$2.890,00</strong><br>`)
    if ((18 - tempo) == 1) {
      document.write(`Falta <strong>1 mês</strong> para alcançar a próxima meta`)
    } else if ((18 - tempo) != 1) {
      document.write(`Faltam <strong>${18 - tempo} meses</strong> para alcançar a próxima meta`)
    }
  } else if (tempo >= 18 && tempo < 24) {
    document.write('<strong>Parabéns!! Você alcançou a meta de R$2.890,00</strong><br>')
    document.write(`Seu salário passou de ${aumento1.toLocaleString('pt-br',{style:'currency', currency: 'BRL'})} para <strong>${aumento2.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</strong><br>`)
    document.write('Próxima meta é de <strong>R$3.500,00</strong><br>')
    if ((24 - tempo) == 1) {
      document.write('Falta <strong>1 mês</strong> para a próxima meta')
    } else if ((24 - tempo) != 1) {
      document.write(`Faltam <strong>${24 - tempo} meses</strong> para alcançar a próxima meta`)
    }
  } else if (tempo >= 24 && tempo < 36) {
    document.write('<strong>Excelente!! Você alcançou a meta de R$3.500,00</strong><br>')
    document.write(`Seu salário passou de ${aumento2.toLocaleString('pt-br',{style:'currency', currency:'BRL'})} para <strong>${aumento3.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</strong><br>`)
    document.write('Próxima meta é de <strong>R$4.300,00</strong><br>')
    if ((36 - tempo) == 1) {
      document.write('Falta <strong>1 mês</strong> para alcançar a próxima meta')
    } else if ((36 - tempo) != 1) {
      document.write(`Faltam <strong>${36 - tempo} meses</strong> para alcançar a próxima meta`)
    }
  }
}