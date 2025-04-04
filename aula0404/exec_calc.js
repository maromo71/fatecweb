import prompt from 'prompt-sync';
import calcular from './calculadora.js';
const input = prompt();

let num1 = parseInt(input("Digite o primeiro número: "));
let num2 = parseInt(input("Digite o segundo número: "));
let opcao = input("Digite a operação desejada (+, -, *, /): ");
let resultado = calcular(num1, num2, opcao);
console.log("Resultado da operação: " + resultado);