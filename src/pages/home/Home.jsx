import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import ContentCard from '../../component/cards/ContentCard'
import ApiService from '../../service/ApiService'

const Home = () => {

  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [tours, setTours] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const hotelData = await ApiService.getHotels();
          const restaurantData = await ApiService.getRestaurants();
          const tourData = await ApiService.getTours();

          setHotels(hotelData);
          setRestaurants(restaurantData);
          setTours(tourData);

        } catch (error) {
          console.error('Error fetching data', error);

        }
      };
      fetchData();
    }, []
  );
  return (
    <div>
      <NavBar />

      {/* Top Hotels */}
      <div className='m-auto w-9/12'>
        <div className='my-10'>
          <div className='flex items-center justify-between mb-10'>
            <span className='text-4xl font-semibold'>Top Hotels</span>
            <span><a href="/hotel">See all</a></span>
          </div>

          {/* Responsive Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {hotels.slice(0, 8).map((hotel) => (
              <ContentCard
                key={hotel.id}
                id={hotel.id}
                RatingCount={hotel.reviewCount}
                Ratings={hotel.ratings}
                title={hotel.title}
                location_city={hotel.locationCity}
                destination_link="#"
                imgUrl={hotel.imgUrl}
              />
            ))}

          </div>
        </div>
      </div>

      {/* Popular Restaurants */}
      <div className='m-auto w-9/12'>
        <div className='mb-10'>
          <div className='flex items-center justify-between mb-10'>
            <span className='text-4xl font-semibold'>Popular Restaurants</span>
            <span><a href="/restaurant  ">See all</a></span>
          </div>

          {/* Responsive Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {restaurants.slice(0, 8).map((restaurant) => (
              <ContentCard
                key={restaurant.id}
                RatingCount={restaurant.review_count}
                Ratings={restaurant.rating}
                title={restaurant.title}
                location_city={restaurant.location_city}
                destination_link="#"
                imgUrl={restaurant.image_url}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Best Tours */}
      <div className='m-auto w-9/12'>
        <div className='mb-10'>
          <div className='flex items-center justify-between mb-10'>
            <span className='text-4xl font-semibold'>Best Tours</span>
            <span><a href="/tours">See all</a></span>
          </div>

          {/* Responsive Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {tours.slice(0, 8).map((tour) => (
              <ContentCard
                key={tour.id}
                RatingCount={tour.review_count}
                Ratings={tour.rating}
                title={tour.title}
                location_city={tour.location_city}
                destination_link="#"
                imgUrl={tour.image_url}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
