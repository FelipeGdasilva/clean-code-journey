// Aprendizado das páginas 31 a 33 (Capítulo 3): Funções longas com múltiplos níveis de aninhamento são difíceis de ler. 
// A solução é extrair blocos de código para funções menores especializadas.



//❌ O Código Sujo (Função longa, cheia de regras e detalhes misturados):
// Função confusa que faz verificação, configuração e formatação ao mesmo tempo

function prepararTreinonoBoxe(atleta, ehProfissional, precisaAquecer){
    let relatorio = "";
    
    if(atleta !== null){
        if(precisaAquecer){
            relatorio += "Iniciar 10 minutos de corda.\n";
            relatorio += "Realizar mobilidade de ombros.\n";
        }
        relatorio += `Atleta ${atleta} pronto para o rtingue.\.n`;

        if(ehProfissional){
            relatorio +="Equipamento: Luvas 10oz e protetro bocal profissional.\n";
            relatorio += "Duração: 12 rounds.\n";
        }else{
            relatorio += "Equipamento: Luvas 14oz e capacente de proteção.\n";
            relatorio += "Duração: 3 rounds.\n";
        }
    }
    return relatorio;
}

//O Código Limpo (Refatorado em pequenas funções especializadas):
//Extraímos as tarefas específicas para funções menores. A função principal apenas coordena as chamadas.

// Funções especialmente (pequenas e diretas)
function gerarAquecimento(){
    return "Iniciar 10 minutos de corda.\nRealizar mobilidade de ombros.\n";
}

function gerarEquipamento(ehProfissonal){
    if(ehProfissonal){
        return "Equipamento: luvas 10oz e protetor bucal profissional.\nDuração: 12 rounds.\n";
    }
}

//CORREÇÃO: função principal curta e legível
function prepararTreinoBoxeLimpo(atleta, ehProfissional, precisaAquecer){
    if(!atleta) return "";

    let relatorio= "";

    if (precisaAquecer){
        relatorio += gerarAquecimento();
    }
    relatorio += `Atleta ${atleta} pronto para o ringue.\n`;
    relatorio += gerarEquipamento(ehProfissional);

    return relatorio;
}
