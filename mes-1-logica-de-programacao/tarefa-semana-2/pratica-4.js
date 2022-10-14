//Função COM PARAMETRO RETORNANDO VALORES

function calculaDesconto (valorProduto, PorcDesconto) {
    
    valorSerPago = valorProduto - (PorcDesconto*valorProduto)/100
    console.log("O Produto adquirido custa R$ "+valorProduto)
    console.log("Aplicando o desconto de "+PorcDesconto,"%, o valor a ser pago fica por: R$ "+valorSerPago)
    
}

calculaDesconto (1000, 20)
