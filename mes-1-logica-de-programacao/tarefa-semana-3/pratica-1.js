/*Programa cria tabuada. A função recebera apenas 1 argumento: que será o número que vc utilizarpa para fazer a tabuada
Nossa tabuada deverá ir de 1 a 10 */



function calculaTabuada(num) {
    let i = 1;
    console.log("\nTabuada de "+num);
    while (i <= 10) {
        
        console.log((`${i} * ${num}`)+" = "+i*num);
        i=i+1;
        
    }
        
}

calculaTabuada(9);