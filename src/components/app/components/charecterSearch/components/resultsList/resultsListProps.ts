import { Character } from '../../../../../../types/character';

export interface ResultsListProps {
    characters: Character[];
    loadMore: () => void;
    hasMore: boolean;
}