import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  Card,
  CardContent,
} from '@material-ui/core';

const pokedexStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "40px",
    paddingLeft: "50px",
    paddingRight: "50px",
  }
}); 

const getPokemonCard = () => {
  return (
  <Grid item xs={12} sm={4}> 
    <Card>
      <CardContent>This is Card Content</CardContent>
    </Card>
  </Grid>
  )
}

export default function Pokedex() {
  const classes = pokedexStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
      </Grid>
    </>
  );
}

