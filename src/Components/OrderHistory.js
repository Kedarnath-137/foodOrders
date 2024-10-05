import React from 'react';
import './OrderHistory.css'; 

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history-container">
      <h1>Order History</h1>
      {orders.length > 0 ? (
        <table className="order-history-table">
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Order Time</th>
              <th>Table Number</th>
              <th>Contact</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.date}</td>
                <td>{order.time}</td>
                <td>{order.tableNumber}</td>
                <td>{order.contactNumber || 'N/A'}</td>
                <td>
                  <ul className="order-items-list">
                    {order.orderItems.map((item, idx) => (
                      <li key={idx} className="order-item">
                        {item.name} - ${item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
