// Aprendizado das páginas 40 e 41:
// 1. Evitar passar booleanos (flags) por parâmetro. Em vez disso, criar funções separadas.
// 2. Se a função precisa de muitos parâmetros, agrupar num objeto para manter a assinatura limpa.

// ❌ Ruim: Parâmetro lógico (flag) que faz a função ter duas responsabilidades
function enviarNotificacao(usuario, ehUrgente){
    if(ehUrgente){
        console.log(`{[SMS URGENTE] Enviado para ${usuario}`);
    }else{
        console.log(`[E-mail Padrão] Enviado para ${usuario}`);
    }
}

// ✨ Limpo: Duas funções separadas, cada uma com 1 parâmetro e responsabilidade única (SRP)
function enviarSmsUrgente(usuario){
    console.log(`[SMS URGENTE] Enviado para ${usuario}`);
}

function enviarEmailPadrao(usuario){
    console.log(`[E-mail Padrão] Eviando para ${usuario}`);
}

//--------------------------------------------------------

// ❌ Ruim: Muitos parâmetros soltos (Tríade/Poliade)
function criarPersonagemCosplay(nome, anime, versao, temArma){
    console.log(`Criando ${nome} do anime ${anime} (${versao})`);
}

//✨ Limpo: Agrupando parâmetros em um Objeto quando passar de 2 ou 3
function criarPersonagemCosplayLimpo({nome, anime, versao, temArma}){
    console.log(`Criando ${nome} do anime ${anime} (${versao})`);
}

// Teste dos conceitos 
enviarSmsUrgente("Felipe");

criarPersonagemCosplay({
    nome: "Ichigo Kurosaki",
    anime: "Bleach",
    versao: "Bankai Fullbring",
    temArma: true
});