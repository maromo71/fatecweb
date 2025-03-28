const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Sua opcao [1..3] ? ', (answer) => {
    // Display the input in the console
    console.log(`Sua resposta: ${answer}`);
    
    
    // Close the readline interface
    rl.close();
});

/*switch (escolha) {
    case 1:
        console.log("Escolheu 1")
        break;
    case 2: 
        console.log("Escolheu 2")
        break;
    case 3:
        console.log("Escolheu 3")
        break;
    default:
        console.log("Opcao invalida");
}


*/