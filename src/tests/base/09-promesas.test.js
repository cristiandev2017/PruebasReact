import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  //al ponerle el done ya funcionan los asyncronos
  test("debe de retornar un heroe async ", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  //Ahora si no lo encuentra
  test("Debe de obtener un error si el heroe por id no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
    });
  });
});
