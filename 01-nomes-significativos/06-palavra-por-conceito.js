// Aprendizado da página 26: Evitar piadas ou gírias no código. Manter consistência escolhendo apenas uma palavra para o mesmo conceito (ex: usar sempre 'get' para buscar) e evitar usar a mesma palavra com sentidos diferentes.

// O Código sujo(com girias, mistura de conceito e trocadilhos)

//Objeto que gerencia o jogo usando termos misturados e piadas
const sistemajogo ={
    //ERRO 1: Uso "fetch" para buscar dados
    fetchPersonagem(){
        return "Sonic";
    },
    // ERRO 2: Mudou o termo para "retrieve" para fazer a mesma ação de buscar
    retrievePontuacao(){
        return 5000;
    },
    // ERRO 3:Usou uma piada/gíria interna(Não dê uma de espertinho)
    whackInimigo(){
        console.log("Inimigo derrotado");
    },
    // ERRO 4: Trocadilho - usou "add" para colocar item e também para somar
    addItem(item){
        console.log(`${item} adicionado ao inventário`);
    },
    addValores(a, b ){
        return a + b; // Isso confunde! "add" deveria ser só para inserir itens.
    }
};

// O Código limpo (Padrão Profissioanl):
const sistemaJogoLimpo = {
    //CORREÇÃO 1 e 2: Uma plavara por conceito. Se é busca, usamos sempre "get"
    getPersonagem(){
        return "Sonic";
    },
    getPontuacao(){
        return 5000;
    },
    //CORREÇÃO 3: sem gracinhas. Verbo direto e técnico
    eliminarInimigo(){
        console.log("Inimigo derrotado");
    },
    //CORREÇÃO 4: Evitando trocadilhos. "add" para o inventário, "calcularSoma" para matemática
    addItem(item){
        console.log(`${item} adicionado ao inventário`);
    },
    calcularSoma(numeroA, numeroB){
        return numeroA + numeroB;
    }
};