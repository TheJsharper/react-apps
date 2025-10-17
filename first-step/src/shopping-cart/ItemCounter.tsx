import React from 'react'
import './ItemCounter.scss'
interface Props {
    name: string;
    quantity?: number;

}
export const ItemCounter = ({ name, quantity = 0 }: Props) => {

    const [count, setCount] = React.useState(quantity);


 
    const handlerIncrease = () => {
        console.log(`Increase ${name} quantity`);
        setCount(count + 1);
    };
    const handlerDecrease = () => {
        if (count === 0) return;
        console.log(`Decrease ${name} quantity`);
        setCount(count - 1);
    };
    return (
        <section className='item-counter' >
            <span className='text' style={{ color: count < 1 ? 'red' : 'inherit' }}>{name}</span>
            <button onClick={handlerIncrease}>+1</button>
            <span>{count}</span>
            <button onClick={handlerDecrease}>-1</button>
        </section>
    )
}
