function p(d) {
  let list = 10; // Isso aqui é o valor da defesa do oponente
  let hp = 100;
  
  // d é o valor do ataque do jogador
  let r = hp - (d - list);
  
  if (r < 0) {
    console.log("Morreu");
  } else {
    console.log("Sobrou: " + r);
  }
}

// Executando a função
p(50);