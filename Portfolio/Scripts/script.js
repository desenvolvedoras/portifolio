
const botao = document.getElementById("modoClaroEscuro");

const NOME = "Giovana Finamor";

let tituloProfissional = "Técnica em Desenvolvimento de Sistemas e Graduanda em Engenharia de Computação";
let minhaBio = "Sou uma menina esforçada";

let anoFormatura = 2026;
let diaFormatura = 31;
let mesFormatura = 12; // dezembro
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

const DATATUAL = new Date(); //DATA ATUAL BIBLIOTECA
let mesAtual = DATATUAL.getMonth() + 1; // O método getMonth() retorna o mês (0-11), então adicionamos 1 para obter o número do mês correto
let anoAtual = DATATUAL.getFullYear(); // O método getFullYear() retorna o ano (4 dígitos)
let diaAtual = DATATUAL.getDate(); // O método getDate() retorna o dia do mês (1-31)

let indefinido;
let nulo = null;

let curso = {
  nome: "Desenvolvimento de Sistemas",
  semestre: 4,
  disciplinaAtual: "Linguagens de Programação",
};

// Cálculo do tempo restante
let hoje = new Date();

let anos = anoFormatura - hoje.getFullYear();
let meses = mesFormatura - (hoje.getMonth() + 1);

if (meses < 0) {
  anos--;
  meses += 12;
};


console.log(typeof botao);
console.log(typeof NOME);
console.log(typeof tituloProfissional);
console.log(typeof anoFormatura);
console.log(typeof anoIngresso);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof curso);

// Inserindo no HTML
document.getElementById("GiovanaFinamor").innerText = NOME;
document.getElementById("EngenheiradaComputação").innerText = tituloProfissional;
document.getElementById("minhabio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;

if (anoFormatura - anoAtual <= 0){
    document.getElementById("tempoRestante").innerText = "-";

}else if (anoFormatura - anoAtual === 1){
  document.getElementById("tempoRestante").innerText = `Tempo restante para formatura:"${anoFormatura - anoAtual} ano`;
}else{
  document.getElementById("tempoRestante").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;
};

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (diasRestantes <= 0 && mesesRestantes <=0 && anosRestantes <= 0) {
  document.getElementById("tempoRestante").innerText = "Curso concluído!";
};
let nota = 8;
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";
document.write(`<p>Nota: ${nota} - ${aprovado}</p>`);


let diaSemana = DATATUAL.getDay() + 1; // O método getDay() retorna o dia da semana (0-6), onde 0 é domingo, então adicionamos 1 para obter o número do dia da semana correto
let diaEscrito;
switch (diaSemana) {
  case 1: diaEscrito = "Domingo";break;
  case 2: diaEscrito = "Segunda-feira";break;
  case 3: diaEscrito = "Terça-feira";break;
  case 4: diaEscrito = "Quarta-feira";break;
  case 5: diaEscrito = "Quinta-feira";break;
  case 6: diaEscrito = "Sexta-feira";break;
  case 7: "Sábado";break;
  default: "Dia inválido";
}
document.write(`<p>Hoje é ${diaEscrito}</p>`);


// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}
for (let i = 0; i <= 20; i++){
  let pares = (i % 2 === 0) ? "par" : "ímpar";
  console.log(`${i} é ${pares}`);
}
let object={
  nome: "Giovana",
  idade: 18,
  profissao: "Estudante"
}
for (let chave in object){
  document.write(`<p>${chave}: ${object[chave]}</p>`);
}
let linguagens = ["C", "Python", "Java.script", "Css", "Html"];
for (let contem of linguagens){
  document.write(`<p>${linguagens}</p>`);
  if (contem=== "Python"){
    document.write('<p> ${contem}- É a linguagem que mais gosto!</p>');
  }
  else{
    document.write(`<p>${contem} - Essas estou em processo de aprendizagem!</p>`);
  }
}


let num= prompt("Prompt 1- Tente adivinhar minha idade:");
while (num % 2 !== 0){  
  num = prompt("Passou longe! O número é par, tente novamente:");
};

do{
  num= prompt("Prompt 2- Diga um número par:"); 
}while (num % 2 !== 0)
