// Aprendizado das páginas 34 e 35: Funções devem ser minúsculas (2 a 4 linhas) e ter no máximo 1 ou 2 níveis de indentação.
//  O objetivo principal é que a função FAÇA APENAS UMA COISA.

// Ruim: Faz verficação, formatação e execução no mesmo lugar (muitos níveis de indentação)
function processarAtaque(personagem, energia, estaPerto){
    if (personagem){
        if(energia > 10){
            if(estaPerto){
                console.log(`${personagem}usou o ataque especial`);
            }else{
                console.log(`${personagem} está muito longe para atacar. `)
            }
        }else{
            console.log(`${personagem} está sem energia.`)
        }
    }
}

// Boas práticas das páginas 34 e 35: funções pequenas, sem if aninhado

function podeAtacar(energia, estaPerto){
    return energia > 10 && estaPerto;
}

function executarGolpeEspecial(personagem){
    console.log(`${personagem} usou om ataque especial!`);
}

function informarIncapacidade(personagem, energia){
    if(energia <= 10){
        console.log(`${personagem} está sem energia.`);
        return;
    }
    console.log(`${personagem} está muito longe para atacar.`)
}

// Função principal: curta, 1 nível de indentação e faz apenas uma coisa (coordena o ataque)

function processarAtaqueLimpo(personagem, energia, estaPerto){
    if(!personagem) return;

    if (podeAtacar(energia, estaPerto)){
        executarGolpeEspecial(personagem);
        return;
    }
    informarIncapacidade(personagem, energia);
}