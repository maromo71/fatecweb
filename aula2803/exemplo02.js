let nome = "Marcos"; //global

function saudacao(){
    let mensagem = "olá"; //local
    console.log(mensagem + ", " + nome);
}

saudacao();
// console.log(mensagem); //dar erro