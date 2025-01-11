import React, { useEffect, useState } from 'react';
import ContentCard from '../../component/cards/ContentCard';
import ApiService from '../../service/ApiService';

const FavouriteItems = ({ indexParameter }) => {
    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    const [visibleHotels, setVisibleHotels] = useState(4);
    const [visibleRestaurants, setVisibleRestaurants] = useState(4);
    const [visibleTours, setVisibleTours] = useState(4);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                // Fetch favorite item IDs
                const favouriteHotelIds = await ApiService.getFavouritesByUserIdAndItemType("user02", "hotel");
                const favouriteRestaurantIds = await ApiService.getFavouritesByUserIdAndItemType("user06", "restaurant");
                const favouriteTourIds = await ApiService.getFavouritesByUserIdAndItemType("user07", "tour");

                // Fetch full details for each favorite item using their IDs
                const favouriteHotels = await Promise.all(
                    favouriteHotelIds.map((id) => ApiService.getHotelById(id))
                );
                const favouriteRestaurants = await Promise.all(
                    favouriteRestaurantIds.map((id) => ApiService.getRestaurantById(id))
                );
                const favouriteTours = await Promise.all(
                    favouriteTourIds.map((id) => ApiService.getTourById(id))
                );

                // Set the fetched data to state
                setHotels(favouriteHotels);
                setRestaurants(favouriteRestaurants);
                setTours(favouriteTours);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Loading Spinner */}
            {loading && <div className='text-center text-lg my-4'>Loading...</div>}

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
                        id={restaurant.id}
                        RatingCount={restaurant.reviewCount}
                        Ratings={restaurant.ratings}
                        title={restaurant.title}
                        location_city={restaurant.locationCity}
                        imgUrl={restaurant.imgUrl}
                        destination_link={`/restaurant-details/${restaurant.id}`}
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
                        id={tour.id}
                        RatingCount={tour.reviewCount}
                        Ratings={tour.ratings}
                        title={tour.title}
                        location_city={tour.locationCity}
                        imgUrl={tour.imgUrl}
                        destination_link={`/tour-details/${tour.id}`}
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