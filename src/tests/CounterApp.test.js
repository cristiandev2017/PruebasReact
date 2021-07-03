import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import React from "react";

describe("Pruebas en el <CounterApp />", () => {
  //Esto para no perder el autocompletado aunque a mi no me funcione :(
  let wrapper = shallow(<CounterApp />);

  //Controlar el ciclo de vida de las pruebas
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
});

  test("Debe de mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();
    //console.log(`xxxx${counterText}xxxxx`)

    //Assert
    expect(counterText).toBe("100");
  });

  test("Debe de incremenetar con el boton +1", () => {
    //Simularemos el clic
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("Debe de decrementar con el boton -1", () => {
    //Simularemos el clic
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });

  test("Debe colocar el valor por defecto con el btn reset", () => {
    
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe('105');

  });
});
