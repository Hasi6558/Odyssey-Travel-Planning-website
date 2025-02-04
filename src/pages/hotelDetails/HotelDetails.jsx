import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import ImageGallery from '../../component/imageGallery/ImageGallery';
import RoomCard from '../../component/cards/RoomCard';
import LocationLogo from '../../assets/icons/location_logo_2.png';
import ReviewSection from '../../component/ReviewSection';
import LoadingScreen from '../../component/LoadingScreen';
import { add } from 'date-fns';
import favIcon from '../../assets/icons/favourite_icon.png';
import WhiteFavIcon from '../../assets/icons/white_favourite.png';
import FeatureFlag from '../../assets/icons/feature_flag.png';

const HotelDetails = () => {

    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [hotelRooms, setHotelRooms] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');
    const [favourites, setFavourites] = useState([]);



    useEffect(() => {
        const fetchHotel = async () => {
            setLoading(true);
            try {
                const favouriteHotelsData = await ApiService.getFavouritesByUserIdAndItemType(userId, "hotel", token);
                const hotelData = await ApiService.getHotelById(id);
                const hotelRoomsData = await ApiService.getRoomsByHotelId("H001");
                const reviewData = await ApiService.getReviewsByReviewdItemId(id);
                setHotel(hotelData);
                setHotelRooms(hotelRoomsData);
                setReviews(reviewData);
                const found = favouriteHotelsData.some(fav => fav.itemId === id);
                setFavourites(found);


            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false)
            }
        };
        fetchHotel();

    }, [id, userId]);

    async function addToFavourites() {
        if (userId == undefined || token == undefined) {
            alert('Please login to add to favourites');
            return;
        } else {
            const favouriteData = {
                userId: userId,
                itemId: id,
                itemType: 'hotel'
            }
            try {
                const response = await ApiService.addFavourite(favouriteData, token);
                if (response.status === 200 || response.status === 201) {
                    setFavourites(true);
                }
            } catch (error) {
                console.error('Error adding to favourites', error);
            }
        }
    }
    async function removeFromFavourites() {
        if (userId == undefined || token == undefined) {
            alert('Please login to remove from favourites');
            return;
        } else {
            const favouriteData = {
                userId: userId,
                itemId: id
            }
            try {
                const response = await ApiService.removeFavourite(favouriteData, token);
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    setFavourites(false);
                }
            } catch (error) {
                console.error('Error removing from favourites', error);
            }
        }
    }

    return (
        <>
            <NavBar />
            <>
                {loading ? (<LoadingScreen />) : (
                    <div className=' w-10/12 m-auto mt-10'>
                        <div></div>
                        <div className='w-2/3 mx-20 pt-6'>
                            <h3 className='font-bold text-3xl mb-3 w-[600px]' >{hotel.title}</h3>
                        </div>
                        <div className='flex items-center my-2'>
                            <div className='ms-20 me-2'><img src={LocationLogo} alt="" className='h-4' /></div>
                            <div>{`${hotel.locationCity},${hotel.locationCountry}`}</div>

                            <div className='ps-5 font-semibold'><a href={hotel.locationMap}>Show on map</a></div>
                            <div className='bg-blue-700 text-white p-1 ms-5'><p>{hotel.ratings}</p></div>
                            {favourites ? (<div className='bg-black text-white font-bold ml-[20px] p-1 pr-4 cursor-pointer rounded-3xl ' onClick={removeFromFavourites}>
                                <span className='flex'><img src={WhiteFavIcon} className='mx-2'/>Remove From Favourites</span>
                            </div>) : (
                                <div className='bg-black text-white font-bold ml-[20px] p-1 px-4 cursor-pointer rounded-3xl' onClick={addToFavourites}>
                                    <span>Add to Favourites</span>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row gap-44 items-center '>

                            <div className='w-5/12'>
                                <ImageGallery images={hotel.imgUrl || []} />
                            </div>
                            <div><iframe src={hotel.locationMap} width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>


                        </div>

                        <div className='my-10 mx-20 rounded-xl shadow-lg p-10 bg-gray-100'>
                            <div className='font-bold text-2xl pb-1'>About</div>

                            <div className=''>{hotel.descriptionLong}</div>
                        </div>




                        <div className="w-2/3 mx-20 my-10">
                            <h3 className="font-bold text-lg mb-4">Facilities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                {hotel.facilities?.map((facility,index)=>(
                                       <div className="flex items-center space-x-2" key={index}>
                                                                            <span className='flex'><img src={FeatureFlag} className='mr-2'/>{facility}</span>
                                                                            </div>
                                                                    ))}
                            </div>
                        </div>

                       

                        <div>
                            <h3 className='text-2xl font-bold mx-20'>Rooms</h3>
                            <div className='h-0.5 bg-gray-500 mx-20'></div>
                            {hotelRooms.length > 0?(
                                <div className='m-auto w-9/12'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 mb-5 mt-4'>
                                    {hotelRooms.map((hotelRoom) => (

                                        <RoomCard
                                            key={hotelRoom.id}
                                            title={hotelRoom.title}
                                            subTitle={hotelRoom.subtitle}
                                            features={hotelRoom.facilities}
                                            price={hotelRoom.price}
                                            discountedPrice={hotelRoom.discountedPrice}
                                            avalRooms={hotelRoom.avalCount}
                                            roomId={hotelRoom.id}
                                        />
                                    ))}


                                </div>
                            </div>
                            
                            ):(
                                <div className='ms-20 my-5'>No Rooms Available</div>

                            )}

                        </div>



                        <div className='ms-20'>
                            <ReviewSection review_count={reviews.length} reviews={reviews} />
                        </div>

                    </div>


                )}

            </>



            <Footer />
        </>

    )
}

export default HotelDetails