const form = document.getElementById("cadastroForm");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const mensagemParagrafo = document.getElementById("mensagem");
// Função para validar o email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular
  return regex.test(email);
}
// Função para validar o formulário
function validarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  let nome = nomeInput.value;
  let email = emailInput.value;
  let mensagem = "";
  if (nome.trim() === "") {
    mensagem = "Por favor, preencha o nome.";
  } else if (!validarEmail(email)) {
    mensagem = "Por favor, insira um email válido.";
  }
  mensagemParagrafo.textContent = mensagem;
  // Se não houver erros, pode enviar o formulário (exemplo)
  if (mensagem === "") {
    alert("Formulário enviado com sucesso!");
    // Aqui você poderia enviar os dados para um servidor
    form.reset(); // Limpa o formulário
  }
}
// Adiciona o evento de submit ao formulário
form.addEventListener("submit", validarFormulario);
