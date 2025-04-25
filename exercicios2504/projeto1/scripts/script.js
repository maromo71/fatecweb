let contador = 0;
const contadorElemento = document.getElementById("contador");
const aumentarBotao = document.getElementById("aumentar");
const diminuirBotao = document.getElementById("diminuir");
// Função para atualizar o contador na tela
function atualizarContador() {
  if(contador < 0) {
    //adicionar um estilo vermelho ao contador
    contadorElemento.style.color = "red";
  }else{
    //adicionar um estilo verde ao contador
    contadorElemento.style.color = "black";
  }
  contadorElemento.textContent = contador;
}
// Função para aumentar o contador
function aumentar() {
  contador++;
  atualizarContador();
}
// Função para diminuir o contador
function diminuir() {
  contador--;
  atualizarContador();
}
// Adiciona os eventos de clique aos botões
aumentarBotao.addEventListener("click", aumentar);
diminuirBotao.addEventListener("click", diminuir);