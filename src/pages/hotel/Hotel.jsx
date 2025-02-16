import { useEffect, useState, useRef } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import SearchBar from '../../component/bars/SearchBar';
import ListingCard from '../../component/cards/ListingCard';
import ApiService from '../../service/ApiService';
import BackgroudImage from '../../assets/images/hotel_bg.jpg'
import LoadingScreen from '../../component/LoadingScreen';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [searchedHotels, setsearchedHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  

  const resultsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const hotelsData = await ApiService.getHotels();
        setHotels(hotelsData);


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
          const searchedHotelsData = await ApiService.getHotelByCity(searchedText);


          setsearchedHotels(searchedHotelsData);


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

  const displayHotels = searchedText ? searchedHotels : hotels;




  return (
    <>
      <NavBar />
      <div>
        <SearchBar
          title="Find Your Perfect Stay"
          subtitleLine1="Explore a world of comfort and luxury."
          subtitleLine2="From cozy retreats to grand escapes, discover the ideal destination for your next adventure."
          hintText="Where are you going?"
          setSearchedText={setSearchedText}
          searchBackgroundImg={BackgroudImage}
        />

        <div className="mx-40 flex justify-center">
          <h1 className="font-bold text-4xl my-4">Explore hotels</h1>

        </div>

        <div ref={resultsRef}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {searchedText ? (<div className='max-w-[800px] m-auto my-4 font-semibold text-lg'> Nearby Hotels in : {searchedText}</div>) : ("")}
              <div className="mx-20 flex flex-col items-center mb-4">
                {displayHotels.length > 0 ? (
                  displayHotels.map((hotel) => (
                    <ListingCard
                      key={hotel.id}
                      title={hotel.title}
                      location_city={hotel.locationCity}
                      location_map_url={hotel.locationMap}
                      rating={hotel.ratings}
                      review_count={hotel.reviewCount}
                      description={hotel.descriptionShort}
                      imgUrl={hotel.imgUrl?.[0]}
                      destination_link={`hotel-details/${hotel.id}`}
                    />
                  ))
                ) : (
                  <p className="font-bold text-2xl text-gray-500 h-screen">No Hotels found!</p>
                )}
              </div>
            </>

          )}
        </div>
        <div>
          HI
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
