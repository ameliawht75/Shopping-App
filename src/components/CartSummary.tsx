//Gives a total price of the items.  
// In future would like to add sales tax.  Will need a function that allows user to add sales tax based on location and add it to the total.

/*function calculateTax (price, quantity) {
  var salesTax = 0.06; //Sales tax in my state
  var totalPrice = (price * quantity) * (1 + salesTax);;
  return totalPrice;
}*/

type CartSummaryProps = {
  total: number;
};

function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="mt-4">
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}

export default CartSummary;


