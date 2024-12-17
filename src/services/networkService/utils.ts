import {PeopleResponse, PlanetResponse} from "./networkTypes";
import {Character, HomeWorld} from "../../types/character";

export const getIdFromUrl = (url: string) => {
    const splittedUrl = url.split('/');
    return splittedUrl[splittedUrl.length - 2];
};

export const convertPlanetToWorld = (planet: PlanetResponse): HomeWorld => {
    return {
        id: getIdFromUrl(planet.url),
        name: planet.name,
        climate: planet.climate,
        population: planet.population,
        terrain: planet.terrain
    }
}

export const convertResponseToCharacter =
    (person: PeopleResponse, homeWorld: HomeWorld): Character => {
        return {
            name: person.name,
            id: getIdFromUrl(person.url),
            imageUrl: `https://picsum.photos/seed/${person.name.split(" ")[0]}/300/300`,
            height: person.height,
            mass: person.mass,
            birthYear: person.birth_year,
            numberOfMovieAppearances: String(person.films.length),
            HomeWorld: homeWorld
        }
    }
