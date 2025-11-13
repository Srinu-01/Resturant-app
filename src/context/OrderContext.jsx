import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  // Restaurant orders state
  const [restaurantOrders, setRestaurantOrders] = useState(() => {
    try {
      const raw = localStorage.getItem('restaurantOrders');
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Error loading restaurant orders:', err);
      return [];
    }
  });

  // Delivery orders state
  const [deliveryOrders, setDeliveryOrders] = useState(() => {
    try {
      const raw = localStorage.getItem('deliveryOrders');
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Error loading delivery orders:', err);
      return [];
    }
  });

  // Update tracking status in localStorage
  const updateTrackingStatus = (orderId, status) => {
    try {
      const currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
      if (currentOrder && currentOrder.orderNumber === orderId) {
        currentOrder.status = status.toUpperCase();
        let message = "";
        
        switch (status.toUpperCase()) {
          case "CONFIRMED":
            message = "Your order has been confirmed! The restaurant will begin preparing it shortly.";
            break;
          case "PREPARING":
            message = "The restaurant is now preparing your order.";
            break;
          case "READY":
            message = "Your order is ready! Waiting for a delivery partner.";
            break;
          case "OUT_FOR_DELIVERY":
            message = "A delivery partner has been assigned to your order.";
            break;
          case "DELIVERED":
            message = "Thank you for your order! We hope to serve you again soon.";
            currentOrder.deliveryComplete = true;
            currentOrder.deliveryTime = new Date().toISOString();
            break;
          default:
            message = "Your order status has been updated.";
        }

        currentOrder.message = message;
        localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
      }
    } catch (err) {
      console.error('Error updating tracking status:', err);
    }
  };

  // Create delivery order and assign it
  const assignToDelivery = (order) => {
    const deliveryOrder = {
      id: order.id,
      orderNumber: order.orderNumber,
      status: "ASSIGNED",
      pickup: order.restaurant,
      customer: order.customerName,
      amount: `$${order.total.toFixed(2)}`,
      items: order.items,
      total: order.total,
      restaurant: order.restaurant,
      timestamp: new Date().toISOString(),
      deliveryAddress: order.deliveryAddress,
      estimatedDeliveryTime: order.estimatedDeliveryTime || 30,
    };

    setDeliveryOrders(prevOrders => {
       const orderExists = prevOrders.some(order => order.id === deliveryOrder.id);
      
      // If order exists, update it; if not, add it
      const updatedOrders = orderExists 
        ? prevOrders.map(order => order.id === deliveryOrder.id ? deliveryOrder : order)
        : [...prevOrders, deliveryOrder];
      try {
        localStorage.setItem('deliveryOrders', JSON.stringify(updatedOrders));
      } catch (err) {
        console.error('Error persisting delivery orders:', err);
      }
      return updatedOrders;
    });

    updateTrackingStatus(order.id, "OUT_FOR_DELIVERY");
  };

  // Update delivery order status
  const updateDeliveryOrder = (orderId, newStatus) => {
    const upperStatus = newStatus.toUpperCase();
    
    setDeliveryOrders(prevOrders => {
      const updatedOrders = prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status: upperStatus, timestamp: new Date().toISOString() }
          : order
      );

      try {
        localStorage.setItem('deliveryOrders', JSON.stringify(updatedOrders));
      } catch (err) {
        console.error('Error persisting delivery orders:', err);
      }

      updateTrackingStatus(orderId, upperStatus);

      return upperStatus === "DELIVERED"
        ? updatedOrders.filter(order => order.id !== orderId)
        : updatedOrders;
    });

    if (upperStatus === "DELIVERED") {
      setRestaurantOrders(prev => {
        const updated = prev.map(order => 
          order.id === orderId 
            ? { ...order, status: "DELIVERED", timestamp: new Date().toISOString() }
            : order
        );
        try {
          localStorage.setItem('restaurantOrders', JSON.stringify(updated));
        } catch (err) {
          console.error('Error persisting restaurant orders:', err);
        }
        return updated;
      });
    }
  };

  // Update restaurant order status
  const updateRestaurantOrder = (orderId, action, orderDetails = null) => {
    if (action === "assign-delivery" && orderDetails) {
      assignToDelivery(orderDetails);
    }

    setRestaurantOrders(prevOrders => {
      const updatedOrders = prevOrders
        .map(order => {
          if (order.id === orderId) {
            let newStatus;

            switch (action) {
              case "accept":
                newStatus = "PREPARING";
                break;
              case "reject":
                return null; // Remove from restaurant orders
              case "mark-ready":
                newStatus = "READY";
                break;
              case "assign-delivery":
                newStatus = "OUT_FOR_DELIVERY";
                assignToDelivery(order);
                break;
              default:
                return order;
            }

            const updatedOrder = {
              ...order,
              status: newStatus,
              timestamp: new Date().toISOString(),
            };

            updateTrackingStatus(orderId, newStatus);
            
            try {
              const currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
              if (currentOrder && currentOrder.orderNumber === orderId) {
                localStorage.setItem('currentOrder', JSON.stringify(updatedOrder));
              }
            } catch (err) {
              console.error('Error updating current order:', err);
            }

            return updatedOrder;
          }
          return order;
        })
        .filter(Boolean);

      try {
        localStorage.setItem('restaurantOrders', JSON.stringify(updatedOrders));
      } catch (err) {
        console.error('Error persisting restaurant orders:', err);
      }

      return updatedOrders;
    });
  };

  // Add new restaurant order
  const addRestaurantOrder = (order) => {
    const id = order.orderNumber || `ORD-${Date.now().toString().slice(-6)}`;

    const newOrder = {
      id,
      orderNumber: order.orderNumber || id,
      customerName: order.customerName || order.customer || "Guest",
      items: order.items || [],
      total: order.total || 0,
      status: "CONFIRMED",
      timestamp: new Date().toISOString(),
      restaurant: order.restaurant || "Restaurant",
      deliveryAddress: order.deliveryAddress || null,
      estimatedDeliveryTime: order.estimatedDeliveryTime || 30,
    };

    try {
      localStorage.setItem('currentOrder', JSON.stringify({
        ...newOrder,
        message: "Your order has been confirmed! The restaurant will begin preparing it shortly."
      }));
    } catch (err) {
      console.error('Error saving current order:', err);
    }

    setRestaurantOrders(prev => {
      const next = [newOrder, ...prev.filter(o => o.id !== id)];
      try {
        localStorage.setItem('restaurantOrders', JSON.stringify(next));
      } catch (err) {
        console.error('Error persisting restaurant orders:', err);
      }
      return next;
    });
  };

  // Context value
  const value = {
    restaurantOrders,
    deliveryOrders,
    updateRestaurantOrder,
    updateDeliveryOrder,
    addRestaurantOrder
  };

  // Render provider
  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;