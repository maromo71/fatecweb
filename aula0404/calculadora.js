export function calcular(num1, num2, op){
    switch(op){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':    
            return num1 / num2;
        default:
            return 'Operador inválido!';
    }
}

//por enquanto. Exemplo de uso da função calcular
//let num1 = 10;
//let num2 = 5;
//let opcao = '/';
//console.log("Resultado da operação: " + calcular(num1, num2, opcao));

  