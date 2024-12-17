import {useCharacters} from "../../../../store/charcters/charactersContext";
import {Container} from "./styles";

export const FavouriteList = ({}) => {
    const {favourites, deleteCharacter} = useCharacters();

    return (
        <Container>
            <ul>
                {favourites.map(favourite =>
                    <li key={favourite.id}>
                        <div>
                            <span>{favourite.name}</span>&nbsp;
                            <button onClick={e => deleteCharacter(favourite.id)}>remove</button>
                        </div>
                    </li>)}
            </ul>
        </Container>
    );
};