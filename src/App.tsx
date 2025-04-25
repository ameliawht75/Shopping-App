import { useState } from 'react';
import { item as testItems } from './data';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import CartSummary from './components/CartSummary';
import { Item } from './components/ItemCard';
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>(testItems);

  const handleSubmit = (data: Omit<Item, 'id' | 'purchased'>, editingId?: number) => {
    if (editingId) {
      const updated = items.map(item =>
        item.id === editingId ? { ...item, ...data } : item
      );
      setItems(updated);
    } else {
      const newItem: Item = {
        id: Date.now(),
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        purchased: false,
      };
      setItems([...items, newItem]);
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const onPurchased = (id: number) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
        <Sidebar onSubmit={handleSubmit} />
        <CartSummary total={total} />
      </div>
      <div style={{ padding: '1rem', flex: 1 }}>
        <h2>Grocery List</h2>
        <ItemList
          items={items}
          onDelete={deleteItem}
          onPurchased={onPurchased}
        />
      </div>
    </div>
  );
}

export default App;








