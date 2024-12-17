import React, { Component } from 'react';
import { ErrorBoundaryState, ErrorBoundaryProps} from './errorBoundryProps';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please reload the app.</h1>;
        }
        return this.props.children;
    }
};