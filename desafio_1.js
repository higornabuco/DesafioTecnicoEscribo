function somatorioDivisiveis(numero) {
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
        console.log(i)
      }
    }
  
    return somatorio;
  }
  
  const resultado = somatorioDivisiveis(11);
  console.log("O resultado do somatório é: " + resultado);
  