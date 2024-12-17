import React from 'react';
import {AppView, Background, MainContent} from './styles';
import CharacterSearch from "./components/charecterSearch/characterSearch";
import {FavouriteList} from './components/favouriteList/favouriteList';

export const App: React.FC = () => {
    return (
        <Background>
            <AppView>
                <h1 className="title">STAR WARS CHARACTER EXPLORER</h1>
                <MainContent>
                    <CharacterSearch />
                    <FavouriteList></FavouriteList>
                </MainContent>
            </AppView>
        </Background>

    );
}

