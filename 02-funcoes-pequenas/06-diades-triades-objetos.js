// Aprendizado das páginas 42 e 43:
// 1. Díades/Tríades geram confusão na ordem dos argumentos.
// 2. Transformar grupos de parâmetros num Objeto (Conceito).
// 3. Usar palavras-chave nos nomes para deixar a ordem explícita.

// ❌ Ruim: Tríade onde a ordem dos parâmetros é confusa
function desenharCirculo(x,y,raio){
    console.log(`Desenhando circulo em X:${x}, Y:${y} com raio ${raio}`);
}

//✨ Limpo: Agrupando 'x' e 'y' em um único objeto (Ponto)
function desenharCirculoLimpo(centro, raio){
    console.log(`Desenhando circulo em X:${centro.x}, Y:${centro.y} com raio ${raio}`)
}

//testando o código 

const posicao = {x: 10, y: 20}
desenharCirculoLimpo(posicao, 5)