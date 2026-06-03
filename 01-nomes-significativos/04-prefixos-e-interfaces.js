//Aprendizado da página 24: Evitar o uso de prefixos como 'm_' para atributos ou a letra 'I' para interfaces. O código moderno não precisa dessas marcações visuais velhas.

//codigo sujo
// Usando prefixo m_ que o livro condena e nomes encurtados ruins
const m_avatar = {
  m_n: "Sonic",
  m_vMax: 120,

  m_fSetVelocidade: function(novaVelocidade) {
    // Código poluído com m_ em tudo
    this.m_vMax = novaVelocidade;
  }
};

//codigo limpo

const personagem = {
  nome: "Sonic",
  velocidadeMaxima: 120,

  atualizarVelocidade(novaVelocidade) {
    // O 'this' já deixa claro que estamos mexendo no atributo do objeto
    this.velocidadeMaxima = novaVelocidade;
  }
};