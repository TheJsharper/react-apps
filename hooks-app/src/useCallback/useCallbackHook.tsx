import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MysSubtitle } from "./ui/MysSubtitle";


export const UseCalbackHook = () => {
    const [title, setTitle] = useState('Hello');
    
    const [subTitle, setSubTitle] = useState('World');

    const handleMyAPICall = useCallback(()=>{
        console.log("====> callAPI",subTitle)
    }, [subTitle])
    return (
        <div className="bg-gradient  flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white"> MemoAPP</h1>

            <MyTitle title={title} />
            <MysSubtitle subTitle={subTitle} callMyAPI={handleMyAPICall} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hola, ' + new Date().getTime())}
            >
                Change title
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('Mundo, ' + new Date().getTime())}
            >
                Change SubTitle
            </button>

        </div>
    )
}

