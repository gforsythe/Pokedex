import React, { useState } from "react";
import mockData from '../mockData'

export default  function Pokemon(props)  {
  const {match} = props;
  const {params} = match;
  const {pokemonId} = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

  const createPokemonCode = () => {
    const {name, id, species, height, weight, types, sprites} = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;  }

  return (
    <>
    </>
  );
}

