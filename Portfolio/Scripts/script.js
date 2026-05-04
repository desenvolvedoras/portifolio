const botao = documento.getElementById("modoClaroEscuro");
const NOME= " Giovana Finamor";
let tituloProfissional = " Técnica em Desenvolvimento de Sistemas" + 
 " e Graduanda em Engenharia de Computação";
let anoFormatura = 2026;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome: "Desenvolvimento de Sistemas",
    semestre: 4,
    disciplinaAtual: "Linguagens de Programação",

};
console.log(typeof botao);
console.log(typeof NOME);
console.log(typeof tituloProfissional);
console.log(typeof anoFormatura);
console.log(typeof anoIngresso);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof curso);

document.getElementById("GiovanaFinamor").innerText = NOME;
document.getElementById("EngenheiradaComputação").innerText = tituloProfissional;
document.getElementById("minhabio").innerText= minhaBio;
document.getElementById("anoFormatura").innerText= "Ano de Formatura: " + anoFormatura;