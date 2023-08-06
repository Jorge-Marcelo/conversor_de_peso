/*
Autor: Jorge Marcelo
Data de Criação: 07/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/******************** Codigo principal ************* */
/*Pegandos elementos HTML pelo id com DOM*/
const kilo = document.getElementById("kilo");
const grama = document.getElementById("grama");


/*Converter para kilo*/
function converterKilo() {
let kg = kilo.value;
grama.value = (kg * 1000).toFixed(2);
}

/*Converter para grama*/
function converterGrama() {
let g = grama.value;
kilo.value = (g / 1000).toFixed(2);
}

/*Escutador de eventos para adicionar os valores
nos inputs e carregando o valor automatico*/
kilo.addEventListener("input", converterKilo);
grama.addEventListener("input", converterGrama);
window.addEventListener("load", converterKilo);
/************************************************ */


/****** Codigo para alterar a cor de fundo *****************/
const changeImage = document.getElementById("background");
/*Array que contem as imagens de fundo*/
const arrayImages =  [
"assets/img/paisagem1.png",
"assets/img/paisagem2.png",
"assets/img/paisagem3.png",
"assets/img/paisagem4.png",
"assets/img/paisagem5.png",
"assets/img/paisagem6.png",
"assets/img/paisagem7.png"
];

/*variavel que seleciona qual sera a primeira imagem de fundo
a ser exibida ao apertar o botão*/
let imagemAtual = 1;


/*Função que vai percorrer o array e alterar de 1 em 1*/
function changeBackground(event) {
event.preventDefault();
changeImage.style.backgroundImage = `url(${arrayImages[imagemAtual]})`;
imagemAtual = (imagemAtual + 1) % arrayImages.length;
}

/*Função que altera o fundo pelo clique*/
const buttonChangeImage = document.getElementById("changeBKG");
buttonChangeImage.addEventListener("click", changeBackground);

/*Esse codigo é o mesmo da linha 35 ate a linha 61*/

const changeItem = document.getElementById("item");
const arrayItem =  [
"assets/anim/esmeraldas-1.png",
"assets/anim/esmeraldas-2.png",
"assets/anim/esmeraldas-3.png",
"assets/anim/esmeraldas-4.png",
"assets/anim/esmeraldas-5.png",
"assets/anim/esmeraldas-6.png",
"assets/anim/esmeraldas-7.png"
];

let itemAtual = 1;

function changeEsmeralda(event) {
event.preventDefault();
changeItem.style.backgroundImage = `url(${arrayItem[itemAtual]})`;
itemAtual = (itemAtual + 1) % arrayItem.length;
}

const buttonChangeItem = document.getElementById("changeBKG");
buttonChangeItem.addEventListener("click", changeEsmeralda);
/*********************************************************** */



/****************************Redes Sociais*******************/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})

/********************************************* */
