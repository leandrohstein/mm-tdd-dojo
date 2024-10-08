import { expect, test } from "vitest";
import { isBissexto, verifyRestDivisorIsFour } from "./anoBissexto";

const inputOutput = {
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

test('valida funcão isBissexto', () => {
    expect(isBissexto).toBeTypeOf('function');
})


test('valida se funcão verifyRestDivisorIsFour é uma funcao', () => {
    expect(verifyRestDivisorIsFour).toBeTypeOf('function');
})
test('valida se funcão verifyRestDivisorIsFour retorna boolean', () => {
    expect(verifyRestDivisorIsFour(20)).toBeTypeOf("boolean");
})

test('verifica se o restante da divisao de 4 é zero', () => {
    const input = 20;
    expect(verifyRestDivisorIsFour(input)).toBe(true);
})

test('verifica se o restante da divisao por 4 nao é zero', () => {
    const input = 19;
    expect(verifyRestDivisorIsFour(input)).toBe(false);
})

test('verifica se o input da funcao verifyRestDivisorIsFour é inteiro', () => {
    const input = '19';
    expect(verifyRestDivisorIsFour(input)).toBe(false);
})


test('verifica se o input da funcao verifyRestDivisorOfFourHundred é inteiro', () => {
    const input = '19';
    expect(verifyRestDivisorIsFour(input)).toBe(false);
})





