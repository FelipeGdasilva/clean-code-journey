// Aprendizado das páginas 38 e 39:
// 1. O switch deve ser escondido e usado apenas para criar instâncias/comportamentos (Factory).
// 2. Usar nomes descritivos e claros, mesmo que sejam longos, pois expressam a intenção do código.

// ❌ Ruim: Switch exposto, viola SRP, nomes genéricos/curtos
function calc(user, tipo){
    switch(tipo){
        case "admin":
            return user.salario + 1000;
        case "dev":
            return user.salario + 500;
            default:
                return user.salario;
    }
}

//✨ Limpo: Escomdendo a decisão numa fábrica (Factory) e usando Nomes Descritivos

// Nível de Abstração Baixo (Objeto/Fábrica com as regras de cada perfil)
const calculadoresDeBonusPorPerfil ={
    administrador: (salarioBase) => salarioBase + 1000,
    desenvolvedor: (salarioBase) => salarioBase + 500,
    estagiario: (salarioBase) => salarioBase + 200,
};

// Nível de Abstração alto: Função com nome descritivo e sem switch exposto
function calcularSalarioComBonusDePerfil(usario){
    const calcularBonusEspecifico = calculadoresDeBonusPorPerfil[usario.perfil];

    if (!calcularBonusEspecifico){
        return usario.salarioBase;
    }
    return calcularBonusEspecifico(usario.salarioBase);
}

// Teste Prático
const usuarioDesenvolvedor = {nome: "Felipe", perfil: "desenvolvedor", salarioBase: 3000 };
const salarioFinal = calculadoresDeBonusPorPerfil(usuarioDesenvolvedor);

console.log(`Salário final de ${usuarioDesenvolvedor.nome}: R$ ${salarioFinal}`);
