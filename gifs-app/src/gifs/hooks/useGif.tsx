import { useRef, useState, type RefObject } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";
export const useGif = () => {


    
    const [gifs, setGifs] = useState<Gif[]>([]);

    const [previousSearches, setPreviousSearches] = useState<string[]>([]);

    const gifsCache: RefObject<Record<string, Gif[]>> = useRef<Record<string, Gif[]>>({}); //.current;

    const handleSearchClick = async (search: string) => {
        console.log("Searching for:", search);
        if (gifsCache.current[search]) {
            setGifs(gifsCache.current[search]);
            return;
        }
        const gifs = await getGifsByQuery(search);
        gifsCache.current[search] = gifs;
        setGifs(gifs);
    };

    const handleSearchSubmit = async (search: string) => {

        const value = search.trim().toLocaleLowerCase();

        if (value.length === 0 || previousSearches.includes(value)) return;


        const currentSearches = previousSearches.filter(s => s !== value);

        setPreviousSearches([value, ...currentSearches].splice(0, 8));

        const gifs = await getGifsByQuery(value);

        setGifs(gifs);
        gifsCache.current[value] = gifs;
        console.log("Searching for:", value);


    };
    

  return { gifs, previousSearches, handleSearchClick, handleSearchSubmit, gifsCache };
};