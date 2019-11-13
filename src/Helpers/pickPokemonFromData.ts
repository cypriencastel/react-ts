import PokemonInterface from '../Interfaces/Pokemon'

export default function (id: number): PokemonInterface|null {
    const pokemonData: Array<PokemonInterface> = require('../Data/pokemon.json')

    if (pokemonData[id]) {

        return pokemonData[id]
    } else {

        return null
    }
}