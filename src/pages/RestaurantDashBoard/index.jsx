import React, { useState, useCallback, useMemo } from "react";
import { useOrders } from "../../context/OrderContext";

const OrderManagementHub = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const { restaurantOrders, updateRestaurantOrder } = useOrders();

  const handleStatusAction = useCallback(
    (orderId, action) => {
      // For assign-delivery action, need to pass the full order details
      if (action === "assign-delivery") {
        const order = restaurantOrders.find(o => o.id === orderId);
        if (order) {
          updateRestaurantOrder(orderId, action, order);
        }
      } else {
        updateRestaurantOrder(orderId, action);
      }
    },
    [restaurantOrders, updateRestaurantOrder]
  );

  const getStatusBadgeClass = useCallback((status) => {
    switch (status?.toLowerCase()) {
      case "pending":
      case "new":
      case "confirmed":
        return "bg-orange-100 text-orange-800";
      case "preparing":
        return "bg-blue-100 text-blue-800";
      case "ready":
        return "bg-green-100 text-green-800";
      case "delivered":
        return "bg-purple-100 text-purple-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, []);

  const getActionButton = useCallback(
    (order) => {
      // Show accept/reject buttons for new or pending orders
      const status = order?.status?.toLowerCase();

      switch (status) {
        case "pending":
        case "new":
        case "confirmed":
          return (
            <div className="flex space-x-2">
              <button
                onClick={() => handleStatusAction(order?.id, "reject")}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Reject
              </button>
              <button
                onClick={() => handleStatusAction(order?.id, "accept")}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Accept
              </button>
            </div>
          );
        case "preparing":
          return (
            <button
              onClick={() => handleStatusAction(order?.id, "mark-ready")}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Mark Ready
            </button>
          );
        case "ready":
          return (
            <button
              onClick={() => handleStatusAction(order?.id, "assign-delivery")}
              className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Assign to Delivery
            </button>
          );
        case "delivered":
          return (
            <span className="px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-md">
              Delivered
            </span>
          );
        default:
          // return (
          //   <div className="flex space-x-2">
          //     <button
          //       onClick={() => handleStatusAction(order?.id, "reject")}
          //       className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
          //     >
          //       Reject
          //     </button>
          //     <button
          //       onClick={() => handleStatusAction(order?.id, "accept")}
          //       className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
          //     >
          //       Accept
          //     </button>
          //   </div>
          // );
      }
    },
    [handleStatusAction]
  );

  // Calculate metrics dynamically with memoization
  const metrics = useMemo(() => {
    const todayOrders = restaurantOrders?.length || 0;
    const todayRevenue =
      restaurantOrders?.reduce(
        (total, order) => total + (order?.total || 0),
        0
      ) || 0;
    const pendingOrders =
      restaurantOrders?.filter((order) => order?.status === "pending")
        ?.length || 0;
    const completedOrders =
      restaurantOrders?.filter((order) => order?.status === "delivered")
        ?.length || 0;

    return {
      todayOrders,
      todayRevenue,
      pendingOrders,
      completedOrders,
    };
  }, [restaurantOrders]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Restaurant Dashboard
          </h1>
          <p className="text-gray-600">Manage your orders and menu</p>
        </div>

        

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => handleTabChange("orders")}
              className={`pb-2 text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                activeTab === "orders"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              aria-pressed={activeTab === "orders"}
            >
              Orders
            </button>
            
          </div>
          <hr className="mt-0 border-gray-200" />
        </div>

        {/* Content Area */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            {restaurantOrders?.length > 0 ? (
              restaurantOrders?.map((order) => (
                <div
                  key={order?.id}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {order?.id}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusBadgeClass(
                          order?.status
                        )}`}
                      >
                        {order?.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Customer:</span>{" "}
                      {order?.customerName}
                    </p>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Items:</span>
                      <ul className="list-disc list-inside ml-4">
                        {order?.items?.map((item, index) => (
                          <li key={index}>
                            {typeof item === 'string'
                              ? item
                              : `${item.name} x${item.quantity} — £${(
                                  (item.price || 0) * (item.quantity || 1)
                                ).toFixed(2)}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      Total: ${order?.total?.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    {getActionButton(order)}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="mb-4">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  No orders available
                </p>
                <p className="text-gray-500">
                  New orders will appear here when they arrive.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "menu" && (
          <div className="text-center py-12 text-gray-500">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-900">Menu Management</p>
            <p className="text-gray-500">
              Menu management functionality coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );

}
export default OrderManagementHub;
