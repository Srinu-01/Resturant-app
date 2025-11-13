import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import axiosInstance from "../api/axios";

const KFC = () => {
  console.log("KFC component is rendering");
  const [selectedCategory, setSelectedCategory] = useState("Offers");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        setLoading(true);
        // Assuming KFC has an ID of 1 in the database, adjust as needed
        const response = await axiosInstance.get('/restaurants/1');
        setRestaurantData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching restaurant data:', err);
        setError('Failed to load restaurant data. Showing fallback menu.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantData();
  }, []);

  // Fallback menu data used when API fails or as initial data
   const menuItems = {
    Burgers: [
      { id: "kfc-burger-1", name: "The Royale with Cheese", price: 8.99, image: "/Images/image1.jpg", category: "Burgers", description: "A quarter-pound* of flame-grilled beef with melted American cheese" },
      { id: "kfc-burger-2", name: "Big Mac Supreme", price: 10.99, image: "/Images/image2.jpg", category: "Burgers", description: "Our signature Big Mac with extra toppings" },
      { id: "kfc-burger-3", name: "Double Quarter Pounder", price: 11.99, image: "/Images/image3.jpg", category: "Burgers", description: "Two quarter-pound beef patties" },
      { id: "kfc-burger-4", name: "McChicken Deluxe", price: 9.99, image: "/Images/image4.jpg", category: "Burgers", description: "Premium chicken fillet with fresh lettuce" },
      { id: "kfc-burger-5", name: "The classics for 3", price: 23.1, image: "/Images/image5.jpg", category: "Burgers", description: "Combo meal for three" },
      { id: "kfc-burger-6", name: "Spicy Zinger Burger", price: 18.49, image: "/Images/image6.jpg", category: "Burgers", description: "Crispy, fiery chicken fillet" },
    ],
    Sandwiches: [
      { id: "kfc-sandwich-1", name: "Green Garden Crunch", price: 4.99, image: "/Images/sandwich1.jpg", category: "Sandwiches", description: "Plant-powered sandwich with fresh veggies" },
      { id: "kfc-sandwich-2", name: "Mediterranean Melt", price: 3.49, image: "/Images/sandwich2.jpg", category: "Sandwiches", description: "Grilled panini with sun-dried tomatoes" },
      { id: "kfc-sandwich-3", name: "The Elvis panini", price: 5.0, image: "/Images/sandwich3.jpg", category: "Sandwiches", description: "Panini with peanut butter and bananas" },
      { id: "kfc-sandwich-4", name: "Ham & Cheese Classic", price: 3.99, image: "/Images/sandwich4.jpg", category: "Sandwiches", description: "Grilled sandwich with melted cheese and ham" },
      { id: "kfc-sandwich-5", name: "Cheesy Sausage Melt", price: 5.79, image: "/Images/sandwich5.jpg", category: "Sandwiches", description: "Grilled sandwich with gooey melted cheese" },
      { id: "kfc-sandwich-6", name: "Deli Stack Sub", price: 3.29, image: "/Images/sandwich6.jpg", category: "Sandwiches", description: "Classic sub loaded with ham and salami" },
    ],
    Buckets: [
      { id: "kfc-bucket-1", name: "Fried Chicken Bucket", price: 5.99, image: "/Images/bucket1.jpg", category: "Buckets", description: "Signature fried chicken bucket" },
      { id: "kfc-bucket-2", name: "Drumstick Bucket", price: 10.0, image: "/Images/bucket2.jpg", category: "Buckets", description: "Bucket of golden drumsticks" },
      { id: "kfc-bucket-3", name: "Ultimate Chicken Bucket", price: 8.99, image: "/Images/bucket3.jpg", category: "Buckets", description: "Overflowing bucket of crispy chicken" },
      { id: "kfc-bucket-4", name: "Ultimate Savings Bucket", price: 7.49, image: "/Images/bucket4.jpg", category: "Buckets", description: "Value-packed bucket" },
      { id: "kfc-bucket-5", name: "Spicy Drumstick Bucket", price: 6.49, image: "/Images/bucket5.jpg", category: "Buckets", description: "Fiery bucket with bold seasoning" },
      { id: "kfc-bucket-6", name: "Chicken & Pepsi Combo", price: 3.99, image: "/Images/bucket6.jpg", category: "Buckets", description: "Crispy chicken paired with Pepsi" },
    ],
    "Rice Bowls": [
      { id: "kfc-ricebowl-1", name: "Crispy Chicken Rice Bowl", price: 5.99, image: "/Images/ricebowl1.jpg", category: "Rice Bowls", description: "Rice bowl topped with golden fried chicken" },
      { id: "kfc-ricebowl-2", name: "Spicy Drumstick Rice Bowl", price: 7.99, image: "/Images/ricebowl2.jpg", category: "Rice Bowls", description: "Seasoned rice with crispy drumstick" },
      { id: "kfc-ricebowl-3", name: "Zesty Chicken Veg Bowl", price: 6.99, image: "/Images/ricebowl3.jpg", category: "Rice Bowls", description: "Rice bowl with crispy chicken and fresh veggies" },
      { id: "kfc-ricebowl-4", name: "Chicken Finger Rice Bowl", price: 7.49, image: "/Images/ricebowl4.jpg", category: "Rice Bowls", description: "Seasoned rice with crispy chicken fingers" },
      { id: "kfc-ricebowl-5", name: "Crunchy Bowl Delight", price: 8.49, image: "/Images/ricebowl5.jpg", category: "Rice Bowls", description: "Crispy edible bowl filled with seasoned rice" },
      { id: "kfc-ricebowl-6", name: "Fiesta Chicken Rice Bowl", price: 8.99, image: "/Images/ricebowl6.jpg", category: "Rice Bowls", description: "Colorful rice bowl topped with juicy chicken" },
    ],
    Desserts: [
      { id: "kfc-dessert-1", name: "Classic McFlurry", price: 3.99, image: "/Images/desert1.jpg", category: "Desserts", description: "Vanilla soft serve blended with cookies or candies" },
      { id: "kfc-dessert-2", name: "Hot Fudge Sundae", price: 3.49, image: "/Images/desert2.jpg", category: "Desserts", description: "Vanilla soft serve topped with hot fudge" },
      { id: "kfc-dessert-3", name: "Apple Pie", price: 2.99, image: "/Images/desert3.jpg", category: "Desserts", description: "Crispy pastry filled with warm apple filling" },
      { id: "kfc-dessert-4", name: "Triple Chocolate Brownie", price: 4.49, image: "/Images/desert4.jpg", category: "Desserts", description: "Rich fudgy brownie with three types of chocolate" },
      { id: "kfc-dessert-5", name: "Choco Banana Delight", price: 3.99, image: "/Images/desert5.jpg", category: "Desserts", description: "Shake made with real bananas" },
      { id: "kfc-dessert-6", name: "Caramel Delight Sundae", price: 3.49, image: "/Images/desert6.jpg", category: "Desserts", description: "Vanilla soft serve with warm caramel" },
    ],
    "Hot drinks": [
      { id: "kfc-hotdrink-1", name: "Premium Coffee", price: 2.49, image: "/Images/hotdrink2.jpg", category: "Hot drinks", description: "Rich freshly brewed coffee" },
      { id: "kfc-hotdrink-2", name: "Creamy Cappuccino", price: 3.49, image: "/Images/hotdrink1.jpg", category: "Hot drinks", description: "Espresso topped with foamy milk" },
      { id: "kfc-hotdrink-3", name: "Caramel Latte", price: 3.99, image: "/Images/hotdrink3.jpg", category: "Hot drinks", description: "Espresso with caramel syrup" },
      { id: "kfc-hotdrink-4", name: "Deluxe Hot Chocolate", price: 3.29, image: "/Images/hotdrink5.jpg", category: "Hot drinks", description: "Rich and creamy hot chocolate" },
      { id: "kfc-hotdrink-5", name: "Premium Green Tea", price: 2.99, image: "/Images/hotdrink4.jpg", category: "Hot drinks", description: "High-quality green tea" },
      { id: "kfc-hotdrink-6", name: "Herbal Tea Selection", price: 2.79, image: "/Images/hotdrink6.webp", category: "Hot drinks", description: "Caffeine-free herbal teas" },
    ],
  };

  const getFilteredItems = () => {
    if (!searchQuery) return null;
    
    // Use API data if available, otherwise use fallback data
    const items = restaurantData?.menu || Object.values(menuItems).flat();
    const s = searchQuery.toLowerCase();
    
    return items.filter(item => (
      item.name.toLowerCase().includes(s) ||
      (item.description && item.description.toLowerCase().includes(s)) ||
      (item.category && item.category.toLowerCase().includes(s)) ||
      String(item.price).includes(s)
    ));
  };

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurant: restaurantData?.name || "KFC East London",
      quantity: 1,
    });
  };

  const offersRef = useRef(null);
  const burgersRef = useRef(null);
  const sandwichesRef = useRef(null);
  const bucketsRef = useRef(null);
  const riceBowlsRef = useRef(null);
  const dessertsRef = useRef(null);
  const hotDrinksRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Smooth scroll to sections based on category
    const refs = {
      Offers: offersRef,
      Burgers: burgersRef,
      Sandwiches: sandwichesRef,
      Buckets: bucketsRef,
      "Rice Bowls": riceBowlsRef,
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
    "Sandwiches",
    "Buckets",
    "Rice Bowls",
    "Desserts",
    "Hot drinks",
  ];

  // Simple test return (commented out)
  /*
  return (
    <div>
      <h1>KFC Page Test</h1>
      <p>If you can see this, the component is working!</p>
    </div>
  );
  */

  // Original complex return
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Main Banner Section */}
        <div className="mx-4 mt-4">
          <div className="bg-gray-100 rounded-xl shadow-md relative overflow-hidden">
            {/* Background burger image with transparency */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                src="/Images/similar6.svg"
                alt="Background burger"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 flex flex-col lg:flex-row items-start gap-6 relative z-10">
              {/* Left side content */}
              <div className="flex-1">
                <div className="mb-4 mt-20">
                  <span className="text-xs font-medium text-gray-500 mb-1 block">
                    Your Bucket. Your Way. EveryDay.
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    KFC East London
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
                    src="/Images/similar6.svg"
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
                      3.8
                    </div>
                    <div className="flex gap-0.5 mb-1 justify-center">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-gray-300 text-xs">★</span>
                    </div>
                    <span className="text-xs text-gray-500">1,460 reviews</span>
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
              All Offers from KFC East London
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
                  <h2 className="text-2xl font-bold text-black mb-6">Search Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredItems().map((item) => (
                      <div key={item.id} className="bg-white rounded-lg p-4 flex space-x-4 relative">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              {item.name}
                            </h3>
                            <span className="text-sm font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded">
                              {item.category}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">
                              {item.price === 0 ? "Special Offer" : `GBP ${item.price}`}
                            </span>
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="relative w-32 h-32 shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-600 mt-4">No items found matching your search.</p>
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
                        id: "kfc-burger-1",
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
                        id: "kfc-burger-2",
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
                        id: "kfc-burger-3",
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
                        id: "kfc-burger-4",
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
                        id: "kfc-burger-5",
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
                    Turn up the heat with our crispy, fiery chicken fillet, topped with cool mayo and fresh lettuce on a soft toasted bun — bold flavor in every bite!
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
                        id: "kfc-burger-6",
                        name: "Spicy Zinger Burger",
                        price: 18.49,
                        image: "/Images/image6.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* sandwich Section */}
          <div ref={sandwichesRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Sandwich
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* sandwich */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Green Garden Crunch
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A vibrant, plant-powered sandwich stacked with fresh
                    veggies, creamy avocado spread, and multigrain goodness for
                    a wholesome bite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich1.jpg"
                    alt="Green Garden Crunch"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-sandwich-1",
                        name: "Green Garden Crunch",
                        price: 4.99,
                        image: "/Images/sandwich1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/*  sandwich */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Mediterranean Melt
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our grilled panini layered with sun-dried tomatoes,
                    artichokes, greens, and melted cheese. A bold, savory
                    indulgence.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich2.jpg"
                    alt="Loaded Cheese Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-sandwich-2",
                        name: "Mediterranean Melt",
                        price: 3.49,
                        image: "/Images/sandwich2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* sandwich */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    The Elvis panini
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our signature panini featuring warm melted peanut butter and
                    freshly sliced bananas. A simple yet scrumptious
                    combination.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.00
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich3.jpg"
                    alt="Seasoned Curly Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-sandwich-3",
                        name: "The Elvis panini",
                        price: 5.0,
                        image: "/Images/sandwich3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* sandwich */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ham & Cheese Classic
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our grilled sandwich with melted cheese and savory ham. A
                    timeless favorite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich4.jpg"
                    alt="Sweet Potato Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-sandwich-4",
                        name: "Ham & Cheese Classic",
                        price: 3.99,
                        image: "/Images/sandwich4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* sandwich */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Cheesy Sausage Melt
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our grilled sandwich packed with gooey melted cheese and
                    savory sausage. A bold twist on classic comfort.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.79
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich5.jpg"
                    alt="Waffle Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-sandwich-5",
                        name: "Cheesy Sausage Melt",
                        price: 5.79,
                        image: "/Images/sandwich5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* sandwich */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Deli Stack Sub
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our classic sub loaded with ham, salami, fresh veggies, and
                    bold seasoning. A hearty bite that hits the spot.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.29
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich6.jpg"
                    alt="Loaded Ranch Fries"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-sandwich-6",
                        name: "Deli Stack Sub",
                        price: 3.29,
                        image: "/Images/sandwich6.jpg",
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
          {/* Buckets*/}
          <div ref={bucketsRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Buckets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* buckets*/}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fried Chicken Bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our bucket of signature fried chicken with a delightfully
                    crispy seasoned coating. A classic choice.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/bucket1.jpg"
                    alt="Fried Chicken Bucket"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-bucket-1",
                        name: "Fried Chicken Bucket",
                        price: 5.99,
                        image: "/Images/bucket1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* bucket2 */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Drumstick Bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our bucket packed with crispy golden drumsticks, seasoned to
                    perfection. A finger-lickin’ favorite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 10.00
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/bucket2.jpg"
                    alt="Sprite Refresh"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-bucket-2",
                        name: "Drumstick Bucket",
                        price: 10.0,
                        image: "/Images/bucket2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* bucket3 */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ultimate Chicken Bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our overflowing bucket of crispy fried chicken—golden,
                    juicy, and seasoned to perfection. It’s finger lickin’ good!
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/bucket3.jpg"
                    alt="Fanta Orange"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-bucket-3",
                        name: "Ultimate Chicken Bucket",
                        price: 8.99,
                        image: "/Images/bucket3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* bucket4*/}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ultimate Savings Bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our value-packed bucket with crispy fried chicken, chilled
                    soft drinks, and tasty dips. The perfect feast for sharing.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 7.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/bucket4.jpg"
                    alt="Fresh Iced Tea"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-bucket-4",
                        name: "Ultimate Savings Bucket",
                        price: 7.49,
                        image: "/Images/colddrink4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* bucket5 */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Spicy Drumstick Bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our fiery bucket of crispy chicken drumsticks with bold
                    seasoning and a spicy kick. Heat lovers, rejoice!
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 6.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/bucket5.jpg"
                    alt="Classic Milkshake"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-bucket-5",
                        name: "Spicy Drumstick Bucket",
                        price: 6.49,
                        image: "/Images/bucket5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* bucket6 */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Chicken & Pepsi Combo
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our crispy fried chicken paired with chilled Pepsi and tasty
                    dips. The ultimate meal for flavor and refreshment.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/bucket6.jpg"
                    alt="Fruit Smoothie"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-bucket-6",
                        name: "Chicken & Pepsi Combo",
                        price: 3.99,
                        image: "/Images/bucket6.jpg",
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
          {/* ricebowls*/}
          <div ref={riceBowlsRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Rice Bowls
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Garden Fresh Salad */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Crispy Chicken Rice Bowl
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our hearty rice bowl topped with golden fried chicken and
                    flavorful herbs. A satisfying meal in every bite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/ricebowl1.jpg"
                    alt="Garden Fresh Salad"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-ricebowl-1",
                        name: "Crispy Chicken Rice Bowl",
                        price: 5.99,
                        image: "/Images/ricebowl1.jpg",
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
                    Spicy Drumstick Rice Bowl
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our seasoned yellow rice topped with a crispy fried
                    drumstick and green chili slices. Bold flavor in every bite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 7.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/ricebowl2.jpg"
                    alt="Grilled Chicken Caesar"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-ricebowl-2",
                        name: "Spicy Drumstick Rice Bowl",
                        price: 7.99,
                        image: "/Images/ricebowl2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ricebowl */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Zesty Chicken Veg Bowl
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our vibrant rice bowl topped with crispy chicken, fresh
                    veggies, and creamy drizzle. A bold mix of crunch and
                    flavor.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 6.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/ricebowl3.jpg"
                    alt="Mediterranean Delight"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-ricebowl-3",
                        name: "Zesty Chicken Veg Bowl",
                        price: 6.99,
                        image: "/Images/ricebowl3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ricebowl */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Chicken Finger Rice Bowl
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our seasoned rice served with crispy chicken fingers and
                    flavorful sauces. A crunchy, comforting combo.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 7.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/ricebowl4.jpg"
                    alt="Asian Sesame Crunch"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                  onClick={() =>
                      handleAddToCart({
                        id: "kfc-ricebowl-4",
                        name: "Chicken Finger Rice Bowl",
                        price: 7.49,
                        image: "/Images/ricebowl4.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
                    +
                  </button>
                </div>
              </div>

              {/* ricebowl*/}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Crunchy Bowl Delight
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our crispy edible bowl filled with seasoned rice, golden
                    chicken, and zesty sauce. A flavorful fusion in every bite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/ricebowl5.jpg"
                    alt="Southwest Fiesta"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                  onClick={() =>
                      handleAddToCart({
                        id: "kfc-ricebowl-5",
                        name: "Crunchy Bowl Delight",
                        price: 8.99,
                        image: "/Images/ricebowl5.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
                    +
                  </button>
                </div>
              </div>

              {/* rice bowl */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fiesta Chicken Rice Bowl
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our colorful rice bowl topped with juicy chicken, bell
                    peppers, onions, cheese, and zesty sauce. A flavor-packed
                    fiesta in every bite.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/ricebowl6.jpg"
                    alt="Quinoa Power Bowl"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "kfc-ricebowl-4",
                        name: "Fiesta Chicken Rice Bowl",
                        price: 8.99,
                        image: "/Images/ricebowl6.jpg",
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
                        id: "kfc-dessert-1",
                        name: "Classic McFlurry®",
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
                        id: "kfc-dessert-2",
                        name: "Hot Fudge Sundae",
                        price: 3.49,
                        image: "/Images/desert2.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-dessert-3",
                        name: "Apple Pie",
                        price: 2.99,
                        image: "/Images/desert3.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-dessert-4",
                        name: "Chocolate Brownie",
                        price: 4.49,
                        image: "/Images/desert4.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                    Creamymade with real bananas and topped with
                    whipped cream and a cherry.
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
                        id: "kfc-dessert-5",
                        name: "Choco Banana Delight",
                        price: 3.99,
                        image: "/Images/desert5.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-dessert-6",
                        name:  "Caramel Delight Sundae",
                        price: 3.49,
                        image: "/Images/desert6.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-hotdrink-1",
                        name:  "Premium Coffee",
                        price: 2.49,
                        image: "/Images/hotdrink2.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-hotdrink-2",
                        name:  "Creamy Cappuccino",
                        price: 3.49,
                        image: "/Images/hotdrink1.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-hotdrink-3",
                        name:  "Caramel Latte",
                        price: 3.99,
                        image: "/Images/hotdrink3.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-hotdrink-4",
                        name:  "Deluxe Hot Chocolate",
                        price: 3.29,
                        image: "/Images/hotdrink5.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-hotdrink-5",
                        name:  "Premium Green Tea",
                        price: 2.99,
                        image: "/Images/hotdrink4.jpg",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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
                        id: "kfc-hotdrink-6",
                        name:  "Herbal Tea Selection",
                        price: 2.79,
                        image: "/Images/hotdrink6.webp",
                      })
                    }
                   className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
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

export default KFC;
