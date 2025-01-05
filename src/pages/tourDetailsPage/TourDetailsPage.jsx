import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiService from '../../service/ApiService';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import ImageGallery from '../../component/imageGallery/ImageGallery';
import LocationLogo from '../../assets/icons/location_logo_2.png';
import ReviewSection from '../../component/ReviewSection';
import LoadingScreen from '../../component/LoadingScreen';

const TourDetails = () => {

    const { id } = useParams();
    const [tour, setTour] = useState({ guide_languages: [] });
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchTour = async () => {
            setLoading(true);
            try {
                const tourData = await ApiService.getTourById(id);
                const reviewData = await ApiService.getReviewsByReviewdItemId("12345");

                setTour(tourData);
                setReviews(reviewData);

            } catch (error) {
                console.error('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTour();
        console.log(tour)

    }, [id]);

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
                            <div className='bg-blue-700 text-white p-1 ms-10'><p>{tour.rating}</p></div>
                        </div>
                        <div className='flex flex-row gap-44 items-center '>
                            <div className='w-5/12'>
                                <ImageGallery images={tour.image_url || []} />
                            </div>
                            <div><iframe src={tour.location_map} width="200" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
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
