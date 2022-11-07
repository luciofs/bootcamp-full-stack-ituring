/*crie uma função no arquivo `pratica-6.js` que recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo.*/

let filtraLista = (lista, valor) => {
    let novaLista = []
    for (item of lista)
        if (item.includes(valor))
            novaLista.push(item)
    return novaLista
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(filtraLista(listaSeriados, "Th"))
console.log(filtraLista(listaSeriados, "xasd"))

/*Vamos utilizar o exercício da Prática 6: Melhorando o processo de busca da semana anterior.

Relembrando o problema: "Recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.".

Agora, altere o código da solução e utilize o método .filter.*/
