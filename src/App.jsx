import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Restaurant from './pages/restaurant/Restaurant'
import Hotel from './pages/hotel/Hotel'
import Tours from './pages/tours/Tours'
import TripPlanner from './pages/tripPlanner/TripPlanner'
import Blog from './pages/blog/Blog'
import Home from './pages/home/Home'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signUp/SignUp'
import HotelDetails from './pages/hotelDetails/HotelDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />} ></Route>
          <Route path='/hotel' element={<Hotel />}></Route>
          <Route path='/restaurant' element={<Restaurant />}></Route>
          <Route path='/tours' element={<Tours />}></Route>
          <Route path='/tripPlanner' element={<TripPlanner />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/hotel-details/:id' element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
