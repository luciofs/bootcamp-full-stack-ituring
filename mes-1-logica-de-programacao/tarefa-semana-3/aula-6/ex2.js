//verifica quantas vogais



function contaVogais(texto) {
    let qtdVogais = 0;

    for (i = 0; i < texto.length; i++){
        const ehVogalA = texto[i] === "a" || texto[i] === "A"; 
        const ehVogalE = texto[i] === "e" || texto[i] === "E";
        const ehVogalI = texto[i] === "i" || texto[i] === "I";
        const ehVogalO = texto[i] === "o" || texto[i] === "O";
        const ehVogalU = texto[i] === "u" || texto[i] === "U";

        if ((texto[i] === ehvogalA) || (texto[i] === ehvogalE) || (texto[i] === ehvogalI) || (texto[i] === ehvogalO) || (texto[i] === ehvogalU)) {
            qtdVogais = +1;
        }
            
    }

    return qtdVogais;

}

let texto = "Meu nome e Lucio";

console.log(contaVogais(texto));
