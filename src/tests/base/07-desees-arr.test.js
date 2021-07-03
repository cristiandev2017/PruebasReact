import { retornaArreglo } from "../../base/07-deses-arr";

describe('Prueba en desestructuracion', () =>{
    test('Debe de retornar un string y un numero', () =>{
        //Destructuracion de arreglos
        const [letras, numeros] = retornaArreglo();//['ABC',123]

        //con letras
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        //Con numeros
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})