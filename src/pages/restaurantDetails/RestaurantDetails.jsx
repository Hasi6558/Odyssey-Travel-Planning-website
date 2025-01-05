import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import ImageGallery from '../../component/imageGallery/ImageGallery';
import LocationLogo from '../../assets/icons/location_logo_2.png';
import ReviewSection from '../../component/ReviewSection';
import LoadingScreen from '../../component/LoadingScreen';

const RestaurantDetails = () => {

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchRestaurant = async () => {
            setLoading(true);
            try {
                const restaurantData = await ApiService.getRestaurantById(id);
                const reviewData = await ApiService.getReviewsByReviewdItemId(id);

                setRestaurant(restaurantData);
                setReviews(reviewData);

            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurant();
        console.log(restaurant)

    }, [id]);

    return (
        <>
            <NavBar />
            {
                loading ? (<div><LoadingScreen /></div>) : (
                    <div className='w-10/12 m-auto mt-10'>

                        <div className='w-2/3 mx-20 pt-6'>
                            <h3 className='font-bold text-2xl mb-5'>{restaurant.title}</h3>
                        </div>
                        <div className='flex items-center my-2'>
                            <div className='ms-20 me-2'><img src={LocationLogo} alt="" className='h-4' /></div>
                            <div>{`${restaurant.location_city},${restaurant.location_country}`}</div>
                            <div className='ps-10 font-semibold'><a href="#">Show on map</a></div>
                            <div className='bg-blue-700 text-white p-1 ms-10'><p>{restaurant.rating}</p></div>
                        </div>
                        <div className='flex flex-row gap-44 items-center '>
                            <div className='w-5/12'>
                                <ImageGallery images={restaurant.image_url || []} />
                            </div>
                            <div><iframe src={restaurant.location_map} width="200" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                        </div>
                        <div className='my-10 mx-20 rounded-xl shadow-lg p-10 bg-gray-100'>
                            <div className='font-bold text-2xl pb-1'>About</div>
                            <div className=''>{restaurant.description}</div>
                        </div>

                        <div className="w-2/3 mx-20 my-10">
                            <h3 className="font-bold text-lg mb-4">Facilities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🔥</span>
                                    <span>{restaurant.facilities?.[0]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">❄️</span>
                                    <span>{restaurant.facilities?.[1]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🅿️</span>
                                    <span>{restaurant.facilities?.[2]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🏡</span>
                                    <span>{restaurant.facilities?.[3]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">🌀</span>
                                    <span>{restaurant.facilities?.[4]}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl">📶</span>
                                    <span>{restaurant.facilities?.[5]}</span>
                                </div>
                            </div>
                        </div>
                        <div className='ms-20'>
                            <ReviewSection review_count={reviews.length} reviews={reviews} />
                        </div>
                    </div>
                )
            }

            <Footer />
        </>
    )
}

export default RestaurantDetails;
