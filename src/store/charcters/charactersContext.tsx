import {createContext, useReducer, useContext} from 'react';
import {ActionNames, CharactersProviderProps, FavouriteCharactersContextType} from './charactersTypes';
import {Character} from '../../types/character';
import {charactersReducer} from "./charactersReducer";

const CharactersContext = createContext<FavouriteCharactersContextType | null>(null);

const DEFAULT_STATE = {
    favourites: [],
};

export const useCharacters = () => {
    const context = useContext(CharactersContext);

    if (!context) {
        throw new Error('useCharacters must be used within a CharactersProvider');
    }

    return context;
};

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
    const [state, dispatch] = useReducer(charactersReducer, DEFAULT_STATE);

    const addCharacter = (character: Character) => {
        dispatch({ type: ActionNames.ADD_CHARACTER, payload: character });
    };

    const deleteCharacter = (id: string) => {
        dispatch({ type: ActionNames.DELETE_CHARACTER, payload: id });
    };

    return (
        <CharactersContext.Provider
            value={{
                favourites: state.favourites,
                addCharacter,
                deleteCharacter
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};