// import axios from 'axios';

// // Define the API URL
// const API_URL = 'https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968';

// export const fetchMenuData = async () => {
//   try {
//     // Fetch data from the API
//     const response = await axios.get(API_URL);

//     // Check if the response contains the expected structure
//     if (response && response.data && response.data.record) {
//       // Return the 'record' array
//       return response.data.record;  // 'record' contains the array of menu items
//     } else {
//       console.error("Unexpected data structure:", response.data);
//       return [];
//     }
//   } catch (error) {
//     console.error("Error fetching menu data:", error);
//     return [];
//   }
// };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Define the API URL
// const API_URL = 'https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968';

// // Function to fetch menu data
// export const fetchMenuData = async () => {
//   try {
//     // Fetch data from the API
//     const response = await axios.get(API_URL);

//     // Check if the response contains the expected structure
//     if (response && response.data && response.data.record) {
//       // Return the 'record' array
//       return response.data.record;  // 'record' contains the array of menu items
//     } else {
//       console.error("Unexpected data structure:", response.data);
//       return [];
//     }
//   } catch (error) {
//     console.error("Error fetching menu data:", error);
//     return [];
//   }
// };

// Menu component to display menu items
// export const Menu = ({ addToOrder }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);  // Loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchMenuData();
//         console.log('Fetched Menu Data:', data);  // Log the fetched data

//         if (Array.isArray(data) && data.length > 0) {
//           setMenuItems(data);  // Set menu items directly if data is an array
//         } else {
//           console.warn('Menu items array is empty or invalid');
//           setMenuItems([]);  // Fallback to empty array
//         }
//       } catch (error) {
//         console.error('Error fetching menu data:', error);
//         setMenuItems([]);  // Set to empty array in case of error
//       } finally {
//         setLoading(false);  // Loading complete
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Menu</h1>
//       {loading ? (  // Show loading state
//         <p>Loading menu items...</p>
//       ) : (
//         <ul>
//           {menuItems.length > 0 ? (
//             menuItems.map((item) => (
//               item.availableQuantity > 0 ? (
//                 <li key={item.id}>
//                   <h3>{item.name} - ${item.price}</h3>
//                   <p>Category: {item.category}</p>
//                   <p>Available Quantity: {item.availableQuantity}</p>
//                   <button onClick={() => addToOrder(item)}>Add to Order</button>
//                 </li>
//               ) : null
//             ))
//           ) : (
//             <p>No menu items available.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default { fetchMenuData, Menu }; // Export both functions
