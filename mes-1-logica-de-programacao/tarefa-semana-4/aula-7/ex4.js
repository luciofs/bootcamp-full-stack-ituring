let listaExemplo = [1, 5, 2]
let novaLista = listaExemplo.filter(function(item) {
  const ehPar = item % 2 == 0
  return ehPar
})
console.log(novaLista) // exibe [2]