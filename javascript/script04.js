function somatoria(valores){
    let somatoria = 0
    //percorre o vetor somando os valores
    for(let i = 0; i < valores.length; i++){
        somatoria += valores[i]
    }
    return somatoria
}

v = [2, 4, 7, 1, 3]
//chamada da funcao
soma = somatoria(v)
console.log("A soma do vetor: " + soma)