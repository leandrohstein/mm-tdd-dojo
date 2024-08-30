# Ano bissexto

Chama-se **ano bissexto** o ano ao qual é acrescentado um dia extra, ficando com 366 dias, um dia a mais do que os anos normais de 365 dias. Isto é feito com o objetivo de manter o calendário anual ajustado com a translação da Terra e com os eventos sazonais relacionados às estações do ano. O ano presente (2024) é bissexto. O último ano bissexto foi 2020 e o próximo será 2028.

## Regras do calendário

Em 1582 definiu-se a nova regra para o cálculo dos anos bissextos, criando o Calendário Gregoriano:

1. De 4 em 4 anos é ano bissexto.
2. De 100 em 100 anos não é ano bissexto.
3. De 400 em 400 anos é ano bissexto.
4. Prevalecem as últimas regras sobre as primeiras.

## Massa de dados para validação

Abaixo uma lista de inputs e outputs com 20 anos, sendo 10 anos bissextos e 10 anos não bissextos:

```
export const inputOutput = {
  1800: false,
  1822: false,
  1836: true,
  1842: false,
  1874: false,
  1880: true,
  1881: false,
  1900: false,
  1916: true,
  1932: true,
  1940: true,
  1952: true,
  1965: false,
  1972: true,
  1981: false,
  1987: false,
  2000: true,
  2011: false,
  2020: true,
  2024: true,
};
```
