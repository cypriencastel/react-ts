import React from 'react'
import PokemonCard from '../Items/PokemonCard'
import PokemonInterface from '../../Interfaces/Pokemon'

interface State {
    selected: string;
}

interface Props {}

class PokemonList extends React.Component<Props, State> {
    constructor(props: object) {
        super(props);

        this.state = {
            selected: 'no pokemon selected'
        }
    }

    onClick(selected: string): void {
        
        this.setState({ selected })
    }

    render () {
        const pokemon: Array<PokemonInterface> = require('../../Data/pokemon.json');
        const pokemonCollection = pokemon.map((p: PokemonInterface) => <PokemonCard pokemon={p} handleClick={(selected: string) => this.onClick(selected)} />)

        return (
            <div>
                <p>{this.state.selected}</p>
                <div className="pokemon-list">
                    {pokemonCollection}
                </div>
            </div>
        );
    }
    
}

export default PokemonList