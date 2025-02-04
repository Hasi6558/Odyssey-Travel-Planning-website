import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import ImageGallery from '../../component/imageGallery/ImageGallery';
import LocationLogo from '../../assets/icons/location_logo_2.png';
import ReviewSection from '../../component/ReviewSection';
import LoadingScreen from '../../component/LoadingScreen';
import WhiteFavIcon from '../../assets/icons/white_favourite.png';
import FeatureFlag from '../../assets/icons/feature_flag.png';
import TableReservation from '../../component/fieldSets/TableReservation';

const RestaurantDetails = () => {

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {

        const fetchRestaurant = async () => {
            setLoading(true);
            try {
                const favouriteHotelsData = await ApiService.getFavouritesByUserIdAndItemType(userId, "restaurant", token);
                const restaurantData = await ApiService.getRestaurantById(id);
                const reviewData = await ApiService.getReviewsByReviewdItemId(id);

                setRestaurant(restaurantData);
                console.log(restaurantData);
                setReviews(reviewData);
                const found = favouriteHotelsData.some(fav => fav.itemId === id);
                setFavourites(found);

            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurant();
        console.log(restaurant)

    }, [id, userId]);
    async function addToFavourites() {
        if (userId == undefined || token == undefined) {
            alert('Please login to add to favourites');
            return;
        } else {
            const favouriteData = {
                userId: userId,
                itemId: id,
                itemType: 'restaurant'
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
            {
                loading ? (<div><LoadingScreen /></div>) : (
                    <div className='w-10/12 m-auto mt-10'>

                        <div className='w-2/3 mx-20 pt-6'>
                            <h3 className='font-bold text-2xl mb-5'>{restaurant.title}</h3>
                        </div>
                        <div className='flex items-center my-2'>
                            <div className='ms-20 me-2'><img src={LocationLogo} alt="" className='h-4' /></div>
                            <div>{`${restaurant.location_city},${restaurant.location_country}`}</div>
                            <div className='ps-5 font-semibold'><a href="#">Show on map</a></div>
                            <div className='bg-blue-700 text-white p-1 ms-10'><p>{restaurant.rating}</p></div>
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
                                <ImageGallery images={restaurant.image_url || []} />
                            </div>
                            <div><iframe src={restaurant.location_map} width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                        </div>
                        <div className='my-10 mx-20 rounded-xl shadow-lg p-10 bg-gray-100'>
                            <div className='font-bold text-2xl pb-1'>About</div>
                            <div className=''>{restaurant.description}</div>
                        </div>

                        <div className="w-2/3 mx-20 my-10">
                            <h3 className="font-bold text-lg mb-4">Facilities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                               
                                    {restaurant.facilities?.map((facility,index)=>(
                                         <div className="flex items-center space-x-2" key={index}>
                                            <span className='flex'><img src={FeatureFlag} className='mr-2'/>{facility}</span>
                                            </div>
                                    ))}
                                    
                                   
                                
                                
                            </div>
                        </div>
                        <div className='my-4'>
                            <TableReservation id="1234" itemId="54555"/>
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
