import React, { useEffect, useRef, useState, useMemo } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import ContentCard from '../../component/cards/ContentCard';
import ApiService from '../../service/ApiService';
import LoadingScreen from '../../component/LoadingScreen';
import SearchBar from '../../component/bars/SearchBar';
import BackgroundImg from '../../assets/images/home_bg.jpg';
import { debounce } from 'lodash';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [searchedHotels, setSearchedHotels] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [searchedTours, setSearchedTours] = useState([]);

  const resultRef = useRef(null);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const [hotelData, restaurantData, tourData] = await Promise.all([
        ApiService.getHotels(),
        ApiService.getRestaurants(),
        ApiService.getTours(),
      ]);
      setHotels(hotelData);
      setRestaurants(restaurantData);
      setTours(tourData);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hotels.length && !restaurants.length && !tours.length) {
      fetchInitialData();
    }
  }, []);

  useEffect(() => {
    const fetchData = debounce(async () => {
      setLoading(true);
      try {
        const [searchedHotelsData, searchedRestaurantsData, searchedToursData] = await Promise.all([
          ApiService.getHotelByCity(searchedText),
          ApiService.getRestaurantByCity(searchedText),
          ApiService.getToursByCity(searchedText),
        ]);
        setSearchedHotels(searchedHotelsData);
        setSearchedRestaurants(searchedRestaurantsData);
        setSearchedTours(searchedToursData);
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }, 500);

    if (searchedText) {
      fetchData();
    }

    return () => fetchData.cancel();
  }, [searchedText]);

  const { displayHotels, displayRestaurants, displayTours } = useMemo(() => ({
    displayHotels: searchedText ? searchedHotels : hotels,
    displayRestaurants: searchedText ? searchedRestaurants : restaurants,
    displayTours: searchedText ? searchedTours : tours,
  }), [searchedText, searchedHotels, searchedRestaurants, searchedTours, hotels, restaurants, tours]);

  return (
    <div>
      <NavBar />
      <SearchBar
        title="Discover Your Next Adventure"
        subtitleLine1="From breathtaking destinations to personalized itineraries, plan every step of your journey effortlessly."
        subtitleLine2="Find experiences that inspire, and let us handle the details for a trip you’ll never forget."
        hintText="Where are you going?"
        setSearchedText={setSearchedText}
        searchBackgroundImg={BackgroundImg}
      />

      <div ref={resultRef}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className='m-auto w-9/12'>
              <div className='my-10'>
                <div className='flex items-center justify-between mb-10'>
                  <span className='text-4xl font-semibold'>
                    {searchedText ? (
                      <p>Top Hotels in <span className='text-xl text-blue-600'>{searchedText}</span></p>
                    ) : (
                      <p>Top Hotels</p>
                    )}
                  </span>
                  <span><a href="/hotel" className='text-lg font-bold'>Show all</a></span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {displayHotels.length > 0 ? (
                    displayHotels.slice(0, 8).map((hotel) => (
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
                    ))
                  ) : (
                    <p>No Hotels found</p>
                  )}
                </div>
              </div>
            </div>

            <div className='m-auto w-9/12'>
              <div className='mb-10'>
                <div className='flex items-center justify-between mb-10'>
                  <span className='text-4xl font-semibold'>
                    {searchedText ? (
                      <p>Popular Restaurants in <span className='text-xl text-blue-600'>{searchedText}</span></p>
                    ) : (
                      <p>Popular Restaurants</p>
                    )}
                  </span>
                  <span><a href="/restaurant" className='text-lg font-bold'>Show all</a></span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {displayRestaurants.length > 0 ? (
                    displayRestaurants.slice(0, 8).map((restaurant) => (
                      <ContentCard
                        key={restaurant.id}
                        RatingCount={restaurant.review_count}
                        Ratings={restaurant.rating}
                        title={restaurant.title}
                        location_city={restaurant.location_city}
                        destination_link={`/restaurant-details/${restaurant.id}`}
                        imgUrl={restaurant.image_url}
                      />
                    ))
                  ) : (
                    <p>No Restaurants found</p>
                  )}
                </div>
              </div>
            </div>

            <div className='m-auto w-9/12'>
              <div className='mb-10'>
                <div className='flex items-center justify-between mb-10'>
                  <span className='text-4xl font-semibold'>
                    {searchedText ? (
                      <p>Best Tours in <span className='text-xl text-blue-600'>{searchedText}</span></p>
                    ) : (
                      <p>Top Tours</p>
                    )}
                  </span>
                  <span><a href="/tours" className='text-lg font-bold'>Show all</a></span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {displayTours.length > 0 ? (
                    displayTours.slice(0, 8).map((tour) => (
                      <ContentCard
                        key={tour.id}
                        RatingCount={tour.review_count}
                        Ratings={tour.rating}
                        title={tour.title}
                        location_city={tour.location_city}
                        destination_link={`/tour-details/${tour.id}`}
                        imgUrl={tour.image_url}
                      />
                    ))
                  ) : (
                    <p>No Tours found</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
