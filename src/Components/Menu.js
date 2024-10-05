import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css'; // Import CSS for styling

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
            setMenuItems(data);
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
              item.available_quantity > 0 ? (
                <div className="menu-card" key={item.id}>
                  <img src={item.image_url} alt={item.name} className="menu-image" />
                  <h3 className="menu-title">{item.name}</h3>
                  <p className="menu-category">Category: {item.category}</p>
                  <p className="menu-price">Price: ${item.price.toFixed(2)}</p>
                  <p className="menu-quantity">Available: {item.available_quantity}</p>
                  <button className="add-to-order" onClick={() => addToOrder(item)}>Add to Order</button>
                </div>
              ) : null
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
