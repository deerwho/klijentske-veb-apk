import axios from "axios";


export class FlightService {
    static async getFlights() {
        return axios.get('https://flight.pequla.com/api/flights')
    }
}