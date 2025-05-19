/*
console.log(" Hello World! ");
alert("Hello World!"); //Exibe uma caixa de alerta com a mensagem "Hello World!"
prompt("Digite seu nome: "); //Exibe uma caixa de prompt para o usuário digitar seu nome
*/



console.log(document.querySelector('h1').textContent); //Seleciona o primeiro elemento <h1> do documento e exibe no console
document.querySelector('h1').textContent = "MBA"; //Seleciona o primeiro elemento <h1> do documento e altera seu conteúdo
document.title = "MBA Esalq";

let tagH3 = document.createElement('h3');
tagH3.textContent = 'Engenharia de Software';
document.body.appendChild(tagH3);