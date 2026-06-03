// pagina 23 Aprendizado: Não precisamos colocar o tipo da variável no nome dela (como colocar 'i' para int ou 's' para string). O nome deve ser limpo e direto."

// O Código Sujo (Com codificação desnecessária):

// Imagine que isso está no sistema do Sonic. 
// O programador antigo colocou "s" para String, "i" para Inteiro e "b" para Booleano.
const sNomePersonagem = "Sonic";
const iVelocidadeMaxima = 100;
const bPossuiEsmeraldaCaos = true;

function fCalcular(oPersonagem, iDanoBase) {
  // "o" para Objeto, "i" para Inteiro
  return oPersonagem.iVelocidadeMaxima + iDanoBase;
}

//O Código Limpo (Sem codificações/prefixos):
//O livro diz: confie no seu código e na sua ferramenta. Deixe os nomes limpos e pronunciáveis.

const nomePersonagem = "Sonic";
const velocidadeMaxima = 100;
const possuiEsmeraldaDoCaos = true;

function calcularDanoTotal(personagem, danoBase) {
  return personagem.velocidadeMaxima + danoBase;
}