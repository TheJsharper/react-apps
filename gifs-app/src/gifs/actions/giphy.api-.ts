import axios from "axios";

export const giphyApi =  axios.create({
    baseURL: import.meta.env.VITE_GIPHY_API_URL,
    params: {
        lang: 'en',
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
    },
});
