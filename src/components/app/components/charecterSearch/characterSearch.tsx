import React, {useState, useEffect, useRef} from 'react';
import {useDebounce} from '../../../../hooks/useDebounce';
import {networkServiceInstance} from '../../../../services/networkService/networkServiceInstance'
import {convertPlanetToWorld, convertResponseToCharacter, getIdFromUrl} from '../../../../services/networkService/utils'
import {Character, HomeWorld} from "../../../../types/character";
import {PaginatedResponse, PeopleResponse} from "../../../../services/networkService/networkTypes";
import {ResultsList} from "./components/resultsList/resultsList";
import {Layout} from "./styles";


const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const planets = useRef<Map<string, HomeWorld>>(new Map<string, HomeWorld>());
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState(true);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const updatePlanets = async (newCharacters: PaginatedResponse<PeopleResponse>) => {
        const newCharactersHomeWorldUrls = newCharacters.results.map(character =>
            getIdFromUrl(character.homeworld));
        const newCharactersHomeWorldUrlsDistinct = Array.from(new Set(newCharactersHomeWorldUrls));

        const homeWorldsNeededToBeFetched = newCharactersHomeWorldUrlsDistinct.filter(id =>
            !planets.current.has(id)
        );

        await Promise.all(
            homeWorldsNeededToBeFetched.map(async (id: string) => {
                try {
                    const newPlanet = await networkServiceInstance.getInstance().fetchPlanet(id);
                    planets.current.set(id, convertPlanetToWorld(newPlanet));
                } catch (error) {
                    console.error(error);
                }
            })
        );
    };

    const fetchCharacters = async (reset = false) => {
        if (loading) return;

        try {
            setLoading(true);
            const newCharacters = await networkServiceInstance
                .getInstance()
                .fetchCharacters(debouncedSearchTerm, page);

            await updatePlanets(newCharacters);

            const charactersToAdd = newCharacters.results.map(person => {
                const homeWorld = planets.current.get(getIdFromUrl(person.homeworld)) as HomeWorld;
                return convertResponseToCharacter(person, homeWorld);
            });

            setCharacters((prev) => {
                const combinedCharacters = reset
                    ? charactersToAdd
                    : [...prev, ...charactersToAdd];

                const uniqueCharacters = Array.from(
                    new Map(combinedCharacters.map((char) => [char.id, char])).values()
                );

                return uniqueCharacters;
            });

            setHasMore(!!newCharacters.next);
        } catch (error) {
            console.error('Error fetching characters', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setPage(1);
        fetchCharacters(true);
    }, [debouncedSearchTerm]);

    const loadMore = () => {
        if (!loading) {
            setPage((prevPage) => prevPage + 1);
            fetchCharacters();
        }
    };

    return (
        <Layout>
            <input
                type="text"
                placeholder="Search for a character..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    padding: '10px',
                    width: '80%',
                    marginBottom: '20px',
                    fontSize: '1rem',
                }}
            />
            <ResultsList characters={characters} loadMore={loadMore} hasMore={hasMore} />
            {loading && <p>Loading...</p>}
        </Layout>
    );
};

export default App;
