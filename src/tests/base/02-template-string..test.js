import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () =>{

    test('Prueba en el metodo getSaludo |HolaCristian',()=>{

        //Arrange
        const nombre = 'Cristian';
        //Act
        const saludo = getSaludo(nombre);
        
        //Assert
        expect(saludo).toBe('Hola'+nombre);
        
    });

    //getSaludo debe de retornar HolaCristian si no hay argumento en el nombre
    test('Prueba default', ()=>{

        //Act
        const saludo2 = getSaludo();
        
        //Assert
        expect(saludo2).toBe('HolaCristian')       

    })

});