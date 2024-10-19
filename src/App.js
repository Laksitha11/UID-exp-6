// src/App.js
import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
