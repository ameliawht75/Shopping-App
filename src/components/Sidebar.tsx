//Creates a sidebar for adding and editing items
//Would like to make it so sidebar changes color based on adding or editing items.
//Another future idea is to add the category of the item so they can be filtered.

interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface SidebarProps {
    newItem: Item;
    setNewItem: React.Dispatch<React.SetStateAction<Item>>;
    addItem: (event: React.FormEvent) => void;  
    updateItem: (event: React.FormEvent) => void;
    editingItem: Item | null;
}

const Sidebar: React.FC<SidebarProps> = ({ newItem, setNewItem, addItem, updateItem, editingItem }) => {
    return (
      <div className="col-md-4 col-lg-3">
        <div className="sidebar p-4">
          <h4>{editingItem ? 'Edit Item' : 'Add Item'}</h4>
          <form onSubmit={editingItem ? updateItem : addItem}>
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-control"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {editingItem ? 'Update Item' : 'Add Item'}
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Sidebar;