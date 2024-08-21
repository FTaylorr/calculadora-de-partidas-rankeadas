function determinarNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = (vitorias - derrotas);
    let nivel;

    // Determina o nível com base no número de vitórias
    switch (true) {
        case (saldoVitorias < 10):
        nivel = "Ferro";
            break;
        case (saldoVitorias >= 10 && saldoVitorias <= 20):
            nivel = "Bronze";
            break;
        case (saldoVitorias >20 && saldoVitorias <= 50):
            nivel = "Prata";
            break;
        case (saldoVitorias >50 && saldoVitorias <= 80):
            nivel = "Ouro";
            break;
        case (saldoVitorias >80 && saldoVitorias<= 90):
            nivel = "Diamante";
            break;
        case (saldoVitorias >90 && saldoVitorias <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    // Retorna a mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const vitorias = 80;
const derrotas = 80;
const mensagem = determinarNivel(vitorias, derrotas);
console.log(mensagem);