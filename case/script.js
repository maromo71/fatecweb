export function calcularValorFinal(preco, formaPagamento) {
    let percentual = 0;
    let tipo = '';
  
    switch (formaPagamento) {
      case 'dinheiro':
        percentual = -15;
        tipo = 'desconto';
        break;
      case 'debito':
        percentual = -10;
        tipo = 'desconto';
        break;
      case 'credito':
        percentual = 0;
        tipo = 'sem desconto';
        break;
      case '2x':
        percentual = 5;
        tipo = 'acréscimo';
        break;
      case '3x':
        percentual = 10;
        tipo = 'acréscimo';
        break;
      default:
        return {
          erro: true,
          mensagem: 'Forma de pagamento inválida.'
        };
    }
  
    const valorFinal = preco + (preco * percentual / 100);
  
    return {
      erro: false,
      precoOriginal: preco.toFixed(2),
      formaPagamento,
      tipo,
      percentual: Math.abs(percentual),
      valorFinal: valorFinal.toFixed(2)
    };
  }
  