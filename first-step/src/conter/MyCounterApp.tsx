import { useCounter } from "./hooks/useCounter";

export const MyCounterApp = () => {
    const { count, increment, decrement, reset } = useCounter(5);
    return <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>


        <h1>Counter: {count}</h1>
        <div style={{ height: '20px' }}></div>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={ decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+1</button>
        </div>

    </div>;
}