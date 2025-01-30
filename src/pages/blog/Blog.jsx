import { useEffect, useState, useRef } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';
import SearchBar from '../../component/bars/SearchBar';
import ApiService from '../../service/ApiService';
import LoadingScreen from '../../component/LoadingScreen';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const resultsRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const blogData = await ApiService.getAllBlogs();
        console.log("Fetched Blogs:", blogData);
        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchSearchedBlogs = async () => {
      if (searchedText) {
        setLoading(true);
        try {
          const searchedBlogData = await ApiService.getBlogByTitle(searchedText);
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

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = displayBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NavBar />
      <div>
        {selectedBlog ? (
          <div className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${selectedBlog.imageurl})` }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">{selectedBlog.title}</h1>
              <p className="text-lg mt-4">{selectedBlog.location}</p>
              <p className="text-md mt-2 max-w-2xl text-center">{selectedBlog.description}</p>
            </div>
          </div>
        ) : (
          <SearchBar
            title="Discover Amazing Blogs"
            subtitleLine1="Explore inspiring stories, experiences, and places."
            subtitleLine2="From hidden gems to world-famous destinations, dive into our blogs."
            hintText="Search for blogs"
            setSearchedText={setSearchedText}
            searchBackgroundImg="https://www.checkfront.com/wp-content/uploads/2022/05/img_62749d7437998.jpg"
          />
        )}

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
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog) => (
                    <div
                      key={blog._id}
                      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 relative"
                    >
                      <img
                        src={blog.imageurl}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 pb-16">
                        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                        <p className="text-gray-500 text-sm mb-4">Location: {blog.location}</p>
                      </div>
                      <button
                        onClick={() => handleReadMore(blog)}
                        className="absolute bottom-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        Change Password
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="font-bold text-2xl text-gray-500 h-screen">No Blogs found!</p>
                )}
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  &lt;
                </button>
                {[...Array(Math.ceil(displayBlogs.length / blogsPerPage)).keys()].map((number) => (
                  <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                    className={`px-4 py-2 rounded-full ${
                      currentPage === number + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {number + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(displayBlogs.length / blogsPerPage)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === Math.ceil(displayBlogs.length / blogsPerPage)
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  &gt;
                </button>
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
