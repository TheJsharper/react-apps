import React from 'react'

interface Props {
    subTitle: string;
    callMyAPI: ()=> void 
}

export const MysSubtitle = React.memo(({ subTitle, callMyAPI }: Props) => {

    console.log("MySubTitle re-render ====> ", { subTitle })
    return (
        <>

            <h6 className='text-2xl font-bold'>{subTitle}</h6>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={callMyAPI}
            >
                update by fnc
            </button>
        </>
    )
})
