/*Programa exibe os números impares. 
Crie uma função que recebendo um número como argumento maior que zero, 
exiba com console.log todos os números impares até chegar nesse número */



function exibeNumerosImpares(num) {
    let i = 1;
    console.log("\nNúmeros ímpares entre 0 e "+num);
    while (i <= num) {
        if (i % 2 === 0){
            
        } else {
            console.log(i); 

        }
    i++;     
    }
        
}

exibeNumerosImpares(55);