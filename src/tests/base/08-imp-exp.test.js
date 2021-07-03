import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
  //Caso feliz si existe el dato
  test("debe de retornar un heroe por id", () => {
    //Arrange
    const id = 1;
    const heroe = getHeroeById(id);
    //Act
    const heroeData = heroes.find((heroe) => heroe.id === id);
    //Assert
    expect(heroe).toEqual(heroeData);
  });

  //Caso triste si no existe
  test("debe de retornar undefined si no existe heroe", () => {
    //Arrange
    const id = 10;
    const heroe = getHeroeById(id);
    //Act
    const heroeData = heroes.find((heroe) => heroe.id === id);
    //Assert
    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  
    });
});
