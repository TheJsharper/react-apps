import { useCounter } from "../useEffect/useCounter";
import { usePokemon } from "../useEffect/usePokemon";

export const PokemonPage = () => {
    const { count, increment, decrement } = useCounter(1);
    const { pokemon, loading , formattedId } = usePokemon({ id: count });
    if (loading) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">Loading...</h3>
            </div>
        )
    }
    if (!pokemon) {
        return <div>No Pokémon found</div>;
    }
    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon.name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`}
                alt=""
            />

            <div className="flex gap-2">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={decrement}>
                    previous
                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
                    next
                </button>

            </div>
        </div>
    );
};