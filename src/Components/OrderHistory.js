import React from 'react';
import './OrderHistory.css'; // Import CSS for styling

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history-container">
      <h1>Order History</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h3>Order on {order.date} at {order.time}</h3>
            <p>Table Number: {order.tableNumber}</p>
            <p>Contact: {order.contactNumber}</p>
            <ul className="order-items-list">
              {order.orderItems.map((item, idx) => (
                <li key={idx} className="order-item">
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
