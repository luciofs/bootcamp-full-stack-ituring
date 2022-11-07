/* Prática 2: Utilizando o método .forEach() (parte 2)
Copie e cole em pratica-2.js o código do arquivo pratica-5.js da pasta tarefa-semana-3. Vamos utilizar o exercício da Prática 5: Procurando um seriado especial da semana anterior.

Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne undefined.".

Agora, altere o código da solução e utilize o método .forEach. */


let listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

let seriadoPesquisado = (listaSeriados, valor) => {
    for (i=0; i<listaSeriados.length; i++)
        if (listaSeriados[i] === valor)
            return i
    return undefined
}
console.log(seriadoPesquisado(listaSeriados, "Chernobyl"))


/* Alterar utilizando forEach

let seriadoPesquisado = (listaSeriados, valor) => {
    for (i=0; i<listaSeriados.length; i++)
        if (listaSeriados[i] === valor)
            return i
    return undefined
}
console.log(seriadoPesquisado(listaSeriados, "Chernobyl"))*/