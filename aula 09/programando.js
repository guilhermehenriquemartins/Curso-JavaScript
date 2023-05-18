function mudarCor() {
  var dado = window.document.getElementById('itexto')
  var corpo = window.document.body
  var resultado = window.document.getElementsByTagName('p')[0]
  var paragrafo = window.document.getElementsByTagName('p')[1]
  var titulo = window.document.getElementsByTagName('h1')[0]
  if (dado.value < 12) {
    resultado.style.color = 'black'
    paragrafo.style.color = 'black'
    titulo.style.color = 'black'
    corpo.style.background = 'yellow'
    resultado.innerText = 'Bom Dia à Todos Nós!'
  } else if (dado.value >= 12 && dado.value < 18) {
    resultado.style.color = 'black'
    paragrafo.style.color = 'black'
    titulo.style.color = 'black'
    corpo.style.background = 'orange'
    resultado.innerText = 'Boa Tarde à Todos Nós!'
  } else {
    corpo.style.background = '#102a67'
    resultado.innerText = 'Boa Noite à Todos Nós!'
    resultado.style.color = 'white'
    titulo.style.color = 'white'
    paragrafo.style.color = 'white'
  }
}