import React from 'react'
import PokemonInterface from '../../Interfaces/Pokemon'

interface Props {
    pokemon: PokemonInterface
}


function PokemonDetails(props: Props) {
    const { pokemon } = props

    return (
        <div className="pokemon-details">
            <header>
                <img src={pokemon.img_path} alt="pokemon"/>
            </header>
            <article>
                {pokemon.name}
            </article>
        </div>
    );    
}  


export default PokemonDetails