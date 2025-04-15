import { useState } from 'react';
import { items as testItems, Item } from './data';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import CartSummary from './components/CartSummary';

function App() {
  const [items, setItems] = useState<Item[]>(testItems);

  const addItem = () => {
    const newId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem: Item = {
      id: newId,
      name: 'New Product',
      price: 19.99,
      quantity: 1,
      purchased: false
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const togglePurchased = (id: number) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updatedItems);
  };

  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="d-flex">
      <Sidebar onAddItem={addItem} />
      <div className="container mt-4">
        <h1>Shopping Cart</h1>
        <ItemList
          items={items}
          onDelete={deleteItem}
          onTogglePurchased={togglePurchased}
          total={total}
        />
      </div>
    </div>
  );
}

export default App;








