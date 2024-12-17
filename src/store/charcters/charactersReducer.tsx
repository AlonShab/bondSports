import {ActionNames, CharacterAction, FavouriteCharactersState} from './charactersTypes';

export const charactersReducer = (
    state: FavouriteCharactersState,
    action: CharacterAction
): FavouriteCharactersState => {
    switch (action.type) {
        case ActionNames.ADD_CHARACTER:
            return { favourites: [...state.favourites, action.payload] };
        case ActionNames.DELETE_CHARACTER:
            return {
                favourites: state.favourites.filter((character) => character.id !== action.payload)
            };
        default:
            return state;
    }
};
