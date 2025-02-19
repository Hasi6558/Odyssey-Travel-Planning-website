import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, eachDayOfInterval } from "date-fns";
import ArrowIcon from '../../assets/icons/weui_arrow-filled.png';
import ApiService from '../../service/ApiService';
import ConfirmBox from "../../component/boxes/ConfirmBox";

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
    const [draftName, setDraftName] = useState("");
    const [costInput, setCostInput] = useState("");
    const [favoriteItems, setFavoriteItems] = useState({
        hotels: [],
        restaurants: [],
        tours: [],
    });
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDraftName = (e) => {
        const name = e.target.value;
        setDraftName(name);

    }


    useEffect(() => {
        if (userId == undefined) {
            navigate('/login');
        }
        const fetchData = async () => {
            try {

                const favouriteHotelsData = await ApiService.getFavouritesByUserIdAndItemType(userId, "hotel", token);
                const favouriteRestaurantsData = await ApiService.getFavouritesByUserIdAndItemType(userId, "restaurant", token);
                const favouriteToursData = await ApiService.getFavouritesByUserIdAndItemType(userId, "tour", token);

                const hotelIds = favouriteHotelsData.map(item => item.itemId);
                const restaurantIds = favouriteRestaurantsData.map(item => item.itemId);
                const tourIds = favouriteToursData.map(item => item.itemId);

                const hotelPromises = hotelIds.map(id => ApiService.getHotelById(id));
                const restaurantPromises = restaurantIds.map(id => ApiService.getRestaurantById(id));
                const tourPromises = tourIds.map(id => ApiService.getTourById(id));

                const hotelData = await Promise.all(hotelPromises);
                const restaurantData = await Promise.all(restaurantPromises);
                const tourData = await Promise.all(tourPromises);

                setFavoriteItems({
                    hotels: hotelData,
                    restaurants: restaurantData,
                    tours: tourData,
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
        console.log("category", favoriteItems);
    };

    const handleCancel = () => {
        setSelectedFavourite(null);
        setCostInput("");
        setSearchInput("");
        setShowConfirm(false);
    }
    const [selectedFavourite, setSelectedFavourite] = useState(null);
    const selectFavourite = (item) => {
        if (item != "none") {
            favoriteItems[currentCategory.toLowerCase() + "s"].forEach((fav) => {
                if (fav.id === item) {
                    setSelectedFavourite(fav);
                    setCostInput(fav?.minSpend || 0);
                }
            });
        } else {
            setSelectedFavourite(null);
            setCostInput("");
        }
    }
    const handleAddFavorite = () => {
        const cost = parseFloat(costInput) || 0;

        if (cost <= 0) {
            alert("Please enter a valid cost.");
            return;
        }

        const selectedItem = {
            title: `${currentCategory}: ${selectedFavourite.title}`,
            cost,
        };
        setSelectedFavourite(null);
        setCostInput("");
        setSearchInput("");



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
        if (draftName) {
            const formattedSections = sections.map((section) =>
                section.items.map((item) => [section.title, item.title, item.cost])
            );

            const noOfSections = sections.length;

            const draftSavingTime = new Date().toISOString();

            const travelPlan = {
                userId: userId,
                draftName,
                sections: formattedSections,
                totalCost,
                noOfSections,
                draftSavingTime,
            };

            console.log(travelPlan);

            try {
                await ApiService.saveTravelPlan(travelPlan);
                alert("Travel plan saved successfully!");
            } catch (error) {
                console.error("Error saving travel plan", error);
                alert("Failed to save travel plan.");
            }

        } else {
            alert("Please enter a draft name!");
        }
        setShowConfirm(false);
    };


    const filteredFavorites =
        currentCategory && favoriteItems[currentCategory.toLowerCase() + "s"]
            ? favoriteItems[currentCategory.toLowerCase() + "s"].filter((item) =>
                item?.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            : [];

    return (
        <div className="flex flex-col min-h-screen bg-white max-w-fit m-auto p-8 px-16 mb-8  mt-4 rounded-2xl">
            <h1 className="text-center font-bold text-4xl mb-4 mt-8 ">Plan and Organize your Destinations</h1>
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
                            minDate={new Date()}
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

            <div className="bg-gray-100 p-4 text-center border-t flex items-center justify-center rounded-lg">
                <h2 className="text-lg font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
                <div >
                    <input type="text" placeholder="enter the draft name " className="ms-8 me-0 border-none p-2 rounded-xl ps-4" onChange={handleDraftName} />

                </div>
                <button
                    onClick={() => setShowConfirm(true)}
                    className="ms-8 rounded-2xl text-black font-bold hover:text-white hover:bg-black bg-transparent border border-black px-4 py-2 rounded-lg"
                >
                    Draft
                </button>
            </div>

            {showFavoritesPanel && (
                <div className="absolute top-0 right-0 h-full w-[30%] bg-white shadow-lg p-6 opacity-90">
                    <h2 className="font-bold mb-4 mt-20 text-4xl">Add Your Favourite {currentCategory}</h2>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder={`Search ${currentCategory}s`}
                        className="w-full p-4  mb-4 rounded-2xl border-solid border-2 border-black"
                    />
                    {searchInput && (
                        <div>
                            {filteredFavorites && (
                                <ul className="mb-4">
                                    {filteredFavorites.map((item, index) => (
                                        <li key={index} className="mb-2 flex justify-between items-center cursor-pointer" onClick={() => selectFavourite(item.id)}>
                                            <span>{item.title}</span>
                                            <span>+</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {filteredFavorites.length === 0 && (
                                <p className="text-center mb-2 font-semibold">Nothing in your favourites named "{searchInput}"</p>
                            )}
                        </div>
                    )}
                    {searchInput === "" && (
                        <select name="select_fav" id="select_fav" onChange={(e) => selectFavourite(e.target.value)} className="w-full p-4 mb-4  border-solid border-0 border-b-2">
                            <option value="none">Select Favourite</option>
                            {filteredFavorites.map((item, index) => (
                                <option key={index} value={item?.id}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    )}
                    {selectedFavourite != null && (
                        <input
                            type="number"
                            value={costInput}
                            min={0}
                            onChange={(e) => setCostInput(e.target.value)}
                            placeholder="Enter cost"
                            className="w-full p-4 mb-4  border-solid border-0 border-b-2"
                        />
                    )}
                    {/* <input
                        type="number"
                        value={costInput}
                        onChange={(e) => setCostInput(e.target.value)}
                        placeholder="Enter cost"
                        className="w-full p-4 border mb-4  border-solid border-0 border-b-2"
                    /> */}
                    {/* <ul className="mb-4">
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
                    </ul> */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleAddFavorite}
                            disabled={costInput == "" || selectedFavourite === null}
                            className="text-white bg-blue-600 px-4 py-2 rounded-lg disabled:opacity-50">
                            Add
                        </button>
                        <button
                            onClick={() => setShowFavoritesPanel(false)}
                            className="text-black bg-transparent border border-black px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {showConfirm && (
                <ConfirmBox
                    message="Are you sure you want to save?"
                    onConfirm={handleSavePlan}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default DropDownList;
