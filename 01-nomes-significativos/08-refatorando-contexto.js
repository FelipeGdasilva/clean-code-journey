// Aprendizado das páginas 28 e 29: Para dar contexto limpo, 
// podemos extrair variáveis soltas e blocos de condicionais em funções menores e bem nomeadas.
//  Também devemos evitar colocar prefixos redundantes do projeto em tudo.

// ❌ O Código Sujo (Variáveis com contexto obscuro e condicionais misturados num único bloco):

// Função com variáveis soltas e cheia de if/else misturado
function exibirMensagemInimigos(candidato, quantidade){
    let numero;
    let verbo;
    let plural;

    if(quantidade === 0){
        numero = "nenhum";
        verbo ="existe";
        plural = "s";
    }else if (quantidade === 1){
        numero = "1";
        verbo = "existe";
        plural = "";
    }else{
        numero = quantidade.toString();
        verbo = "existem";
        plural = "s"
    }
    console.log(`Atualmente ${verbo} ${numero} ${candidato}${plural} no mapa.`);
}

//O Código Limpo (Seguindo a refatoração das páginas 28 e 29):
//Criamos funções específicas para cada situação. O código principal fica tão limpo que parece uma frase em português!

// Criamos funções pequenas que dão contexto claro a cada cenário
function formatarSemInimigo(nomeInimigo){
    return `Atualmente existe nenhum ${nomeInimigo} s no mapa.`;
}

function formatarVariosInimigos(nomeInimigo, quantidade){
    return `Atualmente existem ${quantidade} ${nomeInimigo}s no mapa`;
}

// CORREÇÃo: a função principal apenas decide qual formatador chamar
function gerarMensagemInimigos(nomeInimigo, quantidade){
    if (quantidade === 0){
        return formatarSemInimigo(nomeInimigo);
    }
    if (quantidade === 1){
        return formatarUmInimigo(nomeInimigo);
    }
    return formatarVariosInimigos(nomeInimigo,  quantidade);
}