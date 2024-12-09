import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Restaurant from './pages/restaurant/Restaurant'
import Hotel from './pages/hotel/Hotel'
import Tours from './pages/tours/Tours'
import TripPlanner from './pages/tripPlanner/TripPlanner'
import Blog from './pages/blog/Blog'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hotel' element={<Hotel/>}></Route>
      <Route path='/restaurant' element={<Restaurant/>}></Route>
      <Route path='/tours' element={<Tours/>}></Route>
      <Route path='/tripPlanner' element={<TripPlanner/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>   
    </Routes>
  </BrowserRouter>
    </> 
  )
}

export default App
