//Creates a sidebar for adding and editing items
//Would like to make it so sidebar changes color based on adding or editing items.
//Another future idea is to add the category of the item so they can be filtered.

//import Item from './ItemCard'; Tried this alone and it didn't work.

interface SidebarProps {
  onAddItem: () => void;
}

const Sidebar = ({ onAddItem }: SidebarProps) => {
  return (
    <div className="bg-light p-3" style={{ minWidth: '250px', height: '100vh' }}>
      <h4>Add Item</h4>
      <button className="btn btn-primary mt-3" onClick={onAddItem}>
        + Add Item
      </button>
    </div>
  );
};

export default Sidebar;
