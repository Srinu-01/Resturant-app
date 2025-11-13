import React, { useState } from "react";
import { useOrders } from "../../context/OrderContext";

const DeliveryDashboard = () => {
  const { deliveryOrders, updateDeliveryOrder } = useOrders();

  // Handle accepting an assigned order
  const handleAcceptOrder = (orderId) => {
    updateDeliveryOrder(orderId, "ACCEPTED");
  };

  // Handle marking order as out for delivery
  const handleOutForDelivery = (orderId) => {
    updateDeliveryOrder(orderId, "OUT_FOR_DELIVERY");
  };

  // Handle marking order as delivered
  const handleMarkAsDelivered = (orderId) => {
    updateDeliveryOrder(orderId, "DELIVERED");
  };

  // Get action button based on order status
  const getActionButton = (order) => {
    switch (order.status?.toUpperCase()) {
      case "ASSIGNED":
        return (
          <button
            onClick={() => handleAcceptOrder(order.id)}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Accept Order
          </button>
        );
      case "ACCEPTED":
        return (
          <button
            onClick={() => handleOutForDelivery(order.id)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Start Delivery
          </button>
        );
      case "OUT_FOR_DELIVERY":
        return (
          <button
            onClick={() => handleMarkAsDelivered(order.id)}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Mark as Delivered
          </button>
        );
      // case "DELIVERED":
      //   return (
      //     <div className="w-full text-center bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-lg">
      //       ✓ Delivered
      //     </div>
      //   );
      default:
        return null;
    }
  };

  // Get status display info
  const getStatusInfo = (status) => {
    switch (status?.toUpperCase()) {
      case "ASSIGNED":
        return {
          text: "New Assignment",
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
        };
      case "ACCEPTED":
        return {
          text: "Accepted",
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
        };
      case "OUT_FOR_DELIVERY":
        return {
          text: "Out for Delivery",
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        };
      case "DELIVERED":
        return {
          text: "Delivered",
          bgColor: "bg-green-100",
          textColor: "text-green-800",
        };

      default:
        return {
          text: "Unknown",
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
        };
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header with right-positioned metrics */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Delivery Dashboard
          </h1>
          <p className="text-gray-600">Your delivery assignments</p>
        </div>

        {/* Metrics Cards */}
        <div className="flex gap-4">
          <div className="bg-blue-500 text-white rounded-lg p-4 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold">{deliveryOrders?.filter(order => 
                ["ASSIGNED", "ACCEPTED", "OUT_FOR_DELIVERY"].includes(order?.status?.toUpperCase())
              )?.length || 0}</div>
              <div className="text-sm font-medium">Active Orders</div>
            </div>
          </div>

          <div className="bg-green-500 text-white rounded-lg p-4 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {deliveryOrders?.filter(order => order?.status?.toUpperCase() === "DELIVERED")?.length || 0}
              </div>
              <div className="text-sm font-medium">Completed Today</div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Cards */}
      <div className="space-y-4">
        {deliveryOrders?.map((order) => {
          const statusInfo = getStatusInfo(order?.status);

          return (
            <div
              key={order?.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Order #{order?.orderNumber || order?.id}
                  </h3>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo?.bgColor} ${statusInfo?.textColor}`}
                  >
                    {statusInfo?.text}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pickup:</span>
                  <span className="font-medium text-gray-900">
                    {order?.pickup}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer:</span>
                  <span className="font-medium text-gray-900">
                    {order?.customer}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount:</span>
                  <span className="text-xl font-bold text-gray-900">
                    {order?.amount}
                  </span>
                </div>
              </div>
              {/* Action Button */}
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    {getActionButton(order)}
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              {order?.deliveryAddress && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Information</h4>
                  <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryDashboard;
