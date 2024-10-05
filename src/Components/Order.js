// src/components/Order.js
import React, { useState } from 'react';
import './Order.css'; // Import CSS for styling

const Order = ({ order, placeOrder }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Function to group items by ID and sum quantities
  const groupOrderItems = (orderItems) => {
    const groupedItems = {};

    orderItems.forEach(item => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].quantity += 1; // Increment quantity for existing item
      } else {
        groupedItems[item.id] = { ...item, quantity: 1 }; // Create new entry for new item
      }
    });

    return Object.values(groupedItems); // Return as an array
  };

  const handleOrderPlacement = () => {
    const groupedItems = groupOrderItems(order);
    const newOrder = { tableNumber, contactNumber, date, time, orderItems: groupedItems };

    // Place the order and update order history
    placeOrder(newOrder);

    // Optionally, reset the form or notify the user of success
    setTableNumber('');
    setContactNumber('');
    setDate('');
    setTime('');
  };

  return (
    <div className="order-container">
      <h2>Your Order</h2>

      {/* Table to display order items */}
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {groupOrderItems(order).map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td> {/* Displaying ID based on index */}
              <td>{item.name}</td>
              <td>{item.quantity}</td> {/* Display the quantity */}
              <td>${(item.price * item.quantity).toFixed(2)}</td> {/* Display total cost */}
            </tr>
          ))}
        </tbody>
      </table>

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
