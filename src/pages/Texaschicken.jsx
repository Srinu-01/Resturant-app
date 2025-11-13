import React, { useState, useRef} from "react";
import { useCart } from "../context/CartContext";

const TexasChicken = () => {
  console.log("TexasChicken component is rendering");
  const [selectedCategory, setSelectedCategory] = useState("Chicken Meals");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, cart } = useCart();

  const menuItems = {
    "Chicken Meals": [
      {
        id: "texas-chicken-1",
        name: "Spicy Fried Chicken",
        price: 12.99,
        description: "Our signature spicy fried chicken with Texas-style seasoning, perfectly crispy and full of flavor.",
        image: "/Images/chicken1.jpg"
      },
      {
        id: "texas-chicken-2",
        name: "Honey BBQ Chicken",
        price: 13.99,
        description: "Tender chicken glazed with our signature honey BBQ sauce, grilled to perfection.",
        image: "/Images/chicken2.jpg"
      },
      {
        id: "texas-chicken-3",
        name: "Buffalo Wings",
        price: 11.49,
        description: "Classic buffalo wings with tangy sauce, served with celery sticks and blue cheese dip.",
        image: "/Images/chicken3.jpg"
      },
      {
        id: "texas-chicken-4",
        name: "Crispy Tenders",
        price: 10.99,
        description: "Hand-breaded chicken tenders, golden and crispy, served with your choice of dipping sauce.",
        image: "/Images/chicken4.jpg"
      },
      {
        id: "texas-chicken-5",
        name: "Grilled Chicken Breast",
        price: 14.99,
        description: "Juicy grilled chicken breast seasoned with herbs and spices, served with mashed potatoes.",
        image: "/Images/chicken5.jpg"
      },
      {
        id: "texas-chicken-6",
        name: "Chicken Drumsticks",
        price: 9.99,
        description: "Succulent chicken drumsticks marinated in our secret blend of spices and grilled to perfection.",
        image: "/Images/chicken6.jpg"
      }
    ],
    "Burgers & Wraps": [
      {
        id: "texas-burger-1",
        name: "Texas Chicken Burger",
        price: 8.99,
        description: "Crispy fried chicken breast with lettuce, tomato, and our signature Texas sauce on a brioche bun.",
        image: "/Images/image1.jpg"
      },
      {
        id: "texas-burger-2",
        name: "BBQ Bacon Burger",
        price: 10.49,
        description: "Beef patty with crispy bacon, BBQ sauce, cheese, and onion rings on a toasted sesame bun.",
        image: "/Images/image2.jpg"
      },
      {
        id: "texas-wrap-1",
        name: "Spicy Chicken Wrap",
        price: 7.99,
        description: "Grilled chicken strips with lettuce, tomatoes, cheese, and spicy mayo wrapped in a soft tortilla.",
        image: "/Images/sandwich1.jpg"
      }
    ],
    "Beverages": [
      {
        id: "texas-beverage-1",
        name: "Strawberry Pineapple Crush",
        price: 2.49,
        description: "Refreshing Strawberry Pineapple Crush served ice cold.",
        image: "/Images/colddrink1.jpg"
      },
      {
        id: "texas-beverage-2",
        name: "Fresh Lemonade",
        price: 3.49,
        description: "Freshly squeezed lemonade with a perfect balance of sweet and tart flavors.",
        image: "/Images/colddrink2.jpg"
      },
      {
        id: "texas-beverage-3",
        name: "Sweet Iced Tea",
        price: 2.99,
        description: "Southern-style sweet tea brewed fresh daily.",
        image: "/Images/colddrink3.jpg"
      }
    ],
    "Desserts": [
      {
        id: "texas-dessert-1",
        name: "Texas Pecan Pie",
        price: 5.99,
        description: "Traditional Texas pecan pie with a flaky crust and rich filling.",
        image: "/Images/desert1.jpg"
      },
      {
        id: "texas-dessert-2",
        name: "Fudge Brownie Supreme",
        price: 4.99,
        description: "Dense chocolate brownie with chocolate chips, served warm with chocolate sauce.",
        image: "/Images/desert2.jpg"
      },
      {
        id: "texas-dessert-3",
        name: "Apple Cobbler",
        price: 5.49,
        description: "Classic apple cobbler with cinnamon and a golden crispy topping.",
        image: "/Images/desert3.jpg"
      }
    ]
  };

  // Debug log to check if cart context is working
  console.log("Cart state in Texas Chicken:", cart);
  console.log("addToCart function:", addToCart);

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item); // Debug log
    try {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        restaurant: "Texas Chicken",
        quantity: 1,
      });
      console.log("Successfully added to cart"); // Debug log
    } catch (error) {
      console.error("Error adding to cart:", error); // Error log
    }
  };

  const chickenMealsRef = useRef(null);
  const burgersWrapsRef = useRef(null);
  const combosFamilyRef = useRef(null);
  const beveragesRef = useRef(null);
  const dessertsRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Smooth scroll to sections based on category
    const refs = {
      "Chicken Meals": chickenMealsRef,
      "Burgers & Wraps": burgersWrapsRef,
      "Combos & Family Meals": combosFamilyRef,
      Beverages: beveragesRef,
      Desserts: dessertsRef,
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
    "Chicken Meals",
    "Burgers & Wraps",
    "Combos & Family Meals",
    "Beverages",
    "Desserts",
  ];

  // Original complex return
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Main Banner Section */}
        <div className="mx-4 mt-4">
          <div className="bg-orange-100 rounded-xl shadow-md relative overflow-hidden">
            {/* Background image with transparency */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                src="/Images/similar3.jpg"
                alt="Background Texas Chicken"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 flex flex-col lg:flex-row items-start gap-6 relative z-10">
              {/* Left side content */}
              <div className="flex-1">
                <div className="mb-4 mt-20">
                  <span className="text-xs font-medium text-gray-500 mb-1 block">
                    Authentic Texas Style. Bold Flavors. Every Day.
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    Texas Chicken East London
                  </h1>
                </div>

                {/* Info badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#ef5e32] text-white px-4 py-2.5 rounded-lg flex items-center gap-2">
                    <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-black">₹</span>
                    </div>
                    <span className="text-sm font-medium">
                      Minimum Order: 15 GBP
                    </span>
                  </div>
                  <div className="bg-[#ef5e32] text-white px-4 py-2.5 rounded-lg flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-black">🚲</span>
                    </div>
                    <span className="text-sm font-medium">
                      Delivery in 25-30 Minutes
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side - Banner image with rating overlay */}
              <div className="relative shrink-0">
                <div className="w-[380px] h-[250px] rounded-xl overflow-hidden">
                  <img
                    src="/Images/similar3.jpg"
                    alt="Texas Chicken meal"
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
                      4.2
                    </div>
                    <div className="flex gap-0.5 mb-1 justify-center">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-gray-300 text-xs">★</span>
                    </div>
                    <span className="text-xs text-gray-500">1,250 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open hours banner below the main banner */}
        <div className="mx-4 mt-0">
          <div className="bg-[#ef5e32] text-white px-4 py-2 inline-flex items-center gap-2 rounded-lg text-sm shadow-lg">
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
            <span className="font-medium">Open until 2:30 AM</span>
          </div>
        </div>

        {/* All Offers Section */}
        <div className="mx-4 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">
              All Offers from Texas Chicken East London
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search from menu..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
          {searchTerm && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-black mb-4">Search Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(menuItems)
                  .flat()
                  .filter(item => 
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map(item => (
                    <div key={item.id} className="bg-white rounded-lg p-4 flex space-x-4 relative">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>
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
                {Object.values(menuItems)
                  .flat()
                  .filter(item => 
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                  ).length === 0 && (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-500">No items found matching "{searchTerm}"</p>
                  </div>
                )}
              </div>
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
          </div>

          {/* Chicken Meals Section */}
          <div ref={chickenMealsRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Chicken Meals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Spicy Fried Chicken */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Spicy Fried Chicken
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our signature spicy fried chicken with Texas-style
                    seasoning, perfectly crispy and full of flavor.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 12.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/chicken1.jpg"
                    alt="Spicy Fried Chicken"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-chicken-1",
                        name: "Spicy Fried Chicken",
                        price: 12.99,
                        image: "/Images/chicken1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Honey BBQ Chicken */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Honey BBQ Chicken
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Tender chicken glazed with our signature honey BBQ sauce,
                    grilled to perfection.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 13.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/chicken2.jpg"
                    alt="Honey BBQ Chicken"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-chicken-2",
                        name: "Honey BBQ Chicken",
                        price: 13.99,
                        image: "/Images/chicken2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buffalo Wings */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Buffalo Wings
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Classic buffalo wings with tangy sauce, served with celery
                    sticks and blue cheese dip.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 11.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/chicken3.jpg"
                    alt="Buffalo Wings"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-chicken-3",
                        name: "Buffalo Wings",
                        price: 11.49,
                        image: "/Images/chicken3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Crispy Tenders */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Crispy Tenders
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Hand-breaded chicken tenders, golden and crispy, served with
                    your choice of dipping sauce.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 10.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/chicken4.jpg"
                    alt="Crispy Tenders"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-chicken-4",
                        name: "Crispy Tenders",
                        price: 10.99,
                        image: "/Images/chicken4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Grilled Chicken Breast */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Grilled Chicken Breast
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Juicy grilled chicken breast seasoned with herbs and spices,
                    served with mashed potatoes.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 14.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/chicken5.jpg"
                    alt="Grilled Chicken Breast"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-chicken-5",
                        name: "Grilled Chicken Breast",
                        price: 14.99,
                        image: "/Images/chicken5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Chicken Drumsticks */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Chicken Drumsticks
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Succulent chicken drumsticks marinated in our secret blend
                    of spices and grilled to perfection.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 9.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/chicken6.jpg"
                    alt="Chicken Drumsticks"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-chicken-6",
                        name: "Chicken Drumsticks",
                        price: 9.99,
                        image: "/Images/chicken6.jpg",
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

          {/* Burgers & Wraps Section */}
          <div ref={burgersWrapsRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Burgers & Wraps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Texas Chicken Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Texas Chicken Burger
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Crispy fried chicken breast with lettuce, tomato, and our
                    signature Texas sauce on a brioche bun.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image1.jpg"
                    alt="Texas Chicken Burger"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-burger-1",
                        name: "Texas Chicken Burger",
                        price: 8.99,
                        image: "/Images/image1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BBQ Bacon Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    BBQ Bacon Burger
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Beef patty with crispy bacon, BBQ sauce, cheese, and onion
                    rings on a toasted sesame bun.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 10.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image2.jpg"
                    alt="BBQ Bacon Burger"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-burger-2",
                        name: "BBQ Bacon Burger",
                        price: 10.49,
                        image: "/Images/image2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Spicy Chicken Wrap */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Spicy Chicken Wrap
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Grilled chicken strips with lettuce, tomatoes, cheese, and
                    spicy mayo wrapped in a soft tortilla.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 7.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich1.jpg"
                    alt="Spicy Chicken Wrap"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-wrap-1",
                        name: "Spicy Chicken Wrap",
                        price: 7.99,
                        image: "/Images/sandwich1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Double Cheese Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Double Cheese Burger
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Two beef patties with double cheese, pickles, onions, and
                    our special sauce on a sesame bun.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 11.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image3.jpg"
                    alt="Double Cheese Burger"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg">
                    +
                  </button>
                </div>
              </div>

              {/* Caesar Chicken Wrap */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Caesar Chicken Wrap
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Grilled chicken with romaine lettuce, parmesan cheese, and
                    Caesar dressing in a whole wheat wrap.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 8.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/sandwich2.jpg"
                    alt="Caesar Chicken Wrap"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg">
                    +
                  </button>
                </div>
              </div>

              {/* Fish Burger */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Crispy Fish Burger
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Golden fried fish fillet with lettuce, tomato, and tartar
                    sauce on a soft bun.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 9.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/image4.jpg"
                    alt="Crispy Fish Burger"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Combos & Family Meals Section */}
          <div ref={combosFamilyRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Combos & Family Meals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Texas Family Feast */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Texas Family Feast
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    8 pieces of mixed chicken, 2 large sides, 4 biscuits, and 4
                    drinks. Perfect for sharing!
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 29.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/combo1.jpg"
                    alt="Texas Family Feast"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-combo-1",
                        name: "Texas Family Feast",
                        price: 29.99,
                        image: "/Images/combo1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Chicken Combo */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Chicken Combo
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    2 pieces of chicken, 1 side, 1 biscuit, and 1 drink. A
                    perfect individual meal.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 12.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/combo2.jpg"
                    alt="Chicken Combo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-combo-2",
                        name: "Chicken Combo",
                        price: 12.49,
                        image: "/Images/combo2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Burger Combo */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Burger Combo
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Choice of burger, regular fries, and a drink. Simple and
                    satisfying combo meal.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 11.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/combo3.jpg"
                    alt="Burger Combo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-combo-3",
                        name: "Burger Combo",
                        price: 11.99,
                        image: "/Images/combo3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Wings & Things */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Wings & Things
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    10 buffalo wings, loaded fries, coleslaw, and 2 drinks.
                    Great for sharing with a friend.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 18.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/combo4.jpg"
                    alt="Wings & Things"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-combo-4",
                        name: "Wings & Things",
                        price: 18.99,
                        image: "/Images/combo4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Tender Meal */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Tender Meal
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    4 chicken tenders, choice of 2 dipping sauces, fries, and a
                    drink. Crispy and delicious!
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 13.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/combo5.jpg"
                    alt="Tender Meal"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-combo-5",
                        name: "Tender Meal",
                        price: 13.99,
                        image: "/Images/combo5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Big Texas Bucket */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Big Texas Bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    12 pieces of mixed chicken, 3 large sides, 6 biscuits, and 6
                    drinks. Ultimate family meal!
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 39.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/combo6.jpg"
                    alt="Big Texas Bucket"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-combo-6",
                        name: "Big Texas Bucket",
                        price: 39.99,
                        image: "/Images/combo6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Beverages Section */}
          <div ref={beveragesRef} className="mt-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Beverages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Classic Coca-Cola */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Strawberry Pineapple Crush
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Refreshing Strawberry Pineapple Crush served ice cold.
                    Available in regular, large, and extra large sizes.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.49
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
                        id: "texas-beverage-1",
                        name: "Strawberry Pineapple Crush",
                        price: 2.49,
                        image: "/Images/colddrink1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Fresh Lemonade */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fresh Lemonade
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Freshly squeezed lemonade with a perfect balance of sweet
                    and tart flavors. Very refreshing!
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink2.jpg"
                    alt="Fresh Lemonade"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-beverage-2",
                        name: "Fresh Lemonade",
                        price: 3.49,
                        image: "/Images/colddrink2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Iced Tea */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Sweet Iced Tea
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Southern-style sweet tea brewed fresh daily. A Texas
                    tradition in every glass.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink3.jpg"
                    alt="Sweet Iced Tea"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-beverage-3",
                        name: "Sweet Iced Tea",
                        price: 2.99,
                        image: "/Images/colddrink3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Orange Juice */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Strawberry Cream Fizz
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    A delightful blend of strawberry and cream flavors,
                    carbonated to perfection.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
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
                        id: "texas-beverage-4",
                        name: "Strawberry Cream Fizz",
                        price: 3.99,
                        image: "/Images/colddrink4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Milkshake */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Chocolate Milkshake
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Rich and creamy chocolate milkshake topped with whipped
                    cream. Available in vanilla and strawberry too.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/colddrink5.jpg"
                    alt="Chocolate Milkshake"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-beverage-5",
                        name: "Chocolate Milkshake",
                        price: 4.99,
                        image: "/Images/colddrink5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Coffee */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Premium Coffee
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Freshly brewed coffee made from premium beans. Available hot
                    or iced, with or without cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 2.79
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/hotdrink1.jpg"
                    alt="Premium Coffee"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-beverage-6",
                        name: "Premium Coffee",
                        price: 2.79,
                        image: "/Images/hotdrink1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
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
              {/* Texas Pecan Pie */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Texas Pecan Pie
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Traditional Texas pecan pie with a flaky crust and rich
                    filling. Served warm with vanilla ice cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert1.jpg"
                    alt="Texas Pecan Pie"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-dessert-1",
                        name: "Texas Pecan Pie",
                        price: 5.99,
                        image: "/Images/desert1.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Chocolate Brownie */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fudge Brownie Supreme
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Dense chocolate brownie with chocolate chips, served warm
                    with chocolate sauce and whipped cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert2.jpg"
                    alt="Fudge Brownie Supreme"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-dessert-2",
                        name: "Fudge Brownie Supreme",
                        price: 4.99,
                        image: "/Images/desert2.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Apple Cobbler */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Apple Cobbler
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Classic apple cobbler with cinnamon and a golden crispy
                    topping. Served with vanilla ice cream.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 5.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert3.jpg"
                    alt="Apple Cobbler"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-dessert-3",
                        name: "Apple Cobbler",
                        price: 5.49,
                        image: "/Images/desert3.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cheesecake */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    New York Cheesecake
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Creamy New York style cheesecake with graham cracker crust.
                    Choice of strawberry or blueberry topping.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 6.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert4.jpg"
                    alt="New York Cheesecake"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-dessert-4",
                        name: "New York Cheesecake",
                        price: 6.49,
                        image: "/Images/desert4.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Ice Cream Sundae */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Texas Sundae
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Three scoops of vanilla ice cream with hot fudge, caramel
                    sauce, whipped cream, and a cherry on top.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 4.49
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert5.jpg"
                    alt="Texas Sundae"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-dessert-5",
                        name: "Texas Sundae",
                        price: 4.49,
                        image: "/Images/desert5.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-white rounded-lg p-4 flex space-x-4 relative">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Chocolate Chip Cookies
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Freshly baked chocolate chip cookies (3 pieces). Soft,
                    chewy, and loaded with chocolate chips.
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    GBP 3.99
                  </span>
                </div>
                <div className="relative w-32 h-32">
                  <img
                    src="/Images/desert6.jpg"
                    alt="Chocolate Chip Cookies"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: "texas-dessert-6",
                        name: "Chocolate Chip Cookies",
                        price: 3.99,
                        image: "/Images/desert6.jpg",
                      })
                    }
                    className="absolute -bottom-3 -right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
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
                    <p className="text-red-600">25 min</p>
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
                    <p className="text-red-600">+934567-89</p>
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <a
                      href="http://texaschicken.uk/"
                      className="text-red-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://texaschicken.uk/
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
                    <span>9:00 AM–2:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuesday:</span>
                    <span>9:00 AM–2:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wednesday:</span>
                    <span>9:00 AM–2:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thursday:</span>
                    <span>9:00 AM–2:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Friday:</span>
                    <span>9:00 AM–2:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span>9:00 AM–2:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span>9:00 AM–1:00 AM</span>
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
                    className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                    aria-label="Previous review"
                  >
                    <span className="text-2xl">&lsaquo;</span>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
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
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">Mike Johnson</h3>
                      <p className="text-red-600">East London</p>
                    </div>
                    <div className="ml-auto text-gray-400">
                      15th October, 2023
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index} className="text-red-600">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Amazing Texas-style chicken! The spice level is perfect and
                    the meat is so tender. Best fried chicken in London, hands
                    down. Will definitely order again!
                  </p>
                </div>

                {/* Review Card 2 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">Sarah Wilson</h3>
                      <p className="text-red-600">East London</p>
                    </div>
                    <div className="ml-auto text-gray-400">
                      22nd October, 2023
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index} className="text-red-600">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    The family meal was incredible! Enough food for everyone and
                    the quality was outstanding. The delivery was quick and
                    everything arrived hot and fresh.
                  </p>
                </div>

                {/* Review Card 3 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/4.jpg"
                      alt="Customer"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">David Brown</h3>
                      <p className="text-red-600">East London</p>
                    </div>
                    <div className="ml-auto text-gray-400">
                      28th October, 2023
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index} className="text-red-600">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Tried the Texas Chicken Burger and it was phenomenal! Great
                    portion size, fresh ingredients, and the sauce is
                    incredible. Highly recommend this place!
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
                {/* KFC */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar6.svg"
                    alt="KFC West London"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">KFC West London</p>
                </div>

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

                {/* Burger King */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar5.png"
                    alt="Burger King"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Burger King</p>
                </div>

                {/* Nando's */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar4.jpg"
                    alt="Nando's"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Shaurma1</p>
                </div>

                {/* Popeyes */}
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="/Images/similar3.jpg"
                    alt="Popeyes"
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">Texas Chicken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TexasChicken;
