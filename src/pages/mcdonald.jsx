import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";

const McDonald = () => {
  const [selectedCategory, setSelectedCategory] = useState("Offers");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const menuItems = {
    Burgers: [
      {
        id: "burger-1",
        name: "The Royale with Cheese",
        price: 8.99,
        image: "/Images/image1.jpg",
        category: "Burgers",
      },
      {
        id: "burger-2",
        name: "Big Mac Supreme",
        price: 10.99,
        image: "/Images/image2.jpg",
        category: "Burgers",
      },
      {
        id: "burger-3",
        name: "Double Quarter Pounder",
        price: 11.99,
        image: "/Images/image3.jpg",
        category: "Burgers",
      },
      {
        id: "burger-4",
        name: "McChicken Deluxe",
        price: 9.99,
        image: "/Images/image4.jpg",
        category: "Burgers",
      },
      {
        id: "burger-5",
        name: "The classics for 3",
        price: 23.1,
        image: "/Images/image5.jpg",
        category: "Burgers",
      },
      {
        id: "burger-6",
        name: "Spicy Zinger Burger",
        price: 18.49,
        image: "/Images/image6.jpg",
        category: "Burgers",
      },
    ],
    Fries: [
      {
        id: "fries-1",
        name: "Classic French Fries",
        price: 2.99,
        image: "/Images/fries1.jpg",
        category: "Fries",
      },
      {
        id: "fries-2",
        name: "Loaded Cheese Fries",
        price: 4.49,
        image: "/Images/fries2.jpg",
        category: "Fries",
      },
      {
        id: "fries-3",
        name: "Seasoned Curly Fries",
        price: 3.49,
        image: "/Images/fries3.jpg",
        category: "Fries",
      },
      {
        id: "fries-4",
        name: "Sweet Potato Fries",
        price: 3.99,
        image: "/Images/fries4.jpg",
        category: "Fries",
      },
      {
        id: "fries-5",
        name: "Waffle Fries",
        price: 3.79,
        image: "/Images/fries5.jpg",
        category: "Fries",
      },
    ],
    "Cold drinks": [
      {
        id: "colddrink-1",
        name: "Strawberry Pineapple Crush",
        price: 2.99,
        image: "/Images/colddrink1.jpg",
        category: "Cold drinks",
      },
      {
        id: "colddrink-2",
        name: "Sprite Refresh",
        price: 2.99,
        image: "/Images/colddrink2.jpg",
        category: "Cold drinks",
      },
      {
        id: "colddrink-3",
        name: "Fanta Orange",
        price: 2.99,
        image: "/Images/colddrink3.jpg",
        category: "Cold drinks",
      },
      {
        id: "colddrink-4",
        name: "Strawberry Cream Fizz",
        price: 2.49,
        image: "/Images/colddrink4.jpg",
        category: "Cold drinks",
      },
      {
        id: "colddrink-5",
        name: "Classic Milkshake",
        price: 3.49,
        image: "/Images/colddrink5.jpg",
        category: "Cold drinks",
      },
    ],
    Desserts: [
      {
        id: "desert-1",
        name: "Classic McFlurry",
        price: 3.99,
        image: "/Images/desert1.jpg",
        category: "Desserts",
      },
      {
        id: "desert-2",
        name: "Hot Fudge Sundae",
        price: 3.49,
        image: "/Images/desert2.jpg",
        category: "Desserts",
      },
      {
        id: "desert-3",
        name: "Apple Pie",
        price: 2.99,
        image: "/Images/desert3.jpg",
        category: "Desserts",
      },
    ],
  };

  const getFilteredItems = () => {
    if (!searchQuery) return null;

    const allItems = Object.values(menuItems).flat();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurant: "McDonald's East London",
      quantity: 1,
    });
  };

  console.log("McDonald component is rendering"); // Debug log

  useEffect(() => {
    console.log("McDonald component mounted"); // Debug log
    // Simulate loading time
  }, []);
  const offersRef = useRef(null);
  const burgersRef = useRef(null);
  const friesRef = useRef(null);
  const coldDrinksRef = useRef(null);
  const snacksRef = useRef(null);
  const saladsRef = useRef(null);
  const dessertsRef = useRef(null);
  const hotDrinksRef = useRef(null);
  // const saucesRef = useRef(null);
  // const happyMealRef = useRef(null);
  // const orbitRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Smooth scroll to sections based on category
    const refs = {
      Offers: offersRef,
      Burgers: burgersRef,
      Fries: friesRef,
      "Cold drinks": coldDrinksRef,
      Snacks: snacksRef,
      Salads: saladsRef,
      Desserts: dessertsRef,
      "Hot drinks": hotDrinksRef,
    };

    const targetRef = refs[category];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const categories = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold drinks",
    "Desserts",
    "Hot drinks",
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Main Banner Section */}
        <div className="mx-4 mt-4">
          <div className="bg-gray-100 rounded-xl shadow-md relative overflow-hidden">
            {/* Background burger image with transparency */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                src="/Images/mcmain_image.png"
                alt="Background burger"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 flex flex-col lg:flex-row items-start gap-6 relative z-10">
              {/* Left side content */}
              <div className="flex-1">
                <div className="mb-4 mt-20">
                  <span className="text-xs font-medium text-gray-500 mb-1 block">
                    I'm lovin' it!
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    McDonald's East London
                  </h1>
                </div>

                {/* Info badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#1a1a1a] text-white px-4 py-2.5 rounded-lg flex items-center gap-2">
                    <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-black">₹</span>
                    </div>
                    <span className="text-sm font-medium">
                      Minimum Order: 12 GBP
                    </span>
                  </div>
                  <div className="bg-[#1a1a1a] text-white px-4 py-2.5 rounded-lg flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-black">🚲</span>
                    </div>
                    <span className="text-sm font-medium">
                      Delivery in 20-25 Minutes
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side - Banner image with rating overlay */}
              <div className="relative shrink-0">
                <div className="w-[380px] h-[250px] rounded-xl overflow-hidden">
                  <img
                    src="/Images/mcmain_image.png"
                    alt="McDonald's burger and fries"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating card overlay */}
                <div
                  className="absolute bottom-0 bg-white rounded-lg p-2 shadow-lg"
                  style={{ left: "-20px" }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      3.4
                    </div>
                    <div className="flex gap-0.5 mb-1 justify-center">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-gray-300 text-xs">★</span>
                    </div>
                    <span className="text-xs text-gray-500">1,360 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open hours banner below the main banner */}
        <div className="mx-4 mt-0">
          <div className="bg-[#fa8232] text-white px-4 py-2 inline-flex items-center gap-2 rounded-lg text-sm shadow-lg ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              className="text-white"
            >
              <path
                d="M10 5V10L13 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="10"
                cy="10"
                r="7.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-medium">Open until 3:00 AM</span>
          </div>
        </div>

        {/* All Offers Section */}
        <div className="mx-4 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">
              All Offers from McDonald's East London
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search from menu..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="w-4 h-4 absolute left-3 top-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {/* Search Results */}
          {searchQuery && (
            <div className="mx-4 mt-4">
              {getFilteredItems()?.length > 0 ? (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">
                    Search Results
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredItems().map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-lg p-4 flex space-x-4 relative"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {item.name}
                          </h3>
                          <span className="text-xl font-bold text-gray-900">
                            GBP {item.price}
                          </span>
                        </div>
                        <div className="relative w-32 h-32">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-600 mt-4">
                  No items found matching your search.
                </p>
              )}
            </div>
          )}
          {/* Categories */}
          <div className="overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-3 whitespace-nowrap transition-colors text-sm font-medium ${
                    selectedCategory === category
                      ? "bg-black text-white rounded-lg"
                      : "text-gray-700 hover:bg-gray-100 rounded-lg"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>{" "}
          {/* Offers Section */}
          <div ref={offersRef} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* First Order Discount */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 md:h-56 lg:h-64">
                  <img
                    src="/Images/offer1.jpg"
                    alt="First Order Discount"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    -20%
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-16">
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        First Order Discount
                      </h3>
                      <div className="flex items-center text-white/90 gap-2 mt-1">
                        <span className="text-xs font-medium">
                          Valid until Nov 30
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-40 border-l-transparent border-b-40 border-b-black"></div>
                  </div>
                </div>
              </div>

              {/* Vegan Discount */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 md:h-56 lg:h-64">
                  <img
                    src="/Images/offer3.jpg"
                    alt="Vegan Discount"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    -20%
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-16">
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Vegan Discount
                      </h3>
                      <div className="flex items-center text-white/90 gap-2 mt-1">
                        <span className="text-xs font-medium">
                          Valid until Nov 30
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-40 border-l-transparent border-b-40 border-b-black"></div>
                  </div>
                </div>
              </div>

              {/* Free Ice Cream Offer */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 md:h-56 lg:h-64">
                  <img
                    src="/Images/offer2.jpg"
                    alt="Free Ice Cream Offer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    Free
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-16">
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Free Ice Cream Offer
                      </h3>
                      <div className="flex items-center text-white/90 gap-2 mt-1">
                        <span className="text-xs font-medium">
                          Valid until Nov 30
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-40 border-l-transparent border-b-40 border-b-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Burgers Section */}
          <div ref={burgersRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Burgers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* The Royale with Cheese */}
              <div className="bg-white rounded-lg py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 relative">
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    The Royale with Cheese
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A quarter-pound* of flame-grilled beef with melted American
                    cheese, crisp lettuce, and our signature royal sauce
                  </p>

                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.99
                  </span>
                </div>
                <div className="relative w-full sm:w-36 h-48 sm:h-36 shrink-0">
                  <img
                    src="/Images/image1.jpg"
                    alt="Royal Cheese Burger"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "burger-1",
                        name: "The Royale with Cheese",
                        price: 8.99,
                        image: "/Images/image1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Second Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Big Mac Supreme
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our signature Big Mac with extra toppings and special Big
                    Mac sauce
                  </p>

                  <span className="text-xl font-bold text-gray-900">
                    GBP 10.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image2.jpg"
                    alt="Big Mac Supreme"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "burger-2",
                        name: "Big Mac Supreme",
                        price: 10.99,
                        image: "/Images/image2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Third Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Double Quarter Pounder
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Two quarter-pound beef patties with cheese, onions, and
                    pickles
                  </p>

                  <span className="text-xl font-bold text-gray-900">
                    GBP 11.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image3.jpg"
                    alt="Double Quarter Pounder"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "burger-3",
                        name: "Double Quarter Pounder",
                        price: 11.99,
                        image: "/Images/image3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Fourth Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    McChicken Deluxe
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Premium chicken fillet with fresh lettuce, tomato, and mayo
                  </p>

                  <span className="text-xl font-bold text-gray-900">
                    GBP 9.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image4.jpg"
                    alt="McChicken Deluxe"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "burger-4",
                        name: "McChicken Deluxe",
                        price: 9.99,
                        image: "/Images/image4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Fifth Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    The classics for 3
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries, 3 cold drinks
                  </p>

                  <span className="text-xl font-bold text-gray-900">
                    GBP 23.10
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image5.jpg"
                    alt="Classics for 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "burger-5",
                        name: "The classics for 3",
                        price: 23.1,
                        image: "/Images/image5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* The classics for 3 - Third Row Third */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Spicy Zinger Burger
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Turn up the heat with our crispy, fiery chicken fillet,
                    topped with cool mayo and fresh lettuce on a soft toasted
                    bun — bold flavor in every bite!
                  </p>

                  <span className="text-xl font-bold text-gray-900">
                    GBP 18.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image6.jpg"
                    alt="The classics for 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "burger-6",
                        name: "Spicy Zinger Burger",
                        price: 18.49,
                        image: "/Images/image6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Fries Section */}
          <div ref={friesRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Fries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Classic French Fries */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Classic French Fries
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    World-famous golden fries, perfectly crispy on the outside,
                    fluffy on the inside. Made with premium potatoes.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/fries1.jpg"
                    alt="Classic French Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "fries-1",
                        name: "Classic French Fries",
                        price: 2.99,
                        image: "/Images/fries1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Loaded Cheese Fries */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Loaded Cheese Fries
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our signature fries topped with melted cheese sauce and
                    crispy bacon bits. A perfect indulgent treat.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/fries2.jpg"
                    alt="Loaded Cheese Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "fries-2",
                        name: "Loaded Cheese Fries",
                        price: 4.49,
                        image: "/Images/fries2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Seasoned Curly Fries */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Seasoned Curly Fries
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Spiral-cut fries with special seasoning blend. Extra crispy
                    and full of flavor in every twist.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/fries3.jpg"
                    alt="Seasoned Curly Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "fries-3",
                        name: "Seasoned Curly Fries",
                        price: 3.49,
                        image: "/Images/fries3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sweet Potato Fries */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Sweet Potato Fries
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Made with premium sweet potatoes, these fries offer a
                    perfect balance of sweet and savory flavors.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/fries4.jpg"
                    alt="Sweet Potato Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "fries-4",
                        name: "Sweet Potato Fries",
                        price: 3.99,
                        image: "/Images/fries4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Waffle Fries */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Waffle Fries
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Crispy waffle-cut potatoes with a unique texture. Perfect
                    for holding your favorite sauce in every bite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.79
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/fries5.jpg"
                    alt="Waffle Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "fries-5",
                        name: "Waffle Fries",
                        price: 3.79,
                        image: "/Images/fries5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Loaded Ranch Fries */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Loaded Ranch Fries
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Golden fries topped with creamy ranch sauce, fresh herbs,
                    and a sprinkle of special seasoning.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.29
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/fries6.jpg"
                    alt="Loaded Ranch Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "fries-6",
                        name: "Loaded Ranch Fries",
                        price: 4.29,
                        image: "/Images/fries6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Cold Drinks Section */}
          <div ref={coldDrinksRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Cold Drinks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Classic Coca-Cola */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Strawberry Pineapple Crush
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A tropical blend of strawberry and pineapple flavors,
                    perfectly balanced for a refreshing drink.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink1.jpg"
                    alt="Strawberry Pineapple Crush"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "colddrink-1",
                        name: "Strawberry Pineapple Crush",
                        price: 2.99,
                        image: "/Images/colddrink1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sprite Refresh */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Sprite Refresh
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Clear, crisp and clean tasting lemon-lime sparkling drink.
                    Perfect for a hot day.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink2.jpg"
                    alt="Sprite Refresh"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "colddrink-2",
                        name: "Sprite Refresh",
                        price: 2.99,
                        image: "/Images/colddrink2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Fanta Orange */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fanta Orange
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Bright, bubbly and full of orange flavor. A fruity burst of
                    refreshment in every sip.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink3.jpg"
                    alt="Fanta Orange"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "colddrink-3",
                        name: "Fanta Orange",
                        price: 2.99,
                        image: "/Images/colddrink3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Iced Tea */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Strawberry Cream Fizz
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A delightful blend of strawberry and cream flavors, served
                    over ice for a refreshing treat.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink4.jpg"
                    alt="Strawberry Cream Fizz"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "colddrink-4",
                        name: "Strawberry Cream Fizz",
                        price: 2.49,
                        image: "/Images/colddrink4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Milkshake */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Classic Milkshake
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Thick and creamy milkshake made with real dairy. Available
                    in chocolate, vanilla, or strawberry.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink5.jpg"
                    alt="Classic Milkshake"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "colddrink-5",
                        name: "Classic Milkshake",
                        price: 3.49,
                        image: "/Images/colddrink5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Smoothie */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fruit Smoothie
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Blended with real fruit and ice. Choose from mango passion,
                    berry blast, or tropical mix.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink6.jpg"
                    alt="Fruit Smoothie"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "colddrink-6",
                        name: "Fruit Smoothie",
                        price: 3.99,
                        image: "/Images/colddrink6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Snacks Section */}
          <div ref={snacksRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Snacks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Chicken McNuggets */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Berry Bliss Sundae
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A delightful blend of mixed berries topped with creamy
                    vanilla soft serve and a drizzle of berry sauce.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/snack1.jpg"
                    alt="Berry Bliss Sundae"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "snack-1",
                        name: "Berry Bliss Sundae",
                        price: 4.99,
                        image: "/Images/snack1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mozzarella Sticks */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Candyland Freak Shake
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A whimsical shake featuring a blend of strawberry and
                    vanilla ice cream, topped with whipped cream and colorful
                    sprinkles.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/snack2.jpg"
                    alt="Candyland Freak Shake"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "snack-2",
                        name: "Candyland Freak Shake",
                        price: 3.99,
                        image: "/Images/snack2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Onion Rings */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Nutella Waffle
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A delicious waffle drizzled with rich Nutella and topped
                    with fresh strawberries and whipped cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/snack3.jpg"
                    alt="Nutella Waffle"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "snack-3",
                        name: "Nutella Waffle",
                        price: 3.49,
                        image: "/Images/snack3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Chicken Wings */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Avocado Garden Toast
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Creamy avocado spread on toasted sourdough bread, topped
                    with cherry tomatoes and radish.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/snack4.jpg"
                    alt="Avocado Garden Toast"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "snack-4",
                        name: "Avocado Garden Toast",
                        price: 5.99,
                        image: "/Images/snack4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Jalapeno Poppers */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Classic Club Sandwich & Latte Combo
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A delicious combination of our classic club sandwich paired
                    with a rich latte.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/snack5.jpg"
                    alt="Classic Club Sandwich & Latte Combo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "snack-5",
                        name: "Classic Club Sandwich & Latte Combo",
                        price: 4.49,
                        image: "/Images/snack5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Potato Wedges */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Veggie Wrap Roll
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A delicious blend of fresh vegetables and creamy dressing,
                    all wrapped up in a soft tortilla.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/snack6.jpg"
                    alt="Veggie Wrap Roll"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "snack-6",
                        name: "Veggie Wrap Roll",
                        price: 3.99,
                        image: "/Images/snack6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Salads Section */}
          <div ref={saladsRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Salads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Garden Fresh Salad */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Garden Fresh Salad
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Crisp mixed greens, cherry tomatoes, cucumber, and carrots.
                    Served with your choice of dressing.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/salad1.jpg"
                    alt="Garden Fresh Salad"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "salad-1",
                        name: "Garden Fresh Salad",
                        price: 5.99,
                        image: "/Images/salad1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Grilled Chicken Caesar */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Grilled Chicken Caesar
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Romaine lettuce, grilled chicken breast, parmesan cheese,
                    and crunchy croutons with classic Caesar dressing.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 7.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/salad2.jpg"
                    alt="Grilled Chicken Caesar"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "salad-2",
                        name: "Grilled Chicken Caesar",
                        price: 7.99,
                        image: "/Images/salad2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mediterranean Delight */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Mediterranean Delight
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Mixed greens with feta cheese, olives, red onions, and bell
                    peppers. Served with Greek vinaigrette.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 6.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/salad3.jpg"
                    alt="Mediterranean Delight"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "salad-3",
                        name: "Mediterranean Delight",
                        price: 6.99,
                        image: "/Images/salad3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Asian Sesame Crunch */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Asian Sesame Crunch
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Fresh greens with mandarin oranges, crispy noodles, and
                    toasted almonds. Served with sesame ginger dressing.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 7.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/salad4.jpg"
                    alt="Asian Sesame Crunch"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "salad-4",
                        name: "Asian Sesame Crunch",
                        price: 7.49,
                        image: "/Images/salad4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Southwest Fiesta */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Southwest Fiesta
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Mixed greens with grilled chicken, corn, black beans,
                    tortilla strips, and chipotle ranch dressing.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/salad5.jpg"
                    alt="Southwest Fiesta"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "salad-5",
                        name: "Southwest Fiesta",
                        price: 8.49,
                        image: "/Images/salad5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Quinoa Power Bowl */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Quinoa Power Bowl
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Quinoa, mixed greens, roasted vegetables, avocado, and
                    chickpeas with lemon tahini dressing.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/salad6.jpg"
                    alt="Quinoa Power Bowl"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "salad-6",
                        name: "Quinoa Power Bowl",
                        price: 8.99,
                        image: "/Images/salad6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Desserts Section */}
          <div ref={dessertsRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Desserts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Classic McFlurry */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Classic McFlurry®
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Creamy vanilla soft serve blended with your choice of OREO®
                    cookies or M&M's® candies. A perfect sweet treat.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert1.jpg"
                    alt="Classic McFlurry"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "desert-1",
                        name: "Classic McFlurry",
                        price: 3.99,
                        image: "/Images/desert1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Hot Fudge Sundae */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Hot Fudge Sundae
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Creamy vanilla soft serve topped with rich hot fudge sauce
                    and chopped nuts. A classic favorite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert2.jpg"
                    alt="Hot Fudge Sundae"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "desert-2",
                        name: "Hot Fudge Sundae",
                        price: 3.49,
                        image: "/Images/desert2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Apple Pie */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Freshly Baked Apple Pie
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Crispy pastry filled with warm apple filling and a hint of
                    cinnamon. Served fresh from the oven.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert3.jpg"
                    alt="Apple Pie"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "desert-3",
                        name: "Apple Pie",
                        price: 2.99,
                        image: "/Images/desert3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Chocolate Brownie */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Triple Chocolate Brownie
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Rich, fudgy brownie packed with three types of chocolate.
                    Served warm with a scoop of vanilla ice cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert4.jpg"
                    alt="Chocolate Brownie"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "desert-4",
                        name: "Triple Chocolate Brownie",
                        price: 4.49,
                        image: "/Images/desert4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Strawberry Shake */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Choco Banana Delight
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Creamy made with real bananas and topped with whipped cream
                    and a cherry.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert5.jpg"
                    alt="Choco Banana Delight"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "desert-5",
                        name: "Choco Banana Delight",
                        price: 3.99,
                        image: "/Images/desert5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Caramel Sundae */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Caramel Delight Sundae
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Vanilla soft serve drizzled with warm caramel sauce and
                    topped with candied pecans.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert6.jpg"
                    alt="Caramel Sundae"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "desert-6",
                        name: "Caramel Delight Sundae",
                        price: 3.49,
                        image: "/Images/desert6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Hot Drinks Section */}
          <div ref={hotDrinksRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Hot drinks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Premium Coffee */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Premium Coffee
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Rich, freshly brewed coffee made from 100% Arabica beans.
                    Available in regular or decaf.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink2.jpg"
                    alt="Premium Coffee"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "hotdrink-1",
                        name: "Premium Coffee",
                        price: 2.49,
                        image: "/Images/hotdrink2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cappuccino */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Creamy Cappuccino
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Espresso topped with foamy milk and a sprinkle of cocoa
                    powder. The perfect balance of coffee and milk.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink1.jpg"
                    alt="Creamy Cappuccino"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "hotdrink-2",
                        name: "Creamy Cappuccino",
                        price: 3.49,
                        image: "/Images/hotdrink1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Caramel Latte */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Caramel Latte
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Smooth espresso and steamed milk flavored with caramel
                    syrup, topped with whipped cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink3.jpg"
                    alt="Caramel Latte"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "hotdrink-3",
                        name: "Caramel Latte",
                        price: 3.99,
                        image: "/Images/hotdrink3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Hot Chocolate */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Deluxe Hot Chocolate
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Rich and creamy hot chocolate topped with whipped cream and
                    chocolate drizzle.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.29
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink5.jpg"
                    alt="Deluxe Hot Chocolate"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "hotdrink-4",
                        name: "Deluxe Hot Chocolate",
                        price: 3.29,
                        image: "/Images/hotdrink5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Green Tea */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Premium Green Tea
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    High-quality Japanese green tea, perfectly steeped for a
                    refreshing and healthy drink.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink4.jpg"
                    alt="Premium Green Tea"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "hotdrink-5",
                        name: "Premium Green Tea",
                        price: 2.99,
                        image: "/Images/hotdrink4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Herbal Tea */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Herbal Tea Selection
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Choose from our selection of caffeine-free herbal teas
                    including chamomile, peppermint, and berry blend.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.79
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink6.webp"
                    alt="Herbal Tea Selection"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "hotdrink-6",
                        name: "Herbal Tea Selection",
                        price: 2.79,
                        image: "/Images/hotdrink6.webp",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Restaurant Information Section */}
          <div className="mt-16 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Delivery Information Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🚚</span> Delivery Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">
                      If you have allergies or other dietary restrictions,
                      please contact the restaurant. The restaurant will provide
                      food-specific information upon request.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      Estimated time until delivery:
                    </p>
                    <p className="text-blue-600">20 min</p>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">📞</span> Contact Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Phone number</p>
                    <p className="text-blue-600">+934443-43</p>
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <a
                      href="http://mcdonalds.uk/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://mcdonalds.uk/
                    </a>
                  </div>
                </div>
              </div>

              {/* Operational Times Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🕒</span> Operational Times
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday:</span>
                    <span>8:00 AM–3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuesday:</span>
                    <span>8:00 AM–3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wednesday:</span>
                    <span>8:00 AM–3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thursday:</span>
                    <span>8:00 AM–3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Friday:</span>
                    <span>8:00 AM–3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span>8:00 AM–3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span>8:00 AM–12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Customer Reviews Section */}
          <div className="mt-16 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Customer Reviews
                </h2>
                <div className="flex space-x-2">
                  <button
                    className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label="Previous review"
                  >
                    <span className="text-2xl">&lsaquo;</span>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label="Next review"
                  >
                    <span className="text-2xl">&rsaquo;</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Review Card 1 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">St Glx</h3>
                      <p className="text-orange-500">South London</p>
                    </div>
                    <div className="ml-auto text-gray-400">
                      24th September, 2023
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index} className="text-orange-500">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    The positive aspect was undoubtedly the efficiency of the
                    service. The queue moved quickly, the staff was friendly,
                    and the food was up to the usual McDonald's standard – hot
                    and satisfying.
                  </p>
                </div>

                {/* Review Card 2 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">St Glx</h3>
                      <p className="text-orange-500">South London</p>
                    </div>
                    <div className="ml-auto text-gray-400">
                      24th September, 2023
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index} className="text-orange-500">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    The positive aspect was undoubtedly the efficiency of the
                    service. The queue moved quickly, the staff was friendly,
                    and the food was up to the usual McDonald's standard – hot
                    and satisfying.
                  </p>
                </div>

                {/* Review Card 3 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">St Glx</h3>
                      <p className="text-orange-500">South London</p>
                    </div>
                    <div className="ml-auto text-gray-400">
                      24th September, 2023
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index} className="text-orange-500">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    The positive aspect was undoubtedly the efficiency of the
                    service. The queue moved quickly, the staff was friendly,
                    and the food was up to the usual McDonald's standard – hot
                    and satisfying.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Similar Restaurants Section */}
          <div className="mt-16 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Similar Restaurants
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* McDonald's */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar1.jpg"
                    alt="McDonald's London"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">McDonald's London</p>
                </div>

                {/* Papa John's */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar2.jpg"
                    alt="Papa Johns"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Papa Johns</p>
                </div>

                {/* KFC */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar6.svg"
                    alt="KFC West London"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">KFC West London</p>
                </div>

                {/* Texas Chicken */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar3.jpg"
                    alt="Texas Chicken"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Texas Chicken</p>
                </div>

                {/* Burger King */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar5.png"
                    alt="Burger King"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Burger King</p>
                </div>

                {/* Shawarma */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar4.jpg"
                    alt="Shaurma 1"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Shaurma 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default McDonald;
