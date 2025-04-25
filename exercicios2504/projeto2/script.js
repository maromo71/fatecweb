const valorRealInput = document.getElementById('valorReal');
const converterBotao = document.getElementById('converter');
const resultadoParagrafo = document.getElementById('resultado');
const taxaCambioDolar = 5.69; // Taxa de câmbio fixa (exemplo)

// Função para converter a moeda
function converterMoeda() {
  const valorReal = parseFloat(valorRealInput.value); // Obtém o valor do input e converte para número
  if (isNaN(valorReal)) { // Verifica se o valor é um número válido
    resultadoParagrafo.textContent = 'Por favor, insira um valor válido.';
    return;
  }
  const valorDolar = valorReal / taxaCambioDolar; // Converte o valor de real para dólar
  resultadoParagrafo.textContent = `Valor em Dólares: $${valorDolar.toFixed(2)}`; // Atualiza o parágrafo com o resultado
}

// Adiciona o evento de clique ao botão de conversão
converterBotao.addEventListener('click', converterMoeda);