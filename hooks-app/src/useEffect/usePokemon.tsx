import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface PokemonProps {
    id: number;
}


export const usePokemon = ({id}: PokemonProps) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);
    const getPokmon = async (id: number) => {
        setLoading(true);
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await resp.json();
        const pokemon: Pokemon = {
            id: data.id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        }
        setPokemon(pokemon);
        setLoading(false);
    }

    useEffect(() => {
        getPokmon(id);
    }, [id]);
    return{
        pokemon,
        loading,
        formattedId: String(id).padStart(3, '0'),
    }
}   
