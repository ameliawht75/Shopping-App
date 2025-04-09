//Gives a total price of the items.  In future would like to add sales tax.
interface Props {
    items: { id: number, name: string, price: number, quantity: number }[];
  }
  
  const CartSummary = ({ items }: Props) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="mt-4 text-end fw-bold">
        Total: ${total.toFixed(2)}
      </div>
    );
  };
  
  export default CartSummary; 
  
  