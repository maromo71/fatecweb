function calcularIdade(){
    //escolo local
    let idade = 25
    function exibir(){
        //escopo da variavel é considerado global
        //para a funcao exibir
        console.log(idade)
    }

    exibir()
}
//linha abaixo dara erro (idade nao identificado)
//console.log(idade)
calcularIdade()