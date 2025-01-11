import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, eachDayOfInterval } from "date-fns";
import ArrowIcon from '../../assets/icons/weui_arrow-filled.png'
import ApiService from '../../service/ApiService';

const DropDownList = () => {
    // State declarations...
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });
    const [sections, setSections] = useState([]);
    const [openSection, setOpenSection] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const [showFavoritesPanel, setShowFavoritesPanel] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("");
    const [currentSectionIndex, setCurrentSectionIndex] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [costInput, setCostInput] = useState("");

    const [favoriteItems, setFavoriteItems] = useState({
        hotels: [],
        restaurants: [],
        tours: [],
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotelData = await ApiService.getHotels();
                const restaurantData = await ApiService.getRestaurants();
                const tourData = await ApiService.getTours();

                // Extract titles from the backend data
                const hotelTitles = hotelData.map((hotel) => hotel.title);
                const restaurantTitles = restaurantData.map((restaurant) => restaurant.title);
                const tourTitles = tourData.map((tour) => tour.title);

                console.log(hotelTitles);
                console.log(restaurantTitles);
                console.log(tourTitles)

                // Update the favoriteItems state
                setFavoriteItems({
                    hotels: hotelTitles,
                    restaurants: restaurantTitles,
                    tours: tourTitles,
                });
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);



    const toggleSection = (index) => setOpenSection(openSection === index ? null : index);

    const handleDateChange = (ranges) => {
        const { startDate, endDate } = ranges.selection;
        setDateRange({ startDate, endDate });
    };

    const generateSections = () => {
        const { startDate, endDate } = dateRange;

        const generatedSections = eachDayOfInterval({ start: startDate, end: endDate }).map((date) => ({
            title: format(date, "dd MMMM yyyy"),
            items: [],
        }));

        setSections(generatedSections);
        setShowPicker(false); // Hide the date picker after generating sections
    };

    const openFavoritesPanel = (category, sectionIndex) => {
        setCurrentCategory(category);
        setCurrentSectionIndex(sectionIndex);
        setShowFavoritesPanel(true);
        setSearchInput("");
        setCostInput("");
    };

    const handleAddFavorite = (item) => {
        const cost = parseFloat(costInput) || 0;

        if (cost <= 0) {
            alert("Please enter a valid cost.");
            return;
        }

        const selectedItem = {
            title: `${currentCategory}: ${item}`,
            cost,
        };

        setSections((prevSections) => {
            const updatedSections = [...prevSections];

            // Prevent duplicate entries
            const section = updatedSections[currentSectionIndex];
            const isDuplicate = section.items.some(
                (existingItem) => existingItem.title === selectedItem.title && existingItem.cost === selectedItem.cost
            );

            if (!isDuplicate) {
                section.items.push(selectedItem);
            }

            return updatedSections;
        });

        setTotalCost((prevTotal) => prevTotal + cost);
        setShowFavoritesPanel(false); // Close the favorites panel after selection
    };


    const filteredFavorites =
        currentCategory && favoriteItems[currentCategory.toLowerCase() + "s"]
            ? favoriteItems[currentCategory.toLowerCase() + "s"].filter((item) =>
                item.toLowerCase().includes(searchInput.toLowerCase())
            )
            : [];



    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {/* Main Content */}
                <div className="w-full max-w-[800px] mx-auto mt-10 flex flex-col rounded-xl">
                    <button
                        onClick={() => setShowPicker(!showPicker)}
                        className="mb-4 max-w-80 text-black bg-transparent border border-solid border-black border-2 hover:text-white hover:bg-black px-4 py-2 rounded-lg"
                    >
                        Select Date Range
                    </button>

                    {showPicker && (
                        <DateRangePicker
                            ranges={[{ ...dateRange, key: "selection" }]}
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                        />
                    )}

                    {showPicker && (
                        <div className="flex justify-end">
                            <button
                                onClick={generateSections}
                                className="mb-4 mb-4 max-w-80 text-black bg-transparent border border-solid border-black border-2 hover:text-white hover:bg-black px-4 py-2 rounded-lg"
                            >
                                Create Plan
                            </button>
                        </div>

                    )}

                    <div className="bg-gray-50 border rounded shadow-md max-h-[70vh] overflow-y-auto">
                        {sections.map((section, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    className="w-full text-left p-4 bg-white  hover:bg-gray-200 flex justify-between items-center rounded-lg"
                                    onClick={() => toggleSection(index)}
                                >
                                    <span>{section.title}</span>
                                    <span
                                        className={`transform ${openSection === index ? "rotate-90" : "rotate-0"}`}
                                    >
                                        <img src={ArrowIcon} alt="" />
                                    </span>
                                </button>
                                {openSection === index && (
                                    <div className="bg-white">
                                        {section.items.length > 0 ? (
                                            section.items.map((item, i) => (
                                                <div key={i} className="p-4 border-t border-gray-200">
                                                    <p className="font-medium">{item.title}</p>
                                                    <p className="text-sm text-gray-500">Cost: ${item.cost.toFixed(2)}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="p-4 text-gray-500">No items available</p>
                                        )}

                                        <div className="p-4">
                                            <button
                                                onClick={() => openFavoritesPanel("Hotel", index)}
                                                className=" px-4 py-2 font-semibold "
                                            >
                                                + Add Hotel
                                            </button>
                                            <button
                                                onClick={() => openFavoritesPanel("Restaurant", index)}
                                                className="px-4 py-2 font-semibold "
                                            >
                                                + Add Restaurant
                                            </button>
                                            <button
                                                onClick={() => openFavoritesPanel("Tour", index)}
                                                className="px-4 py-2 font-semibold"
                                            >
                                                + Add Tour
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Total Cost Section */}
            <div className="bg-gray-100 p-4 text-center border-t">
                <h2 className="text-lg font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
            </div>

            {/* Favorites Panel */}
            {showFavoritesPanel && (
                <div className="absolute top-0 right-0 h-full w-[30%] bg-white shadow-lg p-6">

                    <h2 className="text-lg font-bold mb-4 mt-20 text-4xl">Add Your Favourite {currentCategory}</h2>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder={`Search ${currentCategory}s`}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <input
                        type="number"
                        value={costInput}
                        onChange={(e) => setCostInput(e.target.value)}
                        placeholder="Enter cost"
                        className="w-full p-2 border rounded mb-4"
                    />
                    <ul className="mb-4">
                        {filteredFavorites.map((item, index) => (
                            <li key={index} className="mb-2 flex justify-between items-center">
                                <span>{item}</span>
                                <button
                                    onClick={() => handleAddFavorite(item)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Add
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setShowFavoritesPanel(false)}
                        className="mb-4 mb-4 max-w-80 text-black bg-transparent border border-solid border-black border-2 hover:text-white hover:bg-black px-4 py-2 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            )}

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2025 Travel Planner. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default DropDownList;
