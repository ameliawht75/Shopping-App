//Creates a card for each item that shows name, price, and quantity.  Add the delete and edit buttons here for simplicity. 
//Confirm delete and edit pop-up still needed.
//If I can get the category idea to work will add that to the card as well depending on cosmetics.

export interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  function ItemCard({ item, deleteItem, editItem }: Props) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ${item.price}</p>
          <p className="card-text">Quantity: {item.quantity}</p>
        </div>
      </div>
    );
  }
  
  export default ItemCard;
  
  
  