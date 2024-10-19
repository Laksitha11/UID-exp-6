// src/ItemForm.js
import React, { useState } from 'react';

function ItemForm({ addItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && quantity) {
      addItem({ name, description, quantity });
      setName('');
      setDescription('');
      setQuantity('');
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
