import NetworkService from './networkService';

const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';

export const networkServiceInstance = (() => {
    let instance: NetworkService | null = null;

    const createInstance = () => {
        return new NetworkService(SWAPI_BASE_URL);
    };

    return {
        getInstance: (): NetworkService => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();


