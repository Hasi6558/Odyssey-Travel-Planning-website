import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import SearchBar from '../../component/bars/SearchBar';
import ListingCard from '../../component/cards/ListingCard';
import ApiService from '../../service/ApiService';
import BackgroundImage from '../../assets/images/tour_bg.jpg';

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [searchedTours, setSearchedTours] = useState([]);
  const [loading, setLoading] = useState(false);



  const resultsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const toursData = await ApiService.getTours();
        setTours(toursData);
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
          const searchedToursData = await ApiService.getToursByCity(searchedText);
          setSearchedTours(searchedToursData);

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

  const displayTours = searchedText ? searchedTours : tours;

  return (
    <>
      <NavBar />
      <div>
        <SearchBar
          title="Adventure Awaits You"
          subtitleLine1="Discover unique tours and hidden gems to make your travels extraordinary. "
          subtitleLine2="Let us guide you to experiences you'll treasure forever."
          hintText="Where are you exploring?"
          setSearchedText={setSearchedText}
          searchBackgroundImg={BackgroundImage}
        />

        <div className="mx-40 flex justify-center">
          <h1 className="font-bold text-2xl my-4">Explore Tours</h1>
        </div>

        <div ref={resultsRef}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {searchedText ? (<div className='max-w-[800px] m-auto my-4 font-semibold text-lg'> Nearby Tours in : {searchedText}</div>) : ("")}
              <div className="mx-20 flex flex-col items-center">
                {displayTours.length > 0 ? (
                  displayTours.map((tour) => (
                    <ListingCard
                      key={tour.id}
                      title={tour.title}
                      location_city={tour.location_city}
                      location_map_url={tour.location_map}
                      rating={tour.rating}
                      review_count={tour.review_count}
                      description={tour.description}
                      imgUrl={tour.image_url?.[0]}
                      destination_link={`tour-details/${tour.id}`}
                    />
                  ))
                ) : (
                  <p className="font-bold text-2xl text-gray-500 h-screen">No Tours found!</p>
                )}
              </div>
            </>

          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tour;
