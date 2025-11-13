import React from "react";

const ActionButtons = ({ order, handleStatusAction }) => {
  switch (order?.status) {
    case "pending":
      return (
        <div className="flex space-x-2">
          <button
            onClick={() => handleStatusAction(order?.id, "reject")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label={`Reject order ${order?.id}`}
          >
            Reject
          </button>
          <button
            onClick={() => handleStatusAction(order?.id, "accept")}
            className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label={`Accept order ${order?.id}`}
          >
            Accept
          </button>
        </div>
      );
    case "preparing":
      return (
        <button
          onClick={() => handleStatusAction(order?.id, "mark-ready")}
          className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-label={`Mark order ${order?.id} as ready`}
        >
          Mark Ready
        </button>
      );
    case "ready":
      return (
        <button
          onClick={() => handleStatusAction(order?.id, "assign-delivery")}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label={`Assign delivery for order ${order?.id}`}
        >
          Assign Delivery
        </button>
      );
    case "delivered":
      return (
        <span className="px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-md">
          Delivered
        </span>
      );
    default:
      return null;
  }
};

export default ActionButtons;
