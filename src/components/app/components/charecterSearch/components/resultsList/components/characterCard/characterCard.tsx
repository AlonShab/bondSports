import React, {useState} from "react";
import {CharacterCardProps} from "./characterCardProps";
import {useCharacters} from "../../../../../../../../store/charcters/charactersContext";
import {CharacterModal} from "./components/characterModal/characterModal";
import {CardLayout} from "./styles";

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const {addCharacter, favourites} = useCharacters();
    const [isOpen, setIsOpen] = useState(false);

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    return (
        <CardLayout>
            <CharacterModal isOpen={isOpen} onClose={onClose} character={character} />
            <img
                src={character.imageUrl}
                alt={character.name}
                width="30"
                height="30"
            />
            <h4 onClick={(e) => setIsOpen(true)}>{character.name}</h4>
            {!favourites.find(fav => fav.id === character.id) &&
                <button onClick={e => addCharacter(character)}>Add Favourite</button>}
        </CardLayout>
    );
};