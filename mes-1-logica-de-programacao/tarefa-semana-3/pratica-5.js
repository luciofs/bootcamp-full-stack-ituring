/* Crie uma função no arquivo pratica-5.js que 
recebendo como argumento uma lista de seriados 
e o seriado que esteja querendo pesquisar, 
retorne a posição que se encontra o seriado. 
Caso não tenha encontrado o seriado, retorne undefined */

function encontraSeriado(seriadoEncontrado) {
    
    for (let i = 0; i < listaSeriados.length; i++){
        
        if (listaSeriados[i] === seriadoEncontrado){
           seriadoEncontrado = listaSeriados[i];
           console.log(seriadoEncontrado);
        }else{
            return undefined;
        }
        
    }
    
}
let listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]


encontraSeriado("lk")