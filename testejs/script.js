let nota1 = Number(prompt(`Entre com a 1a nota do aluno`));
let nota2 = Number(prompt(`Entre com a 2a nota do aluno`));
let nota3 = Number(prompt(`Entre com a 3a nota do aluno`));
/* o prompt transforma em string */
let media;

media = (nota1 + nota2 + nota3)/3;

if (media >= 7){
    alert(`Voce foi aprovado com a nota ${media}`);
    /* usar crase quando for chamar uma variável dentro do alert */
    /* pode usar "" e '' quando não for chamar uma variável dentro do alert */
}else if (media < 7 && media >= 6){
    alert(`Voce foi pra recuperacao ${media}`);
}else{
    alert(`Voce foi reprovado com a nota ${media}`);
}