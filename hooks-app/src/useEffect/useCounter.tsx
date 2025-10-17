import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => { if (count <= 0) return; setCount((c) => c - 1); };
    const reset = () => setCount(initialValue);

    return {
        count,
        increment,
        decrement,
        reset,
    }
}
