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
          <ListingCard />
          <ListingCard />
        </div>

      </div>
      <Footer />

    </>

  )
}

export default Hotel