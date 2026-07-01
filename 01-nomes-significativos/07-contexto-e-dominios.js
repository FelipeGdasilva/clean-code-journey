// Aprendizado da página 27: Usar termos técnicos da programação (como Fila/Queue) porque outros devs vão ler o código. Quando não houver, usar termos do negócio. Sempre dar contexto para as variáveis não ficarem soltas e confusas.

// ❌ O Código Sujo (Sem contexto e ignorando termos técnicos óbvios)
// Variável sem contexto nenhum(o que é 'estado'?)
let estado = "São Paulo";
// Um sistema de fila de clientes no  caixa do mercado mal nomeado
const gerenciadorDePessoas= {
  // Chamou uma estrutura de Fila (Queue) de 'lista', o que é muito genérico
  listaDeEspera: ["Felipe", "Andressa"],

  // Nome confuso para adicionar alguém na fila 
  colocarNoNegocio(cliente){
    this.listaDeEspera.push(cliente);
  }
};

// O Código Limpo (Com dominio da solução e contexto significativo):

//Damos contexto para a variável solta e usamos um termo consagrado na programação (Fila/Queue)para o gerenciador.

// CORREÇÃO 3: variável com contexto explìcito
const estadoEnderecoCliente ="São Paulo";
// CORREÇÃO 1:  Usando termo do Domìnio da Solução(Fila/Queue)que todo programador entende
const  filaAtendimentoCaixa = {
  clientesEmEespera: ["Felipe", "Andressa"],

  // O método usa um verbo técnico e direto
  enfileirarCliente(cliente){
    this.clientesEmEespera.push(cliente);
  }
};