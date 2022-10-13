//Função 1 - Receber o nome do comprador como parâmetro e exibir na tela a informação Olá, <nome do comprador>!.

function recebeNomeComprador (nome) {
    console.log ("\n Olá, "+nome,"!\n")
}
recebeNomeComprador ("Lucio")


//Função 2 - Esta função deverá ter 3 parâmetros: nome do produto, nome de quem recebeu o produto e o endereço de entrega. Ela deverá exibir a seguinte informação na tela:

function exibeMensagem (nomeProd, nome, endereco) {
    console.log (" Fizemos a entrega do produto "+nomeProd, "no endereço "+endereco,", com sucesso!\n O seu produto foi recebido por: "+nome,". \n Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.")
}
exibeMensagem ("PNEU", "JOSI", "RUA A, QUADRA B")



//Função 3 - Esta função terá 1 parâmetro: nome de quem enviou o email. Ela deverá exibir a seguinte informação na tela:

