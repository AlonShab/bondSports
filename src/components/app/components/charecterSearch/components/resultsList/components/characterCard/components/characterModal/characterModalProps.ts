import React, {ReactNode} from "react";
import {Character} from "../../../../../../../../../../types/character";

export interface CharacterModalProps{
    isOpen: boolean;
    onClose: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    character: Character;
};