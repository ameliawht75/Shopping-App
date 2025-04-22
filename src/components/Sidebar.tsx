//Creates a sidebar for adding and editing items
//Would like to make it so sidebar changes color based on adding or editing items.
//Another future idea is to add the category of the item so they can be filtered.

//import Item from './ItemCard'; Tried this alone and it didn't work.

import { useState, useEffect } from 'react';
import Item from '../data';

type SidebarProps = {
  onSubmit: (data: Omit<Item, 'id' | 'purchased'>, editingId?: number) => void;
  editingItem?: Item | null;
};

function Sidebar({ onSubmit, editingItem }: SidebarProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setPrice(editingItem.price.toString());
      setQuantity(editingItem.quantity.toString());
    } else {
      setName('');
      setPrice('');
      setQuantity('');
    }
  }, [editingItem]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const itemData = {
      name: name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    onSubmit(itemData, editingItem?.id);

    setName('');
    setPrice('');
    setQuantity('');
  }

  return (
    <div style={{ width: '250px', padding: '1rem', background: '#f0f0f0' }}>
      <h3>{editingItem ? 'Edit Item' : 'Add Item'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default Sidebar;

