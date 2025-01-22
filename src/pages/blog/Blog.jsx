import { useEffect, useState, useRef } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import SearchBar from '../../component/bars/SearchBar';
import ListingCard from '../../component/cards/ListingCard';
import ApiService from '../../service/ApiService';
import BackgroudImage from '../../assets/images/hotel_bg.jpg';
import LoadingScreen from '../../component/LoadingScreen';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const resultsRef = useRef(null);

  // Fetch all blogs on page load
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);  // Set loading to true while fetching
      try {
        const blogData = await ApiService.getAllBlogs();  // Fetch blogs from the backend
        console.log("Fetched Blogs:", blogData);  // Log the data to the console
        setBlogs(blogData);  // Set the fetched data into the blogs state
      } catch (error) {
        console.error('Error fetching data', error);  // Log any errors
      } finally {
        setLoading(false);  // Set loading to false when the fetching is done
      }
    };
    fetchBlogs();
  }, []);  // Empty dependency array, so this will run once when the component mounts
  

  // Fetch searched blogs based on text input
  useEffect(() => {
    const fetchSearchedBlogs = async () => {
      if (searchedText) {
        setLoading(true);
        try {
          const searchedBlogData = await ApiService.getBlogByTitle(searchedText);  // Assuming this fetches blogs by title
          setSearchedBlogs(searchedBlogData);
          
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
    fetchSearchedBlogs();
  }, [searchedText]);

  const displayBlogs = searchedText ? searchedBlogs : blogs;

  return (
    <>
      <NavBar />
      <div>
        <SearchBar
          title="Discover Amazing Blogs"
          subtitleLine1="Explore inspiring stories, experiences, and places."
          subtitleLine2="From hidden gems to world-famous destinations, dive into our blogs."
          hintText="Search for blogs"
          setSearchedText={setSearchedText}
          searchBackgroundImg={BackgroudImage} // Optional background for the search bar
        />

        <div className="mx-40 flex justify-center">
          <h1 className="font-bold text-4xl my-4">Explore Blogs</h1>
        </div>

        <div ref={resultsRef}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {searchedText ? (<div className='max-w-[800px] m-auto my-4 font-semibold text-lg'> Blogs related to: {searchedText}</div>) : ("")}
              <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayBlogs.length > 0 ? (
                  displayBlogs.map((blog) => (
                    <ListingCard
                      key={blog._id}  // Use _id.$oid if _id is in object form in MongoDB
                      title={blog.title}
                      location_city={blog.location}
                      location_map_url={blog.location}  // Assuming the same field for location URL
                      rating={blog.rating}  // You can customize this as needed, assuming you have ratings
                      review_count={blog.reviewCount}  // Same for review count
                      description={blog.description}
                      imgUrl={blog.imageurl}
                      destination_link={`blog-details/${blog._id}`}  // Navigate to a specific blog page
                    />
                  ))
                ) : (
                  <p className="font-bold text-2xl text-gray-500 h-screen">No Blogs found!</p>
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

export default Blog;
