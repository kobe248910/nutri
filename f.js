// muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var nutricao = document.querySelector(".titulo");
nutricao.textContent = "JP Nutrição";

//acessar a tag tr -menos o  paciente Paulo
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0;i < pacientes.length; i++){
    paciente = pacientes[i];
// Seleciona o conteúdo do peso da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//Seleciona o conteúdo altura da tag
var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

//calcula o imc
var imc = peso/ (altura*altura);
imc = imc.toFixed(2);
//variaveis com valor true
var pesoValido = true ;
var alturaValida = true; 

if(pesoValido && alturaValida){
    // acessa e altera o imc
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
}
if(peso <= 0 || peso >= 1000){
var pesoValido = false;
tdImc.textContent = "peso invalido";
paciente.classList.add('campo-invalido');
}
if(altura < 0 || altura > 3.00){
   
   var alturaValida =false ;
   tdImc.textContent = "altura invalida";
   paciente.classList.add('campo-invalido');
}

}

//quando clicar no titulo, apareça uma mensagem
nutricao.addEventListener('click',mostraMensagem);

function mostraMensagem (){
    alert("Este elento foi clicado");
}


//acessa o botão
var  botaoAdicionar = document.querySelector("#adicionar paciente");
//execulta os codigos ao clicar no botão 
botaoAdicionar.addEventListener ('click'),function(event){


//acessa o formúlario 
var formúlario = document.querySelector("#form-adiciona");
console.log(formulario);

//captura os valores digitados 
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formúlario.gordura.value;

var pacienteTR = document.createElement("tr");

//cria as tags <td>
var nomeTd = document.createElemente("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElemente("td");
var gorduraTd = document.createElemente("td");
var imcTd = document.createElemente("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

};
