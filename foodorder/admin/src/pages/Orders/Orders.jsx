import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.post(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data || []);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Fetch orders error:", error);
      toast.error("Server error fetching orders");
    }
  };

  const updateStatus = async (orderId, status) => {
    try {
      const response = await axios.post(`${url}/api/order/update-status`, { orderId, status });
      if (response.data.success) {
        setOrders(prev =>
          prev.map(order =>
            order._id === orderId ? { ...order, status } : order
          )
        );
        toast.success(`Order marked as ${status}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (err) {
      console.error("Status update error:", err);
      toast.error("Server error updating status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>All Orders</h3>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className={`order-card ${order.status === "Delivered" ? "delivered" : "in-process"}`}>

              {/* Customer Info */}
              {order.address && (
                <div className="order-customer-info">
                  <p><b>Name:</b> {order.address.first_name} {order.address.last_name}</p>
                  <p><b>Email:</b> {order.address.email}</p>
                  <p><b>Phone:</b> {order.address.phone}</p>
                  <p><b>Address:</b> {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                  <p><b>Order ID:</b> {order._id}</p>
                </div>
              )}

              {/* Items */}
              <div className="order-items">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <div key={item._id} className="order-item-food-card">
                      <img
                        src={item.image ? `${url}/uploads/${encodeURIComponent(item.image)}` : assets.parcel_icon}
                        alt={item.name}
                        onError={(e) => { e.target.src = assets.parcel_icon; }}
                      />
                      <div className="order-item-info">
                        <p className="order-item-name">{item.name}</p>
                        <p className="order-item-quantity">Qty: {item.quantity}</p>
                        <p className="order-item-price">Price: ${item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items in this order</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
