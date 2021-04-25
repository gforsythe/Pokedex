import React from "react";
import { Route, Switch } from "react-router";
import Pokedex from "./components/Pokedex.js";
import Pokemon from "./components/Pokemon.js";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />} />
    </Switch>
  );
}

export default App;
