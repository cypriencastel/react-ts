import React from 'react'
import PokemonCard from '../Items/PokemonCard'
import PokemonInterface from '../../Interfaces/Pokemon'

interface State {
    selected: string;
    typeFilter: string;
    pokemonCards: Array<JSX.Element|void>;
}

interface Props {}

class PokemonList extends React.Component<Props, State> {
    constructor(props: object) {
        super(props);

        this.state = {
            selected: 'no pokemon selected',
            typeFilter: '',
            pokemonCards: []
        }
    }

    onClick(selected: string): void {
        
        this.setState({ selected })
    }

    componentDidMount() {
        this.setPokemon()
    }

    setPokemon() {
        const pokemonCards = this.gatherPokemon();

        this.setState({pokemonCards})
    }

    gatherPokemon(filterType: string = ''): Array<JSX.Element> {
        let pokemon: Array<PokemonInterface> = require('../../Data/pokemon.json');

        if (filterType !== '') {
            console.log(`has type filter ${filterType}`)
            pokemon = pokemon.filter((p: PokemonInterface) => {
                return p.type.includes(filterType)
            });
        }

        const pokemonCollection = pokemon.map((p: PokemonInterface) => <PokemonCard key={p.id} pokemon={p} handleClick={(selected: string) => this.onClick(selected)} />)

        return pokemonCollection;
    }

    handleFilterType(typeFilter: string) {
        console.log('handle filter change')
        this.setState({typeFilter})

        const pokemonCards = this.gatherPokemon(typeFilter);
        
        console.log({pokemonCards})

        this.setState({pokemonCards})
    }

    render () {

        return (
            <div>
                <p>{this.state.selected}</p>
                <p>{this.state.typeFilter}</p>
                <select value={this.state.typeFilter} onChange={({target}) => {this.handleFilterType(target.value)}}>
                    <option value={''}>None</option>
                    <option value={"fire"}>Fire</option>
                    <option value={'water'}>Water</option>
                    <option value={'grass'}>Grass</option>
                </select>
                <div className="pokemon-list">
                    {this.state.pokemonCards}
                </div>
            </div>
        );
    }
    
}

export default PokemonList