import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(
                `${url}/api/order/myorders`,
                {},
                { headers: { token } }
            );
            setOrders(response.data.data || []);
        } catch (err) {
            console.error("Error fetching orders:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) fetchOrders();
    }, [token]);

    if (loading) {
        return <div className="my-orders"><p>Loading your orders...</p></div>;
    }

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {orders.length > 0 ? (
                    orders.map((order, idx) => (
                        <div key={idx} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <div className="order-items">
                                {order.items.map((item, i) => (
                                    <p key={i}>
                                        {item.name} x {item.quantity} ($ {item.price})
                                    </p>
                                ))}
                            </div>
                            <p className='order-status'>
                                <strong>FOOD IS IN PROCESS</strong>
                            </p>
                            <p className='order-total'>
                                <strong>Total: $ {order.amount}</strong>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
