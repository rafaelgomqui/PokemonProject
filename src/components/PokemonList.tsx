import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import './PokemonList.css'
import GetForm from "./GetForm";

function PokemonList(props: any) {

    const [pokemons, setPokemons] = useState([] as any[]);

    useEffect(() => {
        getPokemons(1, 10);
    }, []);

    const fetchPokemon = async (index: any) => {
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

    const pokemonCards = pokemons.map((pokemon: any) => (
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