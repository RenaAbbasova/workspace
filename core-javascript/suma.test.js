/* const {suma} = require('./suma');
test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);  // Cambia toBeEqual a toBe
});


// toBe is one tipe of match

test('object assignment', () => {
    const data = {one: 1 };
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
});


test('null is falsy', () => {
    const n = null;

    expect(n).toBeFalsy()
});

test('zero is falsy', () => {
    const n = 0;

    expect(n).toBeFalsy()
});

test('one is truthy', () => {
    const n = 1;

    expect(n).toBeTruthy();
});

// My function

const myFunction = require('./suma') // suma is the file name where is the function
test('throw on invalid input', () => {
    expect(() => {
        myFunction('invalidInput');
    }).toThrow();
});


const {fetchdata}= require('./suma')

test('data is peanut butter', done => {
    function callback(data) {
        try{
            expect(data).toBe('peanut butter');
            done(); 
        } catch(error) {
            done (error);
        }
    }
    fetchdata(callback);
});

/* const {fetchpromise}= require('./suma')
 test('the data is peanut butter', () => {
    return expect(fetchpromise()).resolves.toBe('peanut butter');
 });

 test('the fetch fails with an error', () => {
    return expect(fetchpromise()).rejects.toThrow('error');
 });
 */

 /* const {fetchpromise} = require('./suma') */
/* 
 test('the data is peanut butter', async () => {
    const data = await fetchpromise();
    expect(data).toBe('peanut butter');
 }); */


 // mock  functon


 /* test ('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 +x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1)
 })
 

 test ('slying on a method of an objetc', () => {
    const video = {
        play() {
            return true;
        },
    };
    const spy = jest.spyOn(video, 'play');
    video.play()
    expect(spy).toHaveBeenCalledWith();
    spy.mockRestore();
 })


toBeNull coincide solo con null
toBeUndefined coincide solo con undefined
toBeDefinedes el opuesto a toBeUndefined
toBeTruthy coincide con lo que sea que el condicional if devuelva como verdadero
toBeFalsy coincide con lo que sea que el condicional if devuelva como falso
test('dos mas dos', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe y toEqual son equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('agregando números de punto flotante', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo
  expect(value).toBeCloseTo(0.3); // Esto funciona.
});

test('no hay I en Team', () => {
  expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const listaDeCompras = [
  'pañales',
  'pañuelos',
  'bolsas de basura',
  'toallas de papel',
  'leche',
];

test('la leche se encuentra en la lista de compras', () => {
  expect(listaDeCompras).toContain('leche');
  expect(new Set(listaDeCompras)).toContain('leche');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
}); */ 