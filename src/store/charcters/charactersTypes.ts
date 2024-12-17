import {ReactNode} from "react";
import {Character } from '../../types/character';

export interface FavouriteCharactersState {
    favourites: Character[];
}

export interface FavouriteCharactersContextType {
    favourites: Character[];
    addCharacter: (character: Character) => void;
    deleteCharacter: (id: string) => void;
}

export enum ActionNames {
    ADD_CHARACTER = 'ADD_CHARACTER',
    DELETE_CHARACTER = 'DELETE_CHARACTER',
}

export interface CharactersProviderProps {
 children: ReactNode
}

export type CharacterAction = { type: ActionNames.ADD_CHARACTER; payload: Character } |
    { type: ActionNames.DELETE_CHARACTER; payload: string };