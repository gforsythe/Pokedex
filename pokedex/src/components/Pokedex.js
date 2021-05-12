import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { upperCase } from "../helpers/upperCase";
import axios from "axios";


const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "40px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",

  },

  cardContent: {
    textAlign: "center",
  },
});





export default function Pokedex(props) {
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
    .then(function(response){
      const {data} = response;
      const {results} = data;
      const newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
      })
      setPokemonData(newPokemonData)

    });
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];


    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia className={classes.cardMedia} image={sprite} style={{ width: "130px", height: "130px" }} />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${upperCase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };


  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map(pokemonId => getPokemonCard(pokemonId))}
        </Grid>
      ) : (
        <CircularProgress></CircularProgress>

      )}
    </>
  );
}

