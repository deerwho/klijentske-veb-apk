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
    static console: any;
    static async getMovies( page: number = 0, size: number = 3) {
        return client.get('/movie')
    };
    static async getMovieById(id: number) {
        return client.get(`/movie/${id}`);
        } 
}