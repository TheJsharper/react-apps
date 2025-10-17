import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

const  itemIncarts: ItemCounterProps[] = [
  { name: "Nintendo Switch 2", quantity: 2 },
  { name: "PlayStation 5", quantity: 1 },
  { name: "Xbox Series X", quantity: 3 },
  { name: "Steam Deck", quantity: 5 },
]
const  MyAwesomeApp = () => {
  return <>
    <h1>My Awesome App</h1>
    <h3>This is a simple React application.</h3>
    {itemIncarts.map(item => (
      <ItemCounter key={item.name} name={item.name} quantity={item.quantity} />
    ))}
  </>
}
export default MyAwesomeApp