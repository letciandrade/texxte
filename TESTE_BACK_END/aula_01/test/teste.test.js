const { somaNumeros } = require('../index');

test('A funcao deve somar dois numeros', ()=>{
  const esperado = 1000;
  const retornado = somaNumeros(800, 200);

  expect(retornado).toBe(esperado);
})

const { subtraiNumero } = require('../index');

test('A funcao deve subtrair dois numeros', ()=>{
  const esperado =  600;
  const retornado = subtraiNumero(800, 200);

  expect(retornado).toBe(esperado);
})