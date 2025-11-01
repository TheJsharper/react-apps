import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPage = async (): Promise<HeroesResponse> => {
    const { data } = await heroApi.get<HeroesResponse>(`/`)


    const heroes = data.heroes.map((hero) => ({ ...hero, image: `${BASE_URL}/images/${hero.image}` }));
    
    console.log("api call", data);
    return {
        ...data,
        heroes,
    }

}