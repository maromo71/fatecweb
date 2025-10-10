function exemplo(){
    
    if(true){
        //se trocarmos por var, vaza para fora do
        //escopo do if
        let x = 10
        console.log(x)
    }
    console.log(x)  //erro x is not defined

}

exemplo()