import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import SearchBar from '../../component/bars/SearchBar'
import ListingCard from '../../component/cards/ListingCard'

const Hotel = () => {
  return (
    <>
      <NavBar />
      <div>
        <SearchBar title="Find Your Perfect Stay" subtitleLine1="Explore a world of comfort and luxury." subtitleLine2="From cozy retreats to grand escapes, discover the ideal destination for your next adventure." hintText="Where are you going?" />
        <div className='mx-40 flex justify-center'>
          <h1 className='font-bold text-2xl my-4 '>Explore hotels</h1>
        </div>
        <div className=' mx-20 flex flex-col items-center'>
          <ListingCard title="Araliya Red - Lean Luxury - Where you
          find stunning 360 panoramic view of
                    Nuwara Eliya" location_city="Nuwara Eliya" location_map_url="#" rating="4.5" review_count="366" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi hic vel ratione? Ullam porro, dolorum maiores quo voluptatum quidem officia quisquam a recusandae quaerat quam veniam eius" imgUrl="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" />

          <ListingCard />
        </div>

      </div>
      <Footer />

    </>

  )
}

export default Hotel