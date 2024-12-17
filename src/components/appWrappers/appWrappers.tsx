import React from 'react';
import { AppWrapperProps } from './appWrappersProps';
import {ThemeProvider} from 'styled-components';
import {ErrorBoundary} from './components/errorBoundry/errorBoundry';
import {CharactersProvider} from '../../store/charcters/charactersContext';
import {theme} from "../../theme/theme";

export const AppWrappers = ({children}: AppWrapperProps) => {
    return (
        <ErrorBoundary>
            <CharactersProvider>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CharactersProvider>
        </ErrorBoundary>

    );
};
