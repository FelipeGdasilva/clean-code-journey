// Aprendizado da página 25: Evitar mapeamento mental com variáveis de uma única letra. Classes/Objetos devem ser substantivos e métodos/funções devem ser verbos, utilizando de preferência os padrões get, set e is.

//❌ O Código Sujo (Com mapeamento mental, classes mal nomeadas e métodos sem verbos):

// ERRO 1: Nome do objeto é um verbo genérico (Processar)
const ProcessarHeroi = {
  // ERRO 2: Variável de uma única letra que exige mapeamento mental
  n: "Sonic", 
  s: true, // O que será o "s"? (Mapeamento mental: s = superEstado)

  // ERRO 3: Nomes de métodos que não são verbos/ações claras
  dados: function() { 
    return this.n;
  },
  
  estado: function(valor) {
    this.s = valor;
  }
};

// O Código Limpo (Seguindo a página 25):
//Transformamos o objeto num substantivo claro, removemos as letras misteriosas e //aplicamos os padrões get, set e is nos métodos (ações).

// CORREÇÃO 1: Substantivo claro para a entidade
const personagemJogador = {
  nome: "Sonic",
  estaNoModoSuper: true, // Nome claro e legível

  // CORREÇÃO 3: Uso do padrão 'get' para obter dados
  getNome() {
    return this.nome;
  },

  // CORREÇÃO 3: Uso do padrão 'set' para alterar dados
  setModoSuper(status) {
    this.estaNoModoSuper = status;
  },

  // CORREÇÃO 3: Uso do padrão 'is' (ou 'esta') para retornos booleanos
  isSuper() {
    return this.estaNoModoSuper;
  }
};