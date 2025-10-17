import React from "react";

interface Propos {
    title: string;
}

export const MyTitle = React.memo(({ title }: Propos) => {
    console.log("MyTitle re-render ====> ",{title})
    return (
        <h1 className="text-2xl font-thin "> {title}</h1>
    )
})