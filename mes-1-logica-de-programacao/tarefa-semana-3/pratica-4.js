//Criar uma função que recebendo como argumento uma lista, exibacada um deles com o índece 

function mostraLista(){
    for (let i = 0; i < lista.length; i++){
        console.log(("["+i+"]"+lista[i]))
    }
}
    


let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]


mostraLista(lista);