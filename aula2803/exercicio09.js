const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite o numero desejado da sequencia [>2]"));

function fibonacci(num){
    if(num==1 || num==2) return 1;
    return fibonacci(num-2) + fibonacci(num-1);
}

console.log("O Fibonnaci na sequencia " + numero + " é igual a " + fibonacci(numero));