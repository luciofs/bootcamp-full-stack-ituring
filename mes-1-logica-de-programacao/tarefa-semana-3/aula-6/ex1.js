//verifica qual maior elemento de uma lista



function maiorItemDeUmaLista(lista) {
    let maior = lista[0];

    for (i = 0; i < lista.length; i++){
        if (lista[i] > maior)
            maior = lista[i];
    }

    return maior;

}

let lista = [2,5,14,6,8,7,9,2,1];

console.log(maiorItemDeUmaLista(lista));
