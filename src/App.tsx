import { useState } from 'react';
import { items as testItems } from './data'; //Red line but will works.
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import CartSummary from './components/CartSummary'; //Yellow but still works.
import { Item } from './components/ItemCard';

function App() {
  const [items, setItems] = useState<Item[]>(testItems);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  function handleSubmit(data: Omit<Item, 'id' | 'purchased'>, editingId?: number) {
    if (editingId) {
      const updated = items.map(item =>
        item.id === editingId ? { ...item, ...data } : item
      );
      setItems(updated);
      setEditingItem(null);
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
  }

  function deleteItem(id: number) {
    setItems(items.filter(item => item.id !== id));
  }

  function onPurchased(id: number) {
    const updated = items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updated);
  }

  /*function startEditing(item: Item) {
    setEditingItem(item);
  }*/

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onSubmit={handleSubmit} editingItem={editingItem} />
      <div style={{ padding: '1rem' }}>
        <h2>Grocery List</h2>
        <ItemList
          items={items}
          onDelete={deleteItem}
          onPurchased={onPurchased}
          //onEdit={startEditing}
          />
        <CartSummary total={total}/>
      </div>
    </div>
  );
}

export default App;








