import React from 'react'

interface Props {
    subTitle: string;
}

export const MysSubtitle = React.memo(({ subTitle }: Props) => {

    console.log("MySubTitle re-render ====> ", { subTitle })
    return (
        <>

            <h6 className='text-2xl font-bold'>{subTitle}</h6>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                update by fnc
            </button>
        </>
    )
})
