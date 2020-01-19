import React, { useState, useRef } from "react";
import { PokemonType } from "./PokemonType";

export function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);
  const searchBox = useRef(null);
    const moveList = undefined;
        async function getPokemonInfo(name) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    const response = await fetch(URL);
    if (!response.ok) {
      alert("Pokemon does not exist");
      return;
    }
    const data = await response.json();
    setSelectedPokemon(data);
  }

  return (
    <div>
      {selectedPokemon && (
        <div>
          <h4>{selectedPokemon.species.name}</h4>

          <PokemonType type={selectedPokemon.types[0].type.name} />
          {selectedPokemon.types.length > 1 && (
            <PokemonType type={selectedPokemon.types[1].type.name} />
          )}
          <img src={selectedPokemon.sprites.front_default} alt="sprite" />

        </div>
      )}

      <input ref={searchBox} />

      <button onClick={() => getPokemonInfo(searchBox.current.value)}>
        Search
      </button>

    </div>
  );
}
