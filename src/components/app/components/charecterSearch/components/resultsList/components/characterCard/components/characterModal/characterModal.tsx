import React from "react";
import ReactDOM from "react-dom";
import {CharacterModalProps} from "./characterModalProps";
import { Modal, Overlay} from "./styles";

export const CharacterModal: React.FC<CharacterModalProps> = ({isOpen, onClose, character }) => {
    if (!isOpen) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    const { name, mass, height, birthYear, numberOfMovieAppearances, HomeWorld} = character;
    const { climate, terrain, population} = HomeWorld;

    return ReactDOM.createPortal(
        <>
            <Overlay />
            <Modal>
                <button onClick={onClose}>X</button>
                <p>
                    Name: {name} <br/>
                    Height: {height} <br/>
                    Mass: {mass} <br/>
                    Birth year: {birthYear} <br/>
                    The number of films the character appears in: {numberOfMovieAppearances} <br/>
                    Homeworld: <br/>
                    name: {HomeWorld.name}, terrain: {terrain}, climate: {climate}, and population: {population}.
                </p>
            </Modal>
        </>,
        modalRoot
    );
}