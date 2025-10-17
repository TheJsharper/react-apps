import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";
import { giphyApi } from "./giphy.api-";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const url = `/search`;
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;


    try {
        const response = await giphyApi.get<GiphyResponse>(url, {
            params: {
                api_key: apiKey,
                q: query,
                limit: 10,
                offset: 0,
                lang: 'en'
            }
        });
        console.log("Giphy API response:", response.data);

        return response.data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.height)
        })) as Gif[];
    } catch (error) {
        console.error("Error fetching gifs:", error);
       //
       return [] as Gif[];
        
    }


};  
