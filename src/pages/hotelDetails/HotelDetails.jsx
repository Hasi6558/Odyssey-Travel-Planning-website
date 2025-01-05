import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import ImageGallery from '../../component/imageGallery/ImageGallery';
import RoomCard from '../../component/cards/RoomCard';
import LocationLogo from '../../assets/icons/location_logo_2.png';
import ReviewSection from '../../component/ReviewSection';
import LoadingScreen from '../../component/LoadingScreen';
const HotelDetails = () => {

    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [hotelRooms, setHotelRooms] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);




    useEffect(() => {

        const fetchHotel = async () => {
            setLoading(true);
            try {
                const hotelData = await ApiService.getHotelById(id);
                const hotelRoomsData = await ApiService.getRoomsByHotelId("H001");
                const reviewData = await ApiService.getReviewsByReviewdItemId(id);
                setHotel(hotelData);
                setHotelRooms(hotelRoomsData);
                setReviews(reviewData);


            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false)
            }
        };
        fetchHotel();

    }, [id])



    return (
        <>
            <NavBar />
            <>
                {loading ? (<LoadingScreen />) : (
                    <div className=' w-10/12 m-auto mt-10'>
                        <div></div>
                        <div className='w-2/3 mx-20 pt-6'>
                            <h3 className='font-bold text-2xl mb-5' >{hotel.title}</h3>
                        </div>
                        <div className='flex items-center my-2'>
                            <div className='ms-20 me-2'><img src={LocationLogo} alt="" className='h-4' /></div>
                            <div>{`${hotel.locationCity},${hotel.locationCountry}`}</div>

                            <div className='ps-10 font-semibold'><a href={hotel.locationMap}>Show on map</a></div>
                            <div className='bg-blue-700 text-white p-1 ms-10'><p>{hotel.ratings}</p></div>
                        </div>
                        <div className='flex flex-row gap-44 items-center '>

                            <div className='w-5/12'>
                                <ImageGallery images={hotel.imgUrl || []} />
                            </div>
                            <div><iframe src={hotel.locationMap} width="200" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>


                        </div>

                        <div className='my-10 mx-20 rounded-xl shadow-lg p-10 bg-gray-100'>
                            <div className='font-bold text-2xl pb-1'>About</div>

                            <div className=''>{hotel.descriptionLong}</div>
                        </div>




                        <div className="w-2/3 mx-20 my-10">
                            <h3 className="font-bold text-lg mb-4">Facilities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🔥</span>
                                    <span>{hotel.facilities?.[0]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">❄️</span>
                                    <span>{hotel.facilities?.[1]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🅿️</span>
                                    <span>{hotel.facilities?.[2]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🏡</span>
                                    <span>{hotel.facilities?.[3]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🌀</span>
                                    <span>{hotel.facilities?.[4]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">📶</span>
                                    <span>{hotel.facilities?.[5]}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-2xl font-bold mx-20'>Rooms</h3>
                            <div className='h-0.5 bg-gray-500 mx-20'></div>

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
                                        />
                                    ))}


                                </div>
                            </div>

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