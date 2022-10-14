//Criar uma função que retorne um número aleatório entre 0 e 10000

function mostraNumero (numeroDigitado) {
    const min = 0
    const max = 10000
    
    numeroEncontrado = Math.floor(Math.random()*(max - min)) + min;
    console.log("O número que voce digitou foi:"+numeroDigitado);
    console.log("O número sorteado foi: "+numeroEncontrado);
}

mostraNumero (2555)