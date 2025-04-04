import promptSync from 'prompt-sync';
import { calculadora } from './calculadora.js';
const prompt = promptSync();

let valor1 = parseInt(prompt("Digite o valor 1: "));
let valor2 = parseInt(prompt("Digite o valor 2: "));
let sinal = prompt("Digite o sinal: ");

console.log("Resultado da operacao escolhida: ")
console.log(calculadora(valor1, valor2, sinal));