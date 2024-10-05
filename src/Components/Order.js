import React, { useState } from 'react';
import './Order.css'; // Import CSS for styling

const Order = ({ order, placeOrder }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleOrderPlacement = () => {
    placeOrder({ tableNumber, contactNumber, date, time, orderItems: order });
  };

  return (
    <div className="order-container">
      <h2>Your Order</h2>
      <ul className="order-list">
        {order.map((item, index) => (
          <li key={index} className="order-item ordered-item"> {/* Add 'ordered-item' class */}
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Place Order</h3>
      <div className="input-group">
        <label>Table Number:</label>
        <input
          className="input-field"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Contact Number (optional):</label>
        <input
          className="input-field"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Date:</label>
        <input
          type="date"
          className="input-field"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Time:</label>
        <input
          type="time"
          className="input-field"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button className="place-order-button" onClick={handleOrderPlacement}>
        Place Order
      </button>
    </div>
  );
};

export default Order;
