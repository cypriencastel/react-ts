import PokemonInterface from '../Interfaces/Pokemon'

export default function (id: number): PokemonInterface|null {
    const pokemonData: Array<PokemonInterface> = require('../Data/pokemon.json')
    const pokId = id - 1;

    if (pokemonData[pokId]) {

        return pokemonData[pokId]
    } else {

        return null
    }
}