function microondas(opcao, tempo) {
    const TEMPO_PADRAO = {
      1: 10,
      2: 8,
      3: 15,
      4: 12,
      5: 8
    };
  
    const NOME_COMIDA = {
      1: "Pipoca",
      2: "Macarrão",
      3: "Carne",
      4: "Feijão",
      5: "Brigadeiro"
    };
  
    if (TEMPO_PADRAO[opcao] === undefined) {
      return "Prato inexistente";
    }
  
    if (tempo < TEMPO_PADRAO[opcao]) {
      return "Tempo insuficiente";
    }
  
    if (tempo >= TEMPO_PADRAO[opcao] * 3) {
      return "Kabumm";
    }
  
    if (tempo >= TEMPO_PADRAO[opcao] * 2) {
      return "A comida queimou";
    }
  
    return `${NOME_COMIDA[opcao]} pronto, bom apetite!`;
  }
  console.log(microondas(1,10))
  console.log(microondas(2,12))
  console.log(microondas(3,15))
  console.log(microondas(4,15))
  console.log(microondas(5,5))
  console.log(microondas(6,20))
  console.log(microondas(1,20))
  console.log(microondas(3,45))