export interface HomeWorld {
    name: string;
    terrain: string;
    climate: string;
    population: string;
    id: string;
}

export interface Character {
    name: string;
    id: string;
    imageUrl: string;
    height: string;
    mass: string;
    birthYear: string;
    numberOfMovieAppearances: string;
    HomeWorld: HomeWorld;
}