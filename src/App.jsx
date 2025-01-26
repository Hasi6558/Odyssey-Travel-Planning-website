import { BrowserRouter, Route, Routes } from 'react-router'
import { useLocation } from 'react-router'
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
import RestaurantDetails from './pages/restaurantDetails/RestaurantDetails'
import LoadingScreen from './component/LoadingScreen'
import TourDetails from './pages/tourDetailsPage/TourDetailsPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import BookingPage from './pages/bookingPage/BookingPage'
import PlannedTripDetails from './pages/tripPlanner/PlannedTripDetails'
import { useEffect } from 'react'
import ForgetPassword from './pages/signUp/ForgetPassword'

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]); 
  
    return null; 
  };

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
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
          <Route path='/restaurant-details/:id' element={<RestaurantDetails />} />
          <Route path='/loading' element={<LoadingScreen />} />
          <Route path='/tour-details/:id' element={<TourDetails />} />
          <Route path='/profilePage' element={<ProfilePage />} />
          <Route path='/booking-page/:id' element={<BookingPage />} />
          <Route path='/trip-planDetails/:id' element={<PlannedTripDetails />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
