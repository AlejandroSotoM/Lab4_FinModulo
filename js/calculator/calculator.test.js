const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('Division de 10 entre 2 to equal 5', () =>{
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Division de 100 entre 5 to equal 20', () =>{
  expect(calculator.divide(100, 5)).toBe(20);
});

test('Multiplication de 5 entre 2 to equal 10', () =>{
  expect(calculator.multiply(5, 2)).toBe(10);
});
test('Multiplication de 5 entre 200 to equal 1000', () =>{
  expect(calculator.multiply(5, 200)).toBe(1000);
});

//Division 0

test('Prueba cuando el divisor es 0', () => {
  expect(() => calculator.divide(5, 0)).toThrow(/No se puede dividir por cero/i);
});
