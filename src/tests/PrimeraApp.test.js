//import {render} from '@testing-library/react';
import React from 'react';
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
/*Esta seria sin usar enzyme    
test('debe de mostrar el mensaje "Hola, soy Cristian" ', () => { 
const saludo = "Hola, Soy Cristian";
//Aca renderizare el componente
const {getByText} = render(<PrimeraApp saludo={saludo}/>);
expect(getByText(saludo)).toBeInTheDocument();
})
*/

  test("Debe de mostrar <PrimeraApp /> Correctamente", () => {
    const saludo = "Hola, Soy Cristian";
    //shallow es parecido al render pero con otras propiedades
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    //Ahora el Assert
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () =>{
    //Arrange
    const saludo = "Hola, Soy Cristian";
    const subtitulo = "Soy un subtitulo";
    //Act
    const wrapper = shallow(  
      <PrimeraApp 
        saludo={saludo}
        subtitulo={subtitulo}
      />
    );
    //Asserts
    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  })
});
