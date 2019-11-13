import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

import PokemonList from '../Components/Lists/PokemonList';
import Pokemon from '../Components/Items/PokemonDetails';
import PokemonInterface from '../Interfaces/Pokemon'
import pickPokemon from '../Helpers/pickPokemonFromData'
import NotFound from '../NotFound';


const DefaultLayout: React.FC = function () {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <PokemonList />
                </Route>
                <Route path="/pokemon/:id" children={<PokemonPage />}></Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );    
}

function PokemonPage() {
    let { id } = useParams()

    if (id === undefined) {

        return (<NotFound />)
    }

    const pokemon: PokemonInterface|null = pickPokemon(parseInt(id))

    if (pokemon === null) {

        return (<Pokemon pokemon={require('../Data/missingno.json')} />)
    }

    return (<Pokemon pokemon={pokemon} />)
}

export default DefaultLayout