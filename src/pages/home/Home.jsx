import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import ContentCard from '../../component/cards/ContentCard'

const Home = () => {
  return (
    <div>
      <NavBar />

      {/* Top Hotels */}

      <div className='m-20'>
        <div className='mb-10'>
          <div className='flex items-center justify-between mb-10'>
            <span className='text-4xl font-semibold'>Top Hotels</span>
            <span><a href="#">See all</a></span>
          </div>

          <div className='flex justify-between'>
            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />
          </div>
        </div>

      </div>

      {/* Popular Restaurants */}
      <div className='m-20'>
        <div className='mb-10'>
          <div className='flex items-center justify-between mb-10'>
            <span className='text-4xl font-semibold'>Popular Restaurants</span>
            <span><a href="#">See all</a></span>
          </div>

          <div className='flex justify-between'>
            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />
          </div>
        </div>

      </div>


      {/* Best Tours */}
      <div className='m-20'>
        <div className='mb-10'>
          <div className='flex items-center justify-between mb-10'>
            <span className='text-4xl font-semibold'>Best Tours</span>
            <span><a href="#">See all</a></span>
          </div>

          <div className='flex justify-between'>
            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />

            <ContentCard RatingCount={252} price={22} title="Overlooking the Indian Ocean, 
            Shangri-La Hotel offers" location_city="Colombo" destination_link="#" />
          </div>
        </div>

      </div>




      <Footer />
    </div>
  )
}

export default Home