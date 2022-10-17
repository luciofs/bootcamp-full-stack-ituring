//Funções como variáveis (utilizando expressão de função)

/*
Sintaxe para expressão de função (anônima):  

let variableName = function(x, y) { 
    statements... 
    return (z) 
};
*/

let Desconto =  function(valorProduto, PorcDesconto) {
    
    valorSerPago = valorProduto - (PorcDesconto*valorProduto)/100
    console.log("O Produto adquirido custa R$ "+valorProduto)
    console.log("Aplicando o desconto de "+PorcDesconto,"%, o valor a ser pago fica por: R$ "+valorSerPago)
    
}

Desconto (1000, 20)
