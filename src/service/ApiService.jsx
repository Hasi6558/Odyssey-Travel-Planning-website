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

    static async getHotelById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/hotels/getHotelById/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching hotel by ID:', error);
            throw error;
        }
    }

    static async getRoomsByHotelId(hotelId) {
        try {
            const response = await axios.get(`${BASE_URL}/hotelRooms/getAllHotelRoomsByHotelId/${hotelId}`)
            return response.data;
        } catch (error) {
            console.error('Error fetching hotelRooms', error);
            throw error;
        }
    }
    static async getReviewsByReviewdItemId(reviewdItemId) {
        try {
            const response = await axios.get(`${BASE_URL}/reviews/getReviewsByItemId/${reviewdItemId}`)
            return response.data;

        } catch (error) {
            console.error('Error fetching Reviews', error);
            throw error;
        }
    }

}

export default ApiService;