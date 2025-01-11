import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, eachDayOfInterval } from "date-fns";
import ArrowIcon from '../../assets/icons/weui_arrow-filled.png';
import ApiService from '../../service/ApiService';

const DropDownList = () => {
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

                const hotelTitles = hotelData.map((hotel) => hotel.title);
                const restaurantTitles = restaurantData.map((restaurant) => restaurant.title);
                const tourTitles = tourData.map((tour) => tour.title);

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
        setShowPicker(false);
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
        setShowFavoritesPanel(false);
    };

    const handleSavePlan = async () => {
        const formattedSections = sections.map((section) =>
            section.items.map((item) => [section.title, item.title, item.cost])
        );

        const travelPlan = {
            userId: "user12345", // Replace this with a dynamic userId if needed
            sections: formattedSections,
            totalCost,
        };

        console.log(travelPlan);

        try {
            await ApiService.saveTravelPlan(travelPlan); // API method to save the plan
            alert("Travel plan saved successfully!");
        } catch (error) {
            console.error("Error saving travel plan", error);
            alert("Failed to save travel plan.");
        }
    };

    const filteredFavorites =
        currentCategory && favoriteItems[currentCategory.toLowerCase() + "s"]
            ? favoriteItems[currentCategory.toLowerCase() + "s"].filter((item) =>
                item.toLowerCase().includes(searchInput.toLowerCase())
            )
            : [];

    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-center font-bold text-2xl my-4">Plan and Organize your Destinations</h1>
            <div className="flex-grow">
                <div className="w-full max-w-[800px] mx-auto mt-10 flex flex-col rounded-xl">
                    <button
                        onClick={() => setShowPicker(!showPicker)}
                        className="mb-4 max-w-80 text-black bg-transparent border hover:bg-black hover:text-white border-black px-4 py-2 rounded-lg"
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
                                className="mb-4 text-black bg-transparent border hover:bg-black hover:text-white   border-black px-4 py-2 rounded-lg"
                            >
                                Create Plan
                            </button>
                        </div>
                    )}

                    <div className="bg-gray-50 border rounded shadow-md max-h-[70vh] overflow-y-auto">
                        {sections.map((section, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    className="w-full text-left p-4 bg-white hover:bg-gray-200 flex justify-between items-center rounded-lg"
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
                                                className="px-4 py-2 font-semibold"
                                            >
                                                + Add Hotel
                                            </button>
                                            <button
                                                onClick={() => openFavoritesPanel("Restaurant", index)}
                                                className="px-4 py-2 font-semibold"
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

            <div className="bg-gray-100 p-4 text-center border-t flex items-center justify-center">
                <h2 className="text-lg font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
                <button
                    onClick={handleSavePlan}
                    className="ms-8 text-black font-bold hover:text-white hover:bg-black bg-transparent border border-black px-4 py-2 rounded-lg"
                >
                    Save Plan
                </button>
            </div>

            {showFavoritesPanel && (
                <div className="absolute top-0 right-0 h-full w-[30%] bg-white shadow-lg p-6">
                    <h2 className="text-lg font-bold mb-4 mt-20 text-4xl">Add Your Favourite {currentCategory}</h2>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder={`Search ${currentCategory}s`}
                        className="w-full p-4  mb-4 border rounded rounded-2xl border-solid border-2 border-black"
                    />
                    <input
                        type="number"
                        value={costInput}
                        onChange={(e) => setCostInput(e.target.value)}
                        placeholder="Enter cost"
                        className="w-full p-4 border mb-4  border-solid border-0 border-b-2"
                    />
                    <ul className="mb-4">
                        {filteredFavorites.map((item, index) => (
                            <li key={index} className="mb-2 flex justify-between items-center">
                                <span>{item}</span>
                                <button
                                    onClick={() => handleAddFavorite(item)}
                                    className="hover:bg-black hover:text-white bg-white text-black px-2 py-1 rounded"
                                >
                                    <div>
                                        +
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setShowFavoritesPanel(false)}
                        className="text-black bg-transparent border border-black px-4 py-2 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default DropDownList;
