import axios from "axios";

const BASE_URL = 'http://localhost:9090/api';

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
            console.error('Error fetching Tours:', error);
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
    static async updateHotel(id, updatedHotel) {
        try {
            const response = await axios.put(`${BASE_URL}/hotels/updateHotel/${id}`, updatedHotel);
            return response.data;
        } catch (error) {
            console.error('Error updating hotel:', error);
            throw error;
        }
    }

    static async getHotelRoomById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/hotelRooms/getHotelRoomById/${id}`);
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
            const response = await axios.get(`${BASE_URL}/hotelRooms/getAllHotelRoomsByHotelId/${hotelId}`);
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

    static async getHotelByCity(searchTerm) {
        try {
            const response = await axios.get(`${BASE_URL}/hotels/searchHotelsByCity?searchTerm=${searchTerm}`);
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

    static async getFavouritesByUserIdAndItemType(userId, itemType, token) {
        try {
            const response = await axios.get(`${BASE_URL}/favourites?userId=${userId}&itemType=${itemType}`, { headers: { "Authorization": `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            console.error('Error fetching restaurant:', error);
            throw error;
        }
    }

    static async addFavourite(favourite, token) {
        try {
            const response = await axios.post(`${BASE_URL}/favourites/addFavourite`, favourite, { headers: { "Authorization": `Bearer ${token}` } });
            return response;
        } catch (error) {
            console.error('Error saving favourite:', error);
            throw error;
        }
    }

    static async removeFavourite(favourite, token) {
        try {
            const response = await axios.delete(`${BASE_URL}/favourites/removeFavourite?userId=${favourite.userId}&itemId=${favourite.itemId}`, { headers: { "Authorization": `Bearer ${token}` } });
            return response;
        } catch (error) {
            console.error('Error removing favourite:', error);
            throw error;
        }
    }

    static async saveTravelPlan(travelPlan) {
        try {
            const response = await axios.post(`${BASE_URL}/trip-plans/save`, travelPlan);
            return response.data;
        } catch (error) {
            console.error('Error saving travel plan:', error);
            throw error;
        }
    }

    static async getTravelPlansByUserId(userId) {
        try {
            const response = await axios.get(`${BASE_URL}/trip-plans/user/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error saving travel plan:', error);
            throw error;
        }
    }

    static async getTravelPlanById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/trip-plans/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error saving travel plan:', error);
            throw error;
        }
    }

    // Blog Services (added methods)
    static async getAllBlogs() {
        try {
            const response = await axios.get(`${BASE_URL}/blogs/getAllBlog`);
            return response.data;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    }

    static async getBlogById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/blogs/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching blog by ID:', error);
            throw error;
        }
    }

    static async getBlogsByCategory(category) {
        try {
            const response = await axios.get(`${BASE_URL}/blogs/category/${category}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching blogs by category:', error);
            throw error;
        }
    }

    static async getBlogsByKeyword(keyword) {
        try {
            const response = await axios.get(`${BASE_URL}/blogs/search?keyword=${keyword}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching blogs by keyword:', error);
            throw error;
        }
    }

    static async AddReview(review) {
        try {
            const response = await axios.post(`${BASE_URL}/reviews/addReview`, review);
            return response.data;
        } catch (error) {
            console.error("Error Posting review data", error);
            throw error
        }

    }

    static async registerUser(user) {
        try {
            const response = await axios.post(`${BASE_URL}/users/register`, user);
            return response;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }
    static async loginUser(user) {
        try {
            const response = await axios.post(`${BASE_URL}/users/login`, user);
            return response;
        } catch (error) {
            console.error('Error logging in user:', error);
            throw error;
        }
    }
    static logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
    };
    static isAuthenticated() {
        return !!localStorage.getItem('authToken');
    };

    static async getUserById(userId, token) {
        try {
            return axios.get(`${BASE_URL}/users/${userId}`, { headers: { "Authorization": `Bearer ${token}` } });
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

}


export default ApiService;
