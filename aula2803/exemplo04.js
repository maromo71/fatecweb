const prompt = require('prompt-sync')();
let escolha;
do{
    escolha = parseInt(prompt("Digite o valor da escolha [1..3] "));
    switch (escolha) {
        case 1:
            console.log("Escolheu 1")
            break;
        case 2: -
            console.log("Escolheu 2")
            break;
        case 3:
            console.log("Escolheu 3")
            break;
    }
}while(escolha <1 || escolha>3);

console.log("Acabou!!! :-) ");