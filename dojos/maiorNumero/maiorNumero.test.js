import { expect, test } from "vitest";
import { maiorNumero } from "./maiorNumero";

const mock = [10, 30, 20, 5];

const inputOutput = [
  { list: [10, 30, 20, 5], max: 30 },
  { list: [99, 100, 55, 1, 2, 9], max: 100 },
  { list: [1, 1, 1, 1, 1, 1, 1], max: 1 },
  { list: [-1000, 2, 0, 4, 78, 25, 35], max: null },
  {
    list: [
      27, 20, 73, 69, 86, 53, 29, 50, 25, 28, 74, 22, 93, 84, 57, 13, 65, 36,
      95, 17, 30, 98, 7, 68,
    ],
    max: 98,
  },
  { list: [], max: null },
  {
    list: [94, 114, 101, 108, 96, 105, 102, 111, 113, 95, 103, 117, 100],
    max: null,
  },
];

test("teste se a função é executável", () => {
  expect(maiorNumero).toBeTypeOf("function");
});

test("se há somente números inteiros", () => {
  const mock1 = [...mock, 1.3];
  const mock2 = [...mock, {}, "", [], () => {}, null, undefined];

  expect(maiorNumero(mock1)).toBe(null);
  expect(maiorNumero(mock2)).toBe(null);
});

test("se os números são entre 1 e 100", () => {
  const mock1 = [...mock, -2];
  const mock2 = [...mock, 200];

  expect(maiorNumero(mock1)).toBe(null);
  expect(maiorNumero(mock2)).toBe(null);
  expect(maiorNumero(mock)).not.toBe(null);
});

test("se há lista tem no máximo 100 números", () => {
  const mock1 = new Array(150);
  const mock2 = [];

  expect(maiorNumero(mock1)).toBe(null);
  expect(maiorNumero(mock2)).toBe(null);
  expect(maiorNumero(mock)).not.toBe(null);
});

test("deve retornar o maior número da lista", () => {
  expect(maiorNumero(mock)).toBe(30);
});

test.each(inputOutput)(
  "deve retornar os números maiores %s",
  ({ list, max }) => {
    expect(maiorNumero(list)).toBe(max);
  }
);
