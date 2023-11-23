int somatorioDivisiveis(int numero) {
  int somatorio = 0;

  for (int i = 1; i < numero; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      somatorio += i;
      print(i);
    }
  }

  return somatorio;
}

void main() {
  int resultado = somatorioDivisiveis(10);
  print("O resultado do somatório é: $resultado");
}
