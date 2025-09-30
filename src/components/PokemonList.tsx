import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import './PokemonList.css'
import GetForm from "./GetForm";
import type { pokemonType } from "./PokemonInterface";
    

function PokemonList(props: { selectPokemon: (pokemon: pokemonType) => void }) {

    const [pokemons, setPokemons] = useState([] as { id: number; name: string; sprites: { front_default: string }; stats: { base_stat: number }[] }[]);

    useEffect(() => {
        getPokemons(1, 10);
    }, []);

    const fetchPokemon = async (index: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data;
    }

    const getPokemons = async (from: number, to: number) => {
        const pkmArr = [];

        for (let i = from; i <= to; i++) {
            const pokemon = await fetchPokemon(i);
            pkmArr.push(pokemon);
        }

        setPokemons(pkmArr);
    }

    const pokemonCards = pokemons.map((pokemon: { id: number; name: string; sprites: { front_default: string }; stats: { base_stat: number }[] }) => (
        <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectPokemon={props.selectPokemon}
        />
    ));

    return (
        <div>
            <GetForm getPokemons={getPokemons} />
            <ul className="pokemon-list">
                {pokemonCards}
            </ul>
        </div>
    )
}

export default PokemonList