import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import Footer from '../../component/Footer/Footer'
import SearchBar from '../../component/bars/SearchBar'

const Hotel = () => {
  return (
    <>
      <NavBar />
      <div>
        <SearchBar />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi obcaecati nostrum rerum labore, ad sapiente pariatur eligendi numquam! Harum incidunt quo ex temporibus ad voluptate omnis atque? Facilis, dolores.</p>
      </div>
      <Footer />

    </>

  )
}

export default Hotel