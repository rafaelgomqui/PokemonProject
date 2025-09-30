import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <>
      <h2>Pokémon Selecionado</h2>

      {selectedPokemon && (
        <div className="selected-pokemon">
          <PokemonDetails pokemon={selectedPokemon} />
        </div>
      )}

      <h2>Lista de Pokemons</h2>

      <PokemonList selectPokemon={setSelectedPokemon} />
    </>
  )
}

export default App
