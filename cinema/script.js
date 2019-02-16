let idade = Number(prompt("Olá! Qual sua idade?"));
let filme = prompt("Digite o nome do filme que deseja assistir: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5");
let outro;
//array a ser preenchido com os objetos
filmes = [];

//argumentos do objeto
filme1 = {nome: "Filme 1", classificacao: 14};
filme2 = {nome: "Filme 2", classificacao: 16};
filme3 = {nome: "Filme 3", classificacao: 18};
filme4 = {nome: "Filme 4", classificacao: 14};
filme5 = {nome: "Filme 5", classificacao: 16};

if (filme == "Filme 1" || filme == "Filme 4"){
    if (idade < 14){
        alert(`Você não tem idade suficiente para assistir a este filme. Classificação: 14 anos`);
        let outro = prompt("Deseja ver outro filme?");
        if (outro == "sim"){
            let filme = prompt("Digite o nome do filme que deseja assistir: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5");
        } else{
            close();
        }
    } else{
        alert(`Deseja comprar seu ingresso agora?`);
    }
} else if (filme == "Filme 2" || filme == "Filme 5"){
    if (idade < 16){
        alert(`Você não tem idade suficiente para assistir a este filme. Classificação: 16 anos.`);
        let outro = prompt("Deseja ver outro filme?");
        if (outro == "sim"){
            let filme = prompt("Digite o nome do filme que deseja assistir: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5");
        } else{
            close();
        }
    } else{
        alert(`Deseja comprar seu ingresso agora?`);
    }
} else if (idade <18){
    alert(`Você não tem idade suficiente para assistir a este filme. Classificação 18 anos`);
    let outro = prompt("Deseja ver outro filme?");
    if (outro == "sim"){
        let filme = prompt("Digite o nome do filme que deseja assistir: \n Filme 1 \n Filme 2 \n Filme 3 \n Filme 4 \n Filme 5")
    } else{
        close();
    }
} else {
    alert(`Deseja comprar seu ingresso agora?`);
}




//let filmes = [
//    { titulo: 'filme', classificacao: '0'},
//    {...}
//];

//if (idade >=18) {
//    alert(`Voce pode assistir aos filmes
//    - ${filmes[0].titulo} - classificação ${filmes[0].classificacao}`);
//}
