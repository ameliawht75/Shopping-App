//List the items as they are created following those in the data.ts file.  For future would like to do this based on categories like product, dairy, deli, etc.


import ItemCard from './ItemCard';


interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}


interface Props {
  items: Item[];
  deleteItem: (id: number) => void;
  editItem: (item: Item) => void;
}


function ItemList({ items, deleteItem, editItem }: Props) {
  return (
    <div className="mt-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />
      ))}
    </div>
  );
}


export default ItemList;


