import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import SearchBar from '../../component/bars/SearchBar'

const Hotel = () => {
  return (
    <>
      <NavBar />
      <div>
        <SearchBar title="Find Your Perfect Stay" subtitleLine1="Explore a world of comfort and luxury." subtitleLine2="From cozy retreats to grand escapes, discover the ideal destination for your next adventure." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi obcaecati nostrum rerum labore, ad sapiente pariatur eligendi numquam! Harum incidunt quo ex temporibus ad voluptate omnis atque? Facilis, dolores.</p>
      </div>
      <Footer />

    </>

  )
}

export default Hotel