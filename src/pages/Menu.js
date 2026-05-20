import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const menuItems = {
    'Starters': [
      { name: 'Paneer Tikka', price: '₹280' },
      { name: 'Chicken Lollipop', price: '₹320' },
      { name: 'Cheese Balls', price: '₹200' },
    ],
    'Main': [
      { name: 'Tikka Masala', price: '₹380' },
      { name: 'Grill Chicken', price: '₹340' },
    ],
    'Chinese': [
      { name: 'Manchurian', price: '₹280' },
      { name: 'Sizzler', price: '₹320' },
    ],
    'Desserts': [
      { name: 'Sizzling Brownie', price: '₹180' },
    ],
  };

  const categories = ['All', ...Object.keys(menuItems)];
  const displayItems = activeCategory === 'All' ? Object.values(menuItems).flat() : menuItems[activeCategory] || [];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {displayItems.map((item, idx) => (
          <div key={idx} className="menu-card">
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
