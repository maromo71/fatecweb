function imc(peso, altura){
    return peso / (altura * altura);
}


function saudacao(){
    return "Olá, aluno Fatec";
}
function somar(a, b){
    return a + b;
}
function fatorial(n){
    if(n == 1 || n==0) return 1;
    return n * fatorial(n - 1);
}

function inverterNumero(num){
   const str = num.toString();//converte para string
   const strInverse = str.split("").reverse().join("");//inverte 
   tam = str.length;//indica o tamanho da string
   let resultado = ""; //variavel resultado concatena o string invertido
   for(let i=tam-1; i>=0; i--){
       resultado += str[i]; //concatena o resultado com a vlr na pos de i
   } 
   return parseInt(resultado); //devolve o resultado como inteiro
}
console.log(inverterNumero("12345"));

peso_joao = 70;
altura_joao = 1.67;


console.log("O IMC é: " + imc(peso_joao, altura_joao));
console.log(saudacao());
console.log("A soma é: " + somar("10", "20"));
console.log("O fatorial de 5: " + fatorial(5));

num = 103;
resto = num % 10;
num /=10;
numR = Math.floor(num);//remove a parte decimal do número
console.log("O resto é: " + resto);
console.log("O número é: " + numR);