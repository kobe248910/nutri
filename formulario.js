var  botaoAdicionar = document.querySelector("#adicionar-paciente");
//execulta os codigos ao clicar no botão 
botaoAdicionar.addEventListener ('click',function(event){
    event.preventDefault();


//acessa o formúlario 
var formulario = document.querySelector("#form-adiciona");
console.log(formulario);

//captura os valores digitados 
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

var pacienteTr = document.createElement("tr");

//cria as tags <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularIMC(peso,altura)


//adicionar as tags na tela de usuario
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

//variavel para acessar tdBody e criar a tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


});
