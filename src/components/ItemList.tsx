import { Item } from '../data';

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onTogglePurchased: (id: number) => void;
  total: number;
}

const ItemList = ({ items, onDelete, onTogglePurchased, total }: ItemListProps) => {
  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5
                className={`card-title ${
                  item.purchased ? 'text-muted text-decoration-line-through' : ''
                }`}
              >
                {item.name}
              </h5>
              <p className="card-text">Price: ${item.price.toFixed(2)}</p>
              <p className="card-text">Quantity: {item.quantity}</p>
              <button
                className={`btn me-2 ${
                  item.purchased ? 'btn-success' : 'btn-outline-primary'
                }`}
                onClick={() => onTogglePurchased(item.id)}
              >
                {item.purchased ? 'Purchased' : 'Mark as Purchased'}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="col-12 mt-4">
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default ItemList;



