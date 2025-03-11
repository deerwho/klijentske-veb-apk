import axios from 'axios';
const client = axios.create({
    baseURL: 'https://movie.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025',
    },
    validateStatus: (status: number) => {
        return status >= 200 && status < 300; // Dozvoli sve validne HTTP odgovore
    }
});
export class MovieService {
    static async getMovies(page?: number, size?: number) {
        try{
            const response = await client.get('/movie', {
                params: {
                    page: 'page', 
                    size: 'size'
                }
            });
            console.log('API Response:', response);
            if (!response.data) {
            throw new Error('No data received from API');
        }
        return response.data.data;
        }
        catch (error) {
            console.error('Error fetching movies:', error);
            throw new Error('Failed to fetch movies');
        }
    }
    static async getMovieById(id: number) {
        try {
            const response = await client.get(`/movie/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movie by ID:', error);
            throw new Error('Failed to fetch movie by ID');
        }
    }
}