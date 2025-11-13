import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChefHat,
  Bike,
  MapPin,
  Clock,
  Navigation,
  Timer,
  Store,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";
import { useOrders } from "../context/OrderContext"; // ✅ use the shared context

const orderStatuses = {
  CONFIRMED: {
    title: "Order Confirmed",
    description: "Your order has been received",
    icon: CheckCircle2,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  PREPARING: {
    title: "Preparing",
    description: "Restaurant is preparing your food",
    icon: ChefHat,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  READY: {
    title: "Ready for Pickup",
    description: "Waiting for a delivery partner",
    icon: ChefHat,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  OUT_FOR_DELIVERY: {
    title: "Out for Delivery",
    description: "Your order is on the way",
    icon: Bike,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  DELIVERED: {
    title: "Delivered",
    description: "Order has been delivered",
    icon: MapPin,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
};

const TrackOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { restaurantOrders, deliveryOrders } = useOrders();

  const [orderDetails, setOrderDetails] = useState(null);
  const [currentStatus, setCurrentStatus] = useState("CONFIRMED");
  const [error, setError] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  // 🔍 Find order from state or storage
  useEffect(() => {
    let foundOrder = null;

    if (location.state && Object.keys(location.state).length > 0) {
      foundOrder = location.state;
      localStorage.setItem("currentOrder", JSON.stringify(foundOrder));
    } else {
      const saved = localStorage.getItem("currentOrder");
      if (saved) {
        try {
          foundOrder = JSON.parse(saved);
        } catch (err) {
          console.error("Error parsing saved order:", err);
        }
      }
    }

    if (!foundOrder) {
      setError("No active order found. Redirecting...");
      const timeout = setTimeout(() => navigate("/customer"), 3000);
      return () => clearTimeout(timeout);
    }

    setOrderDetails(foundOrder);
    setCurrentStatus(foundOrder.status || "CONFIRMED");
    setLastUpdated(new Date());
  }, [location.state, navigate]);

  // 🧠 Listen for updates in global context (restaurant or delivery)
  useEffect(() => {
    if (!orderDetails?.orderNumber) return;

    // Try finding the updated order in restaurant or delivery context
    const latest =
      restaurantOrders.find(
        (o) => o.orderNumber === orderDetails.orderNumber
      ) ||
      deliveryOrders.find((o) => o.orderNumber === orderDetails.orderNumber);

    if (latest && latest.status !== orderDetails.status) {
      setOrderDetails(latest);
      setCurrentStatus(latest.status);
      setLastUpdated(new Date());
      try {
        localStorage.setItem("currentOrder", JSON.stringify(latest));
      } catch (err) {
        console.error("Error updating localStorage:", err);
      }
    }
  }, [
    restaurantOrders,
    deliveryOrders,
    orderDetails?.orderNumber,
    orderDetails?.status,
  ]);

  // Auto-refresh order status every 10 seconds
  useEffect(() => {
    if (!orderDetails?.orderNumber) return;

    const interval = setInterval(() => {
      // This will trigger the above effect and check for updates
      const saved = localStorage.getItem("currentOrder");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setOrderDetails(parsed);
          setCurrentStatus(parsed.status || "CONFIRMED");
          setLastUpdated(new Date());
        } catch (err) {
          console.error("Error auto-refreshing order:", err);
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [orderDetails?.orderNumber]);

  // Manual refresh function
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const saved = localStorage.getItem("currentOrder");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setOrderDetails(parsed);
          setCurrentStatus(parsed.status || "CONFIRMED");
          setLastUpdated(new Date());
        } catch (err) {
          console.error("Error refreshing order:", err);
        }
      }
      setIsRefreshing(false);
    }, 500);
  };

  const handleLoadSampleOrder = () => {
    const sampleOrder = {
      orderNumber: "ORD-123456",
      restaurant: "McDonald's",
      customerName: "John Doe",
      items: [
        { name: "Big Mac", quantity: 2, price: 5.99 },
        { name: "French Fries", quantity: 1, price: 2.99 },
        { name: "Coca Cola", quantity: 2, price: 2.49 },
      ],
      total: 19.46,
      status: "OUT_FOR_DELIVERY",
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
      estimatedDeliveryTime: 15,
      deliveryAddress: "123 Main St, New York, NY 10001",
    };
    localStorage.setItem("currentOrder", JSON.stringify(sampleOrder));
    setOrderDetails(sampleOrder);
    setCurrentStatus(sampleOrder.status);
    setLastUpdated(new Date());
    setError("");
  };

  if (error && !orderDetails) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
              <MapPin className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Active Order
          </h2>
          <p className="text-gray-600 mb-6">
            You don't have any active orders at the moment. Place an order first
            to track it here.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate("/customer")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF5722] text-white rounded-lg hover:bg-[#E64A19] transition-colors font-medium"
            >
              <Store className="w-5 h-5" />
              Browse Restaurants & Order
            </button>
            <button
              onClick={handleLoadSampleOrder}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium"
            >
              <Navigation className="w-5 h-5" />
              View Sample Order (Demo)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="max-w-lg mx-auto mt-10 text-center p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  // Helper functions
  const getRelevantStatuses = () => {
    const statusOrder = [
      "CONFIRMED",
      "PREPARING",
      "READY",
      "OUT_FOR_DELIVERY",
      "DELIVERED",
    ];
    const currentIndex = statusOrder.indexOf(currentStatus);
    return statusOrder.slice(0, currentIndex + 1);
  };

  const formatTime = (time) =>
    new Date(time).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/customer")}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div className="flex items-center justify-between bg-[#FF5722]/5 p-4 rounded-lg">
              <div>
                <h2 className="text-2xl font-bold text-[#FF5722]">
                  Live Tracking
                </h2>
                <p className="text-gray-600 mt-1">Real-time order updates</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50"
                  title="Refresh order status"
                >
                  <RefreshCw
                    className={`w-5 h-5 text-[#FF5722] ${
                      isRefreshing ? "animate-spin" : ""
                    }`}
                  />
                </button>
                <div className="animate-pulse">
                  <div className="w-3 h-3 bg-[#FF5722] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Last Updated Info */}
            {lastUpdated && (
              <div className="text-xs text-gray-500 text-center">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}

            {/* Order Header */}
            <div className="border-b pb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">
                  #{orderDetails.orderNumber}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentStatus === "DELIVERED"
                      ? "bg-green-100 text-green-800"
                      : currentStatus === "OUT_FOR_DELIVERY"
                      ? "bg-blue-100 text-blue-800"
                      : currentStatus === "PREPARING"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {currentStatus.replace(/_/g, " ")}
                </span>
              </div>
              <p className="text-gray-600">{orderDetails.restaurant}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Ordered at {formatTime(orderDetails.timestamp)}</span>
              </div>
              {orderDetails.estimatedDeliveryTime && (
                <div className="flex items-center gap-2 mt-2 text-sm text-[#FF5722]">
                  <Timer className="w-4 h-4" />
                  <span>
                    Est. delivery: {orderDetails.estimatedDeliveryTime} mins
                  </span>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="relative pt-2">
              <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-gray-200"></div>
              {getRelevantStatuses().map((status) => {
                const StatusIcon = orderStatuses[status].icon;
                return (
                  <div
                    key={status}
                    className="relative flex items-start gap-4 pb-8"
                  >
                    <div
                      className={`relative z-10 rounded-full p-2 ${orderStatuses[status].bgColor}`}
                    >
                      <StatusIcon
                        className={`w-5 h-5 ${orderStatuses[status].color}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">
                        {orderStatuses[status].title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {orderStatuses[status].description}
                      </p>
                      {status === currentStatus && (
                        <div className="mt-2 text-sm text-gray-500">
                          <Timer className="w-4 h-4 inline mr-1" />
                          Updated just now
                        </div>
                      )}
                    </div>
                    {status === currentStatus && (
                      <div className="animate-pulse">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column (Map + Details) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md h-full">
            <div className="relative h-[150px] bg-gradient-to-b from-[#FF5722]/5 to-white rounded-t-lg overflow-hidden">
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FF5722] rounded-full p-2">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Delivery Location</h3>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                        Live
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {orderDetails.deliveryAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-3 bg-[#FF5722]/10 rounded-full">
                  <Store className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <p className="font-medium">{orderDetails.restaurant}</p>
                  <p className="text-sm text-gray-600">
                    Order #{orderDetails.orderNumber}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
                <h4 className="font-medium mb-4 text-gray-900">
                  Order Summary
                </h4>
                <div className="space-y-3">
                  {orderDetails.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 flex items-center justify-center bg-[#FF5722]/10 rounded text-[#FF5722] font-medium">
                          {item.quantity}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      <span className="font-medium">
                        £{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t mt-3 pt-3">
                    <div className="flex justify-between items-center font-medium text-[#FF5722]">
                      <span>Total Amount</span>
                      <span>£{orderDetails.total?.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
