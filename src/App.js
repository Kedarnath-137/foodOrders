import React, { useState } from 'react';
import Menu from './Components/Menu'; // Ensure correct path
import Order from './Components/Order'; // Ensure correct path
import OrderHistory from "./Components/OrderHistory";
import './App.css';

const App = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
  };

  const placeOrder = (orderDetails) => {
    setOrderHistory([...orderHistory, orderDetails]);
    setCurrentOrder([]); 
  };

  return (
    <div>
      <Menu addToOrder={addToOrder} /> 
      <Order order={currentOrder} placeOrder={placeOrder} />
      <OrderHistory orders={orderHistory} />
      
    </div>
  );
};

export default App;

