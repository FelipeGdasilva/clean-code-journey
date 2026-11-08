// Aprendizado das páginas 44 e 45:
// 1. Efeitos Colaterais: A função não deve mentir nem fazer coisas escondidas
//    (ex: alterar estado global ou sessão sem avisar).
// 2. Parâmetros de Saída: Evite usar parâmetros para "retornar" dados.
//    O próprio objeto deve alterar seu estado.
// 3. Separação Comando-Consulta (CQS): Uma função ou faz algo (Comando) 
//    ou responde/retorna algo (Consulta), NUNCA os dois ao mesmo tempo.

//❌ Ruim: Mistura Comando (alterar dados) com Consulta (verificar/retornar algo)
class CarrinhoDeCompras {
  constructor() {
    this.itens = [];
  } 

  // Tenta adicionar o item (comando) e ainda retorna se deu certo (Consulta)
  adicionarItem(item) {
    if (this.itens.includes(item)) {
      return false; // Já existe
    }
    this.itens.push(item);
    return true; // Adicionado com sucesso
  }
} 

// ✨ Limpo: Separar bem as responsabilidades (cqs)
class CarrinhoDeComprasLimpo{
    constructor() {
        this.itens = [];
    }

    // 1. comando: Apenas executa a ação de modificar o estado
    adicionarItem(item) {
        if (!this.verificarSeItemExiste(item)) {
            this.itens.push(item);
        }
    }

    // 2. Consulta: Apenas devolve um informação sobre o estado (sem alterar nada)
    verificarSeItemExiste(item) {
        return this.itens.includes(item);
    }
}

// Testando o código
const meuCarrinho = new CarrinhoDeComprasLimpo();

meuCarrinho.adicionarItem("Teclado Mecânico");
console.log("O item existe no carrinho?", meuCarrinho.verificarSeItemExiste("Teclado Mecânico"));