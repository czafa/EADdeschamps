const calculadora = require("../../models/calculadora.js");

test("somar 2+2 deveria ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 100+5 deveria ser 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria ser 'erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("erro");
});
