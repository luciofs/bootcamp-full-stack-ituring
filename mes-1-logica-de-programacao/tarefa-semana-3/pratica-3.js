/*Programa exibe os números primos. 
São aqueles que somente são divisíveis por 1 e por ele mesmoo
Crie uma função que ao receber como argumento um número inteiro maior que zero, 
retorne TRUE se este número for primo
e FALSE se ele não for primo. */



function exibeNumerosPrimos(num) {
    let i = 2;
    console.log("\nVerificando se Número é PRIMO\n");
    while (i <= num){

        if (num % i != 0 || num === 2) {
            console.log("TRUE - O núemro "+num,"é primo")    
        } else {
            console.log("FALSE - O núemro "+num,"não é primo")
        }
        i++
    }
       
}

exibeNumerosPrimos(15);