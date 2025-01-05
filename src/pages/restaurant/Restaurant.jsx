import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import SearchBar from '../../component/bars/SearchBar';
import ListingCard from '../../component/cards/ListingCard';
import ApiService from '../../service/ApiService';
import BackgroundImage from '../../assets/images/restaurant_bg.jpg'
const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const resultsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const restaurantsData = await ApiService.getRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (searchedText) {
        setLoading(true);
        try {
          const searchedRestaurantsData = await ApiService.getRestaurantByCity(searchedText);
          setSearchedRestaurants(searchedRestaurantsData);

          if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (error) {
          console.error('Error fetching data', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [searchedText]);

  const displayRestaurants = searchedText ? searchedRestaurants : restaurants;

  return (
    <>
      <NavBar />
      <div>
        <SearchBar
          title="Discover Your Ideal Dining Experience"
          subtitleLine1="From delightful cafes to exquisite fine dining,"
          subtitleLine2="find the perfect spot for your next meal."
          hintText="Where are you dining?"
          setSearchedText={setSearchedText}
          searchBackgroundImg={BackgroundImage}
        />

        <div className="mx-40 flex justify-center">
          <h1 className="font-bold text-2xl my-4">Explore Restaurants</h1>
        </div>

        <div ref={resultsRef}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {searchedText ? (<div className='max-w-[800px] m-auto my-4 font-semibold text-lg'> Nearby Restaurants in : {searchedText}</div>) : ("")}
              <div className="mx-20 flex flex-col items-center">
                {displayRestaurants.length > 0 ? (
                  displayRestaurants.map((restaurant) => (
                    <ListingCard
                      key={restaurant.id}
                      title={restaurant.title}
                      location_city={restaurant.location_city}
                      location_map_url={restaurant.location_map}
                      rating={restaurant.rating}
                      review_count={restaurant.review_count}
                      description={restaurant.description}
                      imgUrl={restaurant.image_url?.[0]}
                      destination_link={`restaurant-details/${restaurant.id}`}
                    />
                  ))
                ) : (
                  <p className="font-bold text-2xl text-gray-500 h-screen">No Restaurants found!</p>
                )}
              </div>
            </>

          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
