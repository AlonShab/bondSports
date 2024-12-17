import React from 'react';
import { FixedSizeList as List } from 'react-window';
import {ResultsListProps} from "./resultsListProps";
import {CharacterCard} from "./components/characterCard/characterCard";
import {RowContainer} from "./styles";

export const ResultsList: React.FC<ResultsListProps> = ({ characters, loadMore, hasMore }) => {
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        const character = characters[index];

        if (index === characters.length - 1 && hasMore) {
            loadMore();
        }

        return (
            <RowContainer style={style}>
                <CharacterCard character={character} />
            </RowContainer>
        );
    };

    return (
        <List
            height={580}
            itemCount={characters.length}
            itemSize={50}
            width="95%"
        >
            {Row}
        </List>
    );
};

