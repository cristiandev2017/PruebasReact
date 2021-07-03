//Esto me servira para agrupar las pruebas
describe("Pruebas en el archivo demo.test.js", () => {
  test("esta es mi primera prueba | deben haber 2 string iguales", () => {
    //1. Arrange(Inicialización)
    const mensaje = "Hola Mundo";

    //2. Act(Estimulo)
    const mensaje2 = `Hola Mundo`;

    //3. Assert(Observar el comportamiento)
    expect(mensaje).toBe(mensaje2);
  });
});
