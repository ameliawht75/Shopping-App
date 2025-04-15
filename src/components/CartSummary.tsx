//Gives a total price of the items.  
// In future would like to add sales tax.  Will need a function that allows user to add sales tax based on location and add it to the total.

interface Props {
  items: { id: number, name: string, price: number, quantity: number }[];
}

/*function calculateTax (price, quantity) {
  var salesTax = 0.06; //Sales tax in my state
  var totalPrice = (price * quantity) * (1 + salesTax);;
  return totalPrice;
}*/

const CartSummary = () => {
    return <div>Cart Summary</div>;
};

export default CartSummary;


