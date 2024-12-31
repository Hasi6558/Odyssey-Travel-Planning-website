import axios from "axios";

const BASE_URL = 'http://localhost:9090/api'


class ApiService {
    static async getHotels() {
        try {
            const response = await axios.get(`${BASE_URL}/hotels/getAllHotels`);
            return response.data;

        } catch (error) {
            console.error('Error fetching hotels:', error);
            throw error;
        }

    }
    static async getRestaurants() {
        try {
            const response = await axios.get(`${BASE_URL}/restaurant/getAllRestaurant`);
            return response.data;

        } catch (error) {
            console.error('Error fetching hotels:', error);
            throw error;
        }

    }

    static async getTours() {
        try {
            const response = await axios.get(`${BASE_URL}/tours/getAllTours`);
            return response.data;

        } catch (error) {
            console.error('Error fetching hotels:', error);
            throw error;
        }

    }
}

export default ApiService;