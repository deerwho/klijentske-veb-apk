import axios from 'axios';

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025',
    },
    validateStatus: (status: number) => {
        return status === 200 // Resolve only if the status code is 200
    }
});

export class FlightService {
    static async getFlight(page: number = 0, size: number = 10) {
        return client.request({
            url: '/flight',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'id,desc',
            }
        })
    }

    static async getFlightById(id: number) {
        try {
            const response = await client.get(`/flight/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching flight by ID:', error);
            throw new Error('Failed to fetch flight by ID');
        }
    }
}