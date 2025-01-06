import React, { useState, useEffect } from 'react';
import NavBar from '../../component/navBar/NavBar';
import Footer from '../../component/Footer/Footer';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    // Mock data for blogs (replace with actual API call if necessary)
    const fetchBlogs = () => {
      const mockBlogs = [
        {
          id: 1,
          title: 'Sigiriya Rock Fortress',
          description: 'Discover the ancient engineering marvel and stunning views from the top of Sigiriya Rock.',
          image: 'https://www.dreamstime.com/photos-images/sri-lanka-sigiriya.html', // Replace with real image URL
          location: 'Sigiriya, Sri Lanka',
        },
        {
          id: 2,
          title: 'Ella\'s Nine Arches Bridge',
          description: 'Explore the picturesque Nine Arches Bridge surrounded by lush greenery in Ella.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Ella, Sri Lanka',
        },
        {
          id: 3,
          title: 'Mirissa Beach',
          description: 'Relax at the pristine beaches of Mirissa and enjoy dolphin and whale watching.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Mirissa, Sri Lanka',
        },
        {
          id: 4,
          title: 'Great Barrier Reef',
          description: 'Explore the vibrant underwater world of the largest coral reef system on Earth.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Queensland, Australia',
        },
        {
          id: 5,
          title: 'Santorini',
          description: 'Enjoy the stunning sunsets and iconic white-washed buildings of Santorini.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Santorini, Greece',
        },
        {
          id: 6,
          title: 'Banff National Park',
          description: 'Experience the breathtaking beauty of turquoise lakes and rugged mountains.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Alberta, Canada',
        },
        {
          id: 7,
          title: 'Taj Mahal',
          description: 'Witness the timeless beauty of the iconic marble mausoleum.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Agra, India',
        },
        {
          id: 8,
          title: 'Machu Picchu',
          description: 'Explore the ancient Incan ruins atop the Andes mountains.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Cusco Region, Peru',
        },
        {
          id: 9,
          title: 'Maldives',
          description: 'Relax at luxurious resorts on turquoise lagoons and white sandy beaches.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Maldives',
        },
        {
          id: 10,
          title: 'Yellowstone National Park',
          description: 'Discover geothermal wonders and abundant wildlife in this iconic park.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Wyoming, USA',
        },
        {
          id: 11,
          title: 'Venice',
          description: 'Navigate the enchanting canals of this historic Italian city.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Venice, Italy',
        },
        {
          id: 12,
          title: 'Petra',
          description: 'Marvel at the ancient rock-carved city and its stunning architecture.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Ma\'an, Jordan',
        },
        {
          id: 13,
          title: 'Iguazu Falls',
          description: 'Experience the awe-inspiring power of one of the world’s largest waterfalls.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Argentina/Brazil Border',
        },
        {
          id: 14,
          title: 'Kyoto',
          description: 'Immerse yourself in Japanese culture with temples, gardens, and tea houses.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Kyoto, Japan',
        },
        {
          id: 15,
          title: 'New York City',
          description: 'Explore the vibrant energy, iconic landmarks, and diverse culture of NYC.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'New York, USA',
        },
        {
          id: 16,
          title: 'Cape Town',
          description: 'Enjoy stunning views of Table Mountain and explore vibrant local markets.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Cape Town, South Africa',
        },
        {
          id: 17,
          title: 'Bali',
          description: 'Experience the island of gods with its beaches, temples, and culture.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Bali, Indonesia',
        },
        {
          id: 18,
          title: 'Paris',
          description: 'Explore the romantic charm of the City of Light, including the Eiffel Tower.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Paris, France',
        },
        {
          id: 19,
          title: 'Hawaii',
          description: 'Relax on pristine beaches and discover volcanic landscapes.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Hawaii, USA',
        },
        {
          id: 20,
          title: 'Galapagos Islands',
          description: 'See unique wildlife and pristine nature on this ecological paradise.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Galapagos, Ecuador',
        },
        {
          id: 21,
          title: 'Istanbul',
          description: 'Experience the blend of Eastern and Western cultures in this historic city.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Istanbul, Turkey',
        },
        {
          id: 22,
          title: 'Tokyo',
          description: 'Discover the futuristic and traditional blend of Japan\'s bustling capital city.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Tokyo, Japan',
        },
        {
          id: 23,
          title: 'Rio de Janeiro',
          description: 'Experience vibrant culture, beaches, and the iconic Christ the Redeemer statue.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Rio de Janeiro, Brazil',
        },
        {
          id: 24,
          title: 'Sydney',
          description: 'Explore the iconic Opera House and enjoy beaches like Bondi and Manly.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Sydney, Australia',
        },
        {
          id: 25,
          title: 'Angkor Wat',
          description: 'Discover the awe-inspiring ancient temple complex in Cambodia.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Siem Reap, Cambodia',
        },
        {
          id: 26,
          title: 'Rome',
          description: 'Walk through history in the Eternal City, including the Colosseum and Vatican City.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Rome, Italy',
        },
        {
          id: 27,
          title: 'Phuket',
          description: 'Relax on tropical beaches and explore vibrant nightlife in Thailand.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Phuket, Thailand',
        },
        {
          id: 28,
          title: 'Dubai',
          description: 'Experience luxury, futuristic skyscrapers, and vibrant culture in Dubai.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Dubai, UAE',
        },
        {
          id: 29,
          title: 'Barcelona',
          description: 'Explore Gaudi\'s architecture and vibrant cultural scene in Spain.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Barcelona, Spain',
        },
        {
          id: 30,
          title: 'Cairo',
          description: 'Explore the ancient Pyramids of Giza and the rich history of Egypt.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Cairo, Egypt',
        },
        {
          id: 31,
          title: 'Queenstown',
          description: 'Enjoy adventure sports and stunning scenery in New Zealand.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Queenstown, New Zealand',
        },
        {
          id: 32,
          title: 'Zanzibar',
          description: 'Relax on pristine beaches and explore the historic Stone Town.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Zanzibar, Tanzania',
        },
        {
          id: 33,
          title: 'London',
          description: 'Experience the history, culture, and vibrant life of the UK\'s capital.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'London, England',
        },
        {
          id: 34,
          title: 'Amsterdam',
          description: 'Discover the canals, museums, and culture of this Dutch city.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Amsterdam, Netherlands',
        },
        {
          id: 35,
          title: 'Prague',
          description: 'Walk through the charming streets and historic sites of Prague.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Prague, Czech Republic',
        },
        {
          id: 36,
          title: 'Antarctica',
          description: 'Embark on an expedition to the pristine landscapes of the southernmost continent.',
          image: 'https://via.placeholder.com/300x200', // Replace with real image URL
          location: 'Antarctica',
        },
      ];
      setBlogs(mockBlogs);
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <div className="relative">
        <img
          src="https://blog.windstarcruises.com/wildlife-found-on-elba-part-of-the-tuscan-archipelago-national-park/" // Replace with real image URL
          alt="Top Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">BLOG</h1>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-20"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,64L48,74.7C96,85,192,107,288,128C384,149,480,171,576,176C672,181,768,171,864,154.7C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">BLOG POSTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <p className="text-gray-500 text-sm">Location: {blog.location}</p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
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
            {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map((number) => (
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
              disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
              className={`px-4 py-2 rounded-full ${
                currentPage === Math.ceil(blogs.length / blogsPerPage)
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;