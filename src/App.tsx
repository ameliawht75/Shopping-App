import { useState } from 'react'; //This came from a couple YouTube tutorials.
import { items as initialItems } from './data';
import Header from './components/Header';
import ItemList from './components/ItemList';
import CartSummary from './components/CartSummary';
import type { Item } from './components/ItemCard'; //I am using this to manage the items being added and edited.

function App() { //integrated useState here to manage items being added and edited.
  const [items, setItems] = useState<Item[]>(initialItems);
  const [newItem, setNewItem] = useState<Item>({ id: 0, name: '', price: 0, quantity: 1 });
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const addItem = (event: React.FormEvent) => {
    event.preventDefault(); 

    if (newItem.name && newItem.price > 0) {
      const newId = items.length ? Math.max(...items.map((item) => item.id)) + 1 : 1;
      setItems([...items, { ...newItem, id: newId }]);
      setNewItem({ id: 0, name: '', price: 0, quantity: 1 });
    }
  };

  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const editItem = (item: Item) => {
    setEditingItem(item);
    setNewItem(item);
  };

  const updateItem = (event: React.FormEvent) => {
    event.preventDefault(); 

    if (newItem.name && newItem.price > 0) {
      setItems(items.map((item) => (item.id === newItem.id ? newItem : item)));
      setEditingItem(null);
      setNewItem({ id: 0, name: '', price: 0, quantity: 1 });
    }
  };

  return (
    <div className="container-fluid mt-4">
      <Header />
      <div className="row">
        <div className="col-md-8 col-lg-9">
          <ItemList items={items} deleteItem={deleteItem} editItem={editItem} />
          <CartSummary items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;







