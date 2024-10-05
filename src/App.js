// src/App.js
import React, { useState, useEffect } from 'react';
import Menu from './Components/Menu'; // Ensure correct path
import Order from './Components/Order'; // Ensure correct path
import OrderHistory from './Components/OrderHistory'; // Correct import path
import './App.css';

const App = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  // Load orders from local storage when app mounts
  useEffect(() => {
    const storedOrders = localStorage.getItem('orderHistory');
    if (storedOrders) {
      setOrderHistory(JSON.parse(storedOrders));
    }
  }, []);

  const addToOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
  };

  const placeOrder = (orderDetails) => {
    // Update order history state and local storage
    const updatedOrderHistory = [...orderHistory, orderDetails];
    setOrderHistory(updatedOrderHistory);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrderHistory));

    // Clear the current order after placing
    setCurrentOrder([]);
  };

  return (
    <div>
      <Menu addToOrder={addToOrder} /> 
      <Order order={currentOrder} placeOrder={placeOrder} />
      <OrderHistory orders={orderHistory} /> {/* Pass orderHistory as prop */}
    </div>
  );
};

export default App;
