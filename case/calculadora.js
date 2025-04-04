export function calculadora(valor1, valor2, sinal){
    switch(sinal){
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor2 !==0 ? valor1 / valor2 : 'Não é possível dividir por zero';
        default:
            return 'Operador inválido';
    }
}

// Parte que executa após o carregamento da página (tudo no mesmo módulo)
document.getElementById('calcular').addEventListener('click', () => {
    const v1 = parseFloat(document.getElementById('valor1').value);
    const v2 = parseFloat(document.getElementById('valor2').value);
    const sinal = document.getElementById('sinal').value;

    const resultado = calculadora(v1, v2, sinal);

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});