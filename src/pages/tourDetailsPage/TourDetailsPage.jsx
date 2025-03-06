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
import TourPackageCard from '../../component/cards/TourPackageCard';
import phoneImg from '../../assets/icons/mdi_telephone.png';
import emailImg from '../../assets/icons/lets-icons_message-light.png';

const TourDetails = () => {

    const { id } = useParams();
    const [tour, setTour] = useState({ guide_languages: [] });
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {

        const fetchTour = async () => {
            setLoading(true);
            try {
                const tourData = await ApiService.getTourById(id);
                const reviewData = await ApiService.getReviewsByReviewdItemId(id);

                setTour(tourData);
                setReviews(reviewData);

                if (userId != undefined) {
                    const favouriteHotelsData = await ApiService.getFavouritesByUserIdAndItemType(userId, "tour", token);
                    const found = favouriteHotelsData.some(fav => fav.itemId === id);
                    setFavourites(found);
                }

            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTour();
        console.log(tour)

    }, [id, userId]);
    async function addToFavourites() {
        if (userId == undefined || token == undefined) {
            alert('Please login to add to favourites');
            return;
        } else {
            const favouriteData = {
                userId: userId,
                itemId: id,
                itemType: 'tour'
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
                            <h3 className='font-bold text-2xl mb-5'>{tour.title}</h3>
                        </div>
                        <div className='flex items-center my-2'>
                            <div className='ms-20 me-2'><img src={LocationLogo} alt="" className='h-4' /></div>
                            <div>{`${tour.location_city}, ${tour.location_country}`}</div>
                            <div className='ps-10 font-semibold'><a href="#">Show on map</a></div>
                            <div className='bg-blue-700 text-white p-1 ms-5'><p>{tour.rating}</p></div>
                            {(favourites && userId != undefined) ? (<div className='bg-black text-white font-bold ml-[20px] p-1 pr-4 cursor-pointer rounded-3xl ' onClick={removeFromFavourites}>
                                <span className='flex'><img src={WhiteFavIcon} className='mx-2' />Remove From Favourites</span>
                            </div>) : (
                                <div className='bg-black text-white font-bold ml-[20px] p-1 px-4 cursor-pointer rounded-3xl' onClick={addToFavourites}>
                                    <span>Add to Favourites</span>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row gap-44 items-center '>
                            <div className='w-5/12'>
                                <ImageGallery images={tour.image_url || []} />
                            </div>
                            <div><iframe src={tour.location_map} width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                        </div>
                        <div className='my-10 mx-20 rounded-xl shadow-lg p-10 bg-gray-100'>
                            <div className='font-bold text-2xl pb-1'>About</div>
                            <div className=''>{tour.description}</div>
                        </div>

                        <div className="w-2/3 mx-20 my-10">
                            <h3 className="font-bold text-lg mb-4">Guide Languages</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm ps-10">
                                {tour.guide_languages.length > 0 ?

                                    (<ul style={{ listStyleType: 'disc' }} >
                                        {tour.guide_languages.map((language, index) => (
                                            <li key={index}
                                                className='me-2 font-semibold'
                                            >{language}</li>

                                        ))}
                                    </ul>) : (<p>No Guide Languages information available</p>)
                                }

                            </div>
                        </div>
                        <div className='mx-20'>
                        <h3 className="font-bold text-xl mb-4">Tour Packages</h3>
                        <div className='h-0.5 bg-gray-500 mb-10'></div>
                        <div className='flex align-center justify-between gap-10 mx-20'>
                        <TourPackageCard 
                       
                            imgUrl="https://plus.unsplash.com/premium_photo-1716866638358-7dfc3c0b31fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            title="Title" 
                            features={['feature 1', 'feature 2', 'feature 3']}
                            price="200" discountedPrice="150"
        
                            
                        />
                        <TourPackageCard 
                            imgUrl="https://plus.unsplash.com/premium_photo-1716866638358-7dfc3c0b31fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            title="Title" 
                            features={['feature 1', 'feature 2', 'feature 3']}
                            price="200" discountedPrice="150"
        
                            
                        />
                        <TourPackageCard 
                            imgUrl="https://plus.unsplash.com/premium_photo-1716866638358-7dfc3c0b31fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            title="Title" 
                            features={['feature 1', 'feature 2', 'feature 3']}
                            price="200" discountedPrice="150"
        
                            
                        />
                        </div>
                        <div>
                            <div className='flex justify-center'>

                                
                            <button className='bg-blue-800 text-white p-4 rounded-full text-lg flex '><img src={phoneImg} alt="" className='mx-2' /> Contact Us for Booking </button>
                            <button className='bg-black rounded-full px-4 ml-4'><img src={emailImg} alt="" /></button>


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

export default TourDetails;
