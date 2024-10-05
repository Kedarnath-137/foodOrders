import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css'; 

const API_URL = 'https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968';

const Menu = ({ addToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        console.log('Full API Response:', response.data);

        if (response && response.data && response.data.record) {
          const data = response.data.record;
          console.log('Fetched Menu Data:', JSON.stringify(data, null, 2));

          if (Array.isArray(data) && data.length > 0) {
            // Clone the data to keep track of available quantities
            const updatedData = data.map(item => ({ ...item, available_quantity: item.available_quantity }));
            setMenuItems(updatedData);
          } else {
            console.warn('Menu items array is empty or invalid');
            setMenuItems([]);
          }
        } else {
          console.error("Unexpected data structure:", response.data);
          setMenuItems([]);
        }
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToOrder = (item) => {
    if (item.available_quantity > 0) {
      // Add item to order
      addToOrder(item);

      // Reduce the quantity
      const updatedMenuItems = menuItems.map(menuItem => {
        if (menuItem.id === item.id) {
          return {
            ...menuItem,
            available_quantity: menuItem.available_quantity - 1
          };
        }
        return menuItem;
      });

      setMenuItems(updatedMenuItems);
    }
  };

  console.log('Menu Items:', menuItems);

  return (
    <div>
      <h1>Menu</h1>
      {loading ? (
        <p>Loading menu items...</p>
      ) : (
        <div className="menu-container">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <div className="menu-card" key={item.id}>
                <img src={item.image_url} alt={item.name} className="menu-image" />
                <h3 className="menu-title">{item.name}</h3>
                <p className="menu-category">Category: {item.category}</p>
                <p className="menu-price">Price: ${item.price.toFixed(2)}</p>
                <p className="menu-quantity">
                  {item.available_quantity > 0 ? `Available: ${item.available_quantity}` : 'Out of Stock'}
                </p>
                {item.available_quantity > 0 ? (
                  <button className="add-to-order" onClick={() => handleAddToOrder(item)}>Add to Order</button>
                ) : (
                  <button className="out-of-stock" disabled>Out of Stock</button>
                )}
              </div>
            ))
          ) : (
            <p>No menu items available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
