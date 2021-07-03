import {getImagen} from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch', () =>{

    test('debe de retornar el url de la imagen', async() =>{
        //Inicializador    
        const url =  await getImagen();
        //Asserts
        expect( typeof url ).toBe('string');
        //Se puede usar includes tambien
        //expect(url.includes('http://')).toBe(true);
    })
})