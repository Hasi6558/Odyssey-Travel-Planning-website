import React, { useEffect, useState } from 'react';
import ContentCard from '../../component/cards/ContentCard';
import ApiService from '../../service/ApiService';

const FavouriteItems = ({ indexParameter }) => {
    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    // State to control the visible count of each category
    const [visibleHotels, setVisibleHotels] = useState(4);
    const [visibleRestaurants, setVisibleRestaurants] = useState(4);
    const [visibleTours, setVisibleTours] = useState(4);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const favouriteHotelsData = await ApiService.getFavouritesByUserIdAndItemType("user02", "hotel");
                const favouriteRestaurantsData = await ApiService.getFavouritesByUserIdAndItemType("user06", "restaurant");
                const favouriteToursData = await ApiService.getFavouritesByUserIdAndItemType("user07", "tour");

                const hotelIds = favouriteHotelsData.map(item => item.itemId);
                const restaurantIds = favouriteRestaurantsData.map(item => item.itemId);
                const tourIds = favouriteToursData.map(item => item.itemId);

                const hotelPromises = hotelIds.map(id => ApiService.getHotelById(id));
                const restaurantPromises = restaurantIds.map(id => ApiService.getRestaurantById(id));
                const tourPromises = tourIds.map(id => ApiService.getTourById(id));

                const fetchedHotels = await Promise.all(hotelPromises);
                const fetchedRestaurants = await Promise.all(restaurantPromises);
                const fetchedTours = await Promise.all(tourPromises);

                setHotels(fetchedHotels);
                setRestaurants(fetchedRestaurants);
                setTours(fetchedTours);
            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [indexParameter]);

    return (
        <div>
            <div className='text-2xl mb-4'>Favourites</div>

            {/* Hotels Section */}
            <div className='text-lg my-2'>Hotels</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {hotels.slice(0, visibleHotels).map((hotel) => (
                    <ContentCard
                        key={hotel.id}
                        id={hotel.id}
                        RatingCount={hotel.reviewCount}
                        Ratings={hotel.ratings}
                        title={hotel.title}
                        location_city={hotel.locationCity}
                        imgUrl={hotel.imgUrl}
                        destination_link={`/hotel-details/${hotel.id}`}
                    />
                ))}
            </div>
            {hotels.length > visibleHotels && (
                <button
                    className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={() => setVisibleHotels(visibleHotels + 4)}
                >
                    Load More Hotels
                </button>
            )}

            {/* Restaurants Section */}
            <div className='text-lg my-2'>Restaurants</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {restaurants.slice(0, visibleRestaurants).map((restaurant) => (
                    <ContentCard
                        key={restaurant.id}
                        RatingCount={restaurant.review_count}
                        Ratings={restaurant.rating}
                        title={restaurant.title}
                        location_city={restaurant.location_city}
                        destination_link={`/restaurant-details/${restaurant.id}`}
                        imgUrl={restaurant.image_url}
                    />
                ))}
            </div>
            {restaurants.length > visibleRestaurants && (
                <button
                    className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={() => setVisibleRestaurants(visibleRestaurants + 4)}
                >
                    Load More Restaurants
                </button>
            )}

            {/* Tours Section */}
            <div className='text-lg my-2'>Tours</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {tours.slice(0, visibleTours).map((tour) => (
                    <ContentCard
                        key={tour.id}
                        RatingCount={tour.review_count}
                        Ratings={tour.rating}
                        title={tour.title}
                        location_city={tour.location_city}
                        destination_link={`/tour-details/${tour.id}`}
                        imgUrl={tour.image_url}
                    />
                ))}
            </div>
            {tours.length > visibleTours && (
                <button
                    className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={() => setVisibleTours(visibleTours + 4)}
                >
                    Load More Tours
                </button>
            )}
        </div>
    );
};

export default FavouriteItems;
