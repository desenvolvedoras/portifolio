// Corrigindo 'documento' para 'document'
const botao = document.getElementById("modoClaroEscuro");

const NOME = "Giovana Finamor";

let tituloProfissional =
  "Técnica em Desenvolvimento de Sistemas e Graduanda em Engenharia de Computação";

let anoFormatura = 2026;
let mesFormatura = 12; // dezembro
let anoIngresso = 2025;

let indefinido;
let nulo = null;

let curso = {
  nome: "Desenvolvimento de Sistemas",
  semestre: 4,
  disciplinaAtual: "Linguagens de Programação",
};

// Criando a bio (estava faltando)
let minhaBio = `Sou ${NOME}, estudante de ${curso.nome}, atualmente no ${curso.semestre}º semestre.`;

// Cálculo do tempo restante
let hoje = new Date();

let anos = anoFormatura - hoje.getFullYear();
let meses = mesFormatura - (hoje.getMonth() + 1);

if (meses < 0) {
  anos--;
  meses += 12;
}

// Logs
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
document.getElementById("anoFormatura").innerText =
  "Ano de Formatura: " + anoFormatura;

// Novo: tempo restante
document.getElementById("tempoRestante").innerText =
  `Faltam ${anos} ano(s) e ${meses} mês(es) para a formatura`;