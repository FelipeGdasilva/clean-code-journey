// Aprendizado das páginas 36 e 37: Cada função deve ter um único nível de abstração.
//  Devemos ler o código de cima para baixo como uma narrativa (Regra Decrescente),
//  separando o conceito geral dos detalhes técnicos.

// Ruim: Mistura o conceito geral do pedido com detalhes de baixo nivel da string
function processarPedidoLoja(item, preco){
    if (!item) return;
    // Conceito de alto nivel
    let impostoCalculado = preco * 0.1;
    // Detalhe técnico de baixa nível (manipulação bruta)
    let logBrutoFormatado = "LOG_SYS_V1:"  + item.trim().toUpperCase() + " - R$" + preco;
    console.log(logBrutoFormatado);

    return preco + impostoCalculado;
}

// Código Limpo Separado por Níveis de Abstração e Regra Decrescente

// 1. Função de alto nível (A narrativa principal)
function processarPedidoLojaLimpo(item, preco){
    if (!item) return;

    const precoComImposto = calcularTotalComImposto(preco);
    registrarLogPedido(item, preco);

    return precoComImposto;
}

// 2. Nível de baixo nível (Detalhes de formatação de string/log)
function registrarLogPedido(item, preco){
    const logFormatado = formatarMensagemLog(item, preco);
    console.log(logFormatado);
}

function formatarMensagemLog(item, preco){
    const itemNormalizado = item.trim() .toUpperCase();
    return `LOG: ${itemNormalizado} custa R$${preco}`;
}