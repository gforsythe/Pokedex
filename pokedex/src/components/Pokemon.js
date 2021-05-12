import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Link, Typography } from '@material-ui/core';
import { upperCase } from '../helpers/upperCase';
import axios from "axios";

export default function Pokemon(props) {
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);

      })
      .catch(function (error) {
        setPokemon(false);
      });

  }, [pokemonId]);



  const createPokemonCode = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Typography variant="h1">
          {`${id}. ${upperCase(name)}`}
          <img src={front_default} />
        </Typography>
        <img style={{ width: "300px", height: "300Px" }} src={fullImageUrl} />
        <Typography variant="h3">
          Pokemon Info
        </Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>
          Height: {height}
        </Typography>
        <Typography>
          Weight: {weight}
        </Typography>
        <Typography variant="h6">Types</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}>{`${name}`}</Typography>;
        })}

      </>
    );
  };

  //three states to render
  //1. undefined => load data
  //2. good data => pokemon 
  //3. bad data => cant find / false 

  return (
    <>

      {pokemon === undefined && <CircularProgress></CircularProgress>}
      {pokemon !== undefined && pokemon && createPokemonCode()}
      {pokemon === false && <Typography>Pokemon Not Found</Typography>}
      <Button variant="contained" onClick={() => history.push("/")}>Return To Pokedex</Button>
    </>
  );
}

