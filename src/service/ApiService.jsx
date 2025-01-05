import axios, { Axios } from "axios";

const BASE_URL = 'https://odyssey-travel-planning-site-bac-production.up.railway.app/api'

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

    static async getTourById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/tours/getTourById/${id}`);
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

            const response = await axios.get(`${BASE_URL}/reviews/getReviewByReviewdId/${reviewdItemId}`);
            return response.data;

        } catch (error) {
            console.error('Error fetching Reviews', error);
            throw error;
        }
    }
    static async gethotelByCity(searchTerm) {
        try {

            const response = await axios.get(`${BASE_URL}/hotels/searchHotelsByCity?searchTerm=${searchTerm}`)
            return response.data;

        } catch (error) {
            console.error('Error fetching hotels data', error);
        }
    }
    static async getRestaurantById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/restaurant/getRestaurantById/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching hotel by ID:', error);
            throw error;
        }
    }
    static async getRestaurantByCity(searchTerm) {
        try {
            const response = await axios.get(`${BASE_URL}/restaurant/searchRestaurantsByCity?searchTerm=${searchTerm}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching restaurant:', error);
            throw error;
        }
    }

    static async getToursByCity(searchTerm) {
        try {
            const response = await axios.get(`${BASE_URL}/tours/searchToursByCity?searchTerm=${searchTerm}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching restaurant:', error);
            throw error;
        }
    }


}

export default ApiService;