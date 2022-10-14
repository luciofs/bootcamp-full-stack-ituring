//Criar uma função SEM PARAMETRO que retorne um número aleatório entre 0 e 10000

function retornaNumero () {
    const min = 0
    const max = 10000
    
    numeroEncontrado = Math.floor(Math.random()*(max - min)) + min;
    
    return numeroEncontrado;
}

console.log("O número escolhido aleatóriamente foi: "+retornaNumero ())


//Função COM PARAMETRO sem retorno, MOSTRANDO O NUMERO DIGITADO e O NÚMERO SORTEADO
function mostraNumero (numeroDigitado) {
    const min = 0
    const max = 10000
    
    numeroEncontrado = Math.floor(Math.random()*(max - min)) + min;
    console.log("\nO número que voce digitou foi:"+numeroDigitado);
    console.log("O número sorteado foi: "+numeroEncontrado);
    
}

mostraNumero (1004)