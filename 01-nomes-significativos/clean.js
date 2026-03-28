/* CAPÍTULO 2: NOMES SIGNIFICATIVOS
   Desafio: Refatorar um código com nomes genéricos e informações erradas.
*/

// --- MINHA PRIMEIRA REFATORAÇÃO ---
// Aqui eu já melhorei as letras soltas (p, d, r)
function oponente(defesa) {
  let listadefesa = 10;
  let hp = 100;
  let resultado = hp - (defesa - listadefesa);

  if (resultado < 0) {
    console.log("Morreu");
  } else {
    console.log("Sobrou: " + resultado);
  }
}

// --- REFATORAÇÃO FINAL (CÓDIGO LIMPO) ---
// Ajustes: Nome da função como ação, removi o termo "lista" de um número 
// e usei nomes que revelam a intenção real.
function calcularDanoRecebido(pontosDeAtaque) {
  const pontosDeDefesa = 10; 
  let saudeRestante = 100; 
  let resultadoFinal = saudeRestante - (pontosDeAtaque - pontosDeDefesa);

  if (resultadoFinal <= 0) {
    console.log("Personagem foi derrotado");
  } else {
    console.log("Saúde restante: " + resultadoFinal);
  }
}

calcularDanoRecebido(50);