import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { X, Plus, Minus, ShoppingBag, Trash2, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { validateUKPostcode, checkDeliveryAvailability } from "../utils/postcodeValidator";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addRestaurantOrder } = useOrders();
  const [showPostcode, setShowPostcode] = useState(false);
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [validating, setValidating] = useState(false);
  const [deliveryAvailable, setDeliveryAvailable] = useState(null);

  const handlePostcodeSubmit = () => {
    setValidating(true);
    setError("");
    setDeliveryAvailable(null);

    const validation = validateUKPostcode(postcode);
    if (!validation.isValid) {
      setError(validation.message);
      setValidating(false);
      return;
    }

    // Format the postcode properly
    setPostcode(validation.formatted);

    // Check delivery availability
    const availability = checkDeliveryAvailability(validation.formatted);
    setDeliveryAvailable(availability.available);
    
    if (!availability.available) {
      setError(availability.message);
      setValidating(false);
      return;
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      setValidating(false);
      // Store delivery postcode in localStorage or context
      localStorage.setItem('deliveryPostcode', validation.formatted);
      // Navigate to checkout
      navigate('/checkout', { 
        state: { 
          postcode: validation.formatted,
          cartTotal: totalPrice + 2.99
        }
      });
    }, 1500);
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingBag className="h-16 w-16 mb-4 text-gray-300" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">
                  Add some delicious items to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-4"
                  >
                    {/* Item Image */}
                    <img
                      src={item.image || "/images/placeholder-food.jpg"}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    {/* Item Details */}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.restaurant}</p>
                      <p className="font-semibold text-primary">
                        £{item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded-full border p-1 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded-full border p-1 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              {/* Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>£{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>£2.99</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>£{(totalPrice + 2.99).toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {!showPostcode ? (
                  <>
                    <button 
                      onClick={() => setShowPostcode(true)}
                      className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </>
                ) : (
                  <div className="fixed inset-0 bg-white z-10 flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h2 className="text-xl font-semibold">Enter Your Post Code</h2>
                      <button
                        onClick={() => setShowPostcode(false)}
                        className="rounded-full p-2 hover:bg-gray-100"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col items-center justify-center max-w-md mx-auto w-full">
                      <div className="w-full space-y-6">
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-bold">Please Enter Your Post Code</h3>
                          <p className="text-gray-600">
                            To start placing delivery order, please enter your full postcode here
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="relative">
                            <input
                              type="text"
                              value={postcode}
                              onChange={(e) => {
                                setPostcode(e.target.value.toUpperCase());
                                setError("");
                                setDeliveryAvailable(null);
                              }}
                              placeholder="e.g. AA1 1BB"
                              className={`w-full px-12 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-center text-lg uppercase
                                ${error ? 'border-red-500 focus:ring-red-500' : ''}
                                ${deliveryAvailable ? 'border-green-500 focus:ring-green-500' : ''}
                              `}
                              maxLength={8}
                              disabled={validating}
                            />
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            {error && <AlertCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 h-5 w-5" />}
                            {deliveryAvailable && <CheckCircle2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 h-5 w-5" />}
                          </div>
                          
                          {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                          )}
                          {deliveryAvailable && !error && (
                            <p className="text-green-500 text-sm text-center">Great! We deliver to your area</p>
                          )}
                        </div>

                        {!deliveryAvailable ? (
                          <button
                            onClick={handlePostcodeSubmit}
                            disabled={!postcode || validating}
                            className={`w-full bg-[#FF5722] text-white py-3 rounded-lg font-medium transition-colors relative
                              ${(!postcode || validating) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF5722]/90'}
                            `}
                          >
                            {validating ? (
                              <>
                                <span className="opacity-0">Find</span>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              </>
                            ) : (
                              'Find'
                            )}
                          </button>
                        ) : (
                          <div className="space-y-4">
                            <div className="p-4 bg-green-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <p className="text-green-700">Delivery available to {postcode}</p>
                              </div>
                              <p className="text-sm text-green-600 mt-1 ml-7">Estimated delivery time: 30-45 minutes</p>
                            </div>
                            
                            <button
                              onClick={() => {
                                // Generate a random order number
                                const orderNumber = '#' + Math.random().toString(36).substr(2, 6).toUpperCase();
                                
                                // Create order details object
                                const orderDetails = {
                                  orderNumber: orderNumber,
                                  items: cart,
                                  total: totalPrice + 2.99,
                                  status: 'CONFIRMED',
                                  estimatedDeliveryTime: '30-45',
                                  deliveryAddress: `${postcode}`,
                                  orderTime: new Date().toISOString(),
                                  deliveryType: 'delivery',
                                  restaurant: cart[0]?.restaurant || 'Restaurant',
                                  customerName: localStorage.getItem('userName') || 'Guest'
                                };

                                // Add order to restaurant dashboard
                                addRestaurantOrder(orderDetails);

                                // Store order details in localStorage for persistence
                                localStorage.setItem('currentOrder', JSON.stringify(orderDetails));

                                // Navigate to track order page
                                navigate('/track-order', { 
                                  state: orderDetails
                                });

                                // Clear the cart
                                clearCart();
                                
                                // Close the cart modal
                                onClose();
                              }}
                              className="w-full bg-[#FF5722] text-white py-3 rounded-lg font-medium hover:bg-[#FF5722]/90 transition-colors"
                            >
                              Confirm Order
                            </button>
                            
                            <button
                              onClick={() => {
                                setPostcode('');
                                setDeliveryAvailable(null);
                                setError('');
                              }}
                              className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                              Change Postcode
                            </button>
                          </div>
                        )}

                        <div className="text-center">
                          <span className="inline-block px-8">or</span>
                        </div>

                        <button
                          onClick={() => {
                            navigate('/checkout', { 
                              state: { 
                                cartTotal: totalPrice + 2.99,
                                deliveryType: 'collection'
                              }
                            });
                          }}
                          className="w-full text-primary underline font-medium py-2"
                        >
                          I want to come and collect
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;