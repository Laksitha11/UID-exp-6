// src/ItemList.js
import React from 'react';

function ItemList({ items, removeItem }) {
  return (
    <div className="item-list">
      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <strong>{item.name}</strong> - {item.description} (Quantity: {item.quantity})
            </div>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
