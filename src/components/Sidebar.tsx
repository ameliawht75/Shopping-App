//Creates a sidebar for adding and editing items
//Another future idea is to add the category of the item so they can be filtered.

import { useState } from 'react';

type item = { //Kept getting an error when I used Item so put this in and it seemed to resolve.
  id: string;
  name: string;
  price: number;
  quantity: number;
  purchased: boolean;
};

type SidebarProps = {
  onSubmit: (data: Omit<item, 'id' | 'purchased'>) => void;
};

function Sidebar({ onSubmit }: SidebarProps) {
  const [name, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemData = {
      name: name.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };

    if (!itemData.name || isNaN(itemData.price) || isNaN(itemData.quantity)) {
      alert('Please fill out all fields with valid values.');
      return;
    }

    onSubmit(itemData);

    setProduct('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div className = "sidebar">
      <h3>{'Add Item'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item:</label>
          <input
            type="text"
            value={name}
            onChange={e => setProduct(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">{'Add'}</button>
      </form>
    </div>
  );
}

export default Sidebar;

