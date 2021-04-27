import React, { useState } from "react";
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
import mockData from "../mockData";


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
    textAlign:"center",
  },
});

const upperCase = name =>
  name.charAt(0).toUpperCase() + name.slice(1);



export default function Pokedex(props) {
  const {history} = props;
  const [pokemonData, setPokemonData] = useState(mockData);
  const classes = useStyles();

  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;


    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick = {() => history.push(`/${pokemonId}`)}>
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

