# Maior número

Baseado em uma lista de números inteiros positivos determinar o maior número da sequência

## Regras da sequência

As seguintes regras são aplicadas a lista de números:

1. A lista deve ser formada por números inteiros.
2. A lista pode ter de 1 a 100 números.
3. Os números da lista devem estar no range de 1 a 100.

## Massa de dados para validação

Abaixo uma lista de inputs e outputs com 20 anos, sendo 10 anos bissextos e 10 anos não bissextos:

```
export const inputOutput = [
  { list: [10, 30, 20, 5], max: 30 },
  { list: [99, 100, 55, 1, 2, 9], max: 100 },
  { list: [1, 1, 1, 1, 1, 1, 1], max: 1 },
  { list: [-1000, 2, 0, 4, 78, 25, 35], max: null },
  { list: [27, 20, 73, 69, 86, 53, 29, 50, 25, 28, 74, 22, 93, 84, 57, 13, 65, 36, 95, 17, 30, 98, 7, 68], max: 98 },
  { list: [], max: null },
  { list: [94, 114, 101, 108, 96, 105, 102, 111, 113, 95, 103, 117, 100], max: null },
];
```
