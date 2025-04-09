//Creates an card for each item that shows name, price, and quantity.  Added the delete and edit buttons here for simplicity. 
//Confirm delete and edit pop-up still needed.

interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  interface Props {
    item: Item;
    deleteItem: (id: number) => void;
    editItem: (item: Item) => void;  // Receive edit function
  }
  
  function ItemCard({ item, deleteItem, editItem }: Props) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ${item.price}</p>
          <p className="card-text">Quantity: {item.quantity}</p>
          <button
            className="btn btn-danger"
            onClick={() => deleteItem(item.id)}  // Delete button
          >
            Delete
          </button>
          <button
            className="btn btn-warning ms-2"
            onClick={() => editItem(item)}  // Edit button
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
  
  export default ItemCard;
  
  
  