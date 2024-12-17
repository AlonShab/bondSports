import {PaginatedResponse, PeopleResponse, PlanetResponse} from './networkTypes';

class NetworkService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch url: ${url} ${response.statusText}`);
            }

            const data: T = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async fetchCharacters(searchTerm: string, page: number = 1): Promise<PaginatedResponse<PeopleResponse>> {
        const url = `${this.baseUrl}/people/?search=${encodeURIComponent(searchTerm)}&page=${page}`;
        return this.request<PaginatedResponse<PeopleResponse>>(url);
    }

    async fetchPlanet(id: string): Promise<PlanetResponse> {
        const url = `${this.baseUrl}/planets/${id}`;
        return this.request<PlanetResponse>(url);
    }
}

export default NetworkService;

