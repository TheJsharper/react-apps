import { useCounter } from "@/useEffect/useCounter"
import { useMemo } from "react";


const heavyStuff = (iterationCounter:number)=>{
    console.time('Heavy_stuff_started');

    for(let index= 0; index < iterationCounter; index++){
        console.log("here we go ...")
    }
    console.timeEnd('Heavy_stuff_finihed')

    return `${iterationCounter} iterations done`;
    

}

export const MemoCounter = () => {

    const { count, increment,} = useCounter(40_000);
    const { count:count2, increment:increment2,} = useCounter(40_000);

    const myHeavyValue =useMemo( ()=> heavyStuff(count),[count]);

    return (
        <div className="bg-gradient flex flex-col">
            <h1 className="text-2xl font-thin"> Memo - UseMeo {myHeavyValue}</h1>
            <hr />
            <h4>
                Counter:{count}
            </h4>
            <h4>
                Counter2:{count2}
            </h4>

            <button className="bg-blue-500 text-white px-4  rounded-md py-2 cursor-pointer"
                onClick={increment}
            >
                increment
            </button>
            <button className="bg-blue-500 text-white px-4  rounded-md py-2 cursor-pointer"
                onClick={increment2}
            >
                increment2
            </button>
        </div>
    )
}