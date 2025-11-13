import React from "react";

const StatusBadge = ({ status }) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-orange-100 text-orange-800";
      case "preparing":
        return "bg-blue-100 text-blue-800";
      case "ready":
        return "bg-green-100 text-green-800";
      case "delivered":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusBadgeClass(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
