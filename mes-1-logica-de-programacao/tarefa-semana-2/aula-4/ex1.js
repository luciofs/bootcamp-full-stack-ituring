
function obterAnoAtual () {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    return anoAtual;
}



const nome = "Pedro";
const anoNascimento = 2012;
const anoAtual = obterAnoAtual();
const idade = anoAtual - anoNascimento;


if (idade >= 18) {
    console.log(nome+", Voce Pode Jogar");
}else {
    console.log(nome+", Voce Não Pode Jogar");
}