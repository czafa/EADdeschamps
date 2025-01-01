//a função test() precisa de 2 argumentos, o primeiro é uma descrição do teste e o segundo é uma função que contém o código do teste em si.
test("espero que 1 seja 1", () => {
  expect(1).toBe(1); //expect() é uma função do `jest` que recebe um valor e retorna um objeto que contém funções que permitem testar esse valor.
  //.toBe() é uma função que compara o valor passado com o valor esperado. Ao juntar expect(1) com .toBe(1), estamos encadeando funções.
});
