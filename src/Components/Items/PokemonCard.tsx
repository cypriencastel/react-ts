import React from 'react'
import PokemonInterface from '../../Interfaces/Pokemon';
import { Link } from "react-router-dom";


interface Props {
    pokemon: PokemonInterface;
    handleClick: (selected: string) => void;
}

const PokemonCard = (props: Props) => {
    const pokemon: PokemonInterface = props.pokemon;

    return (
        <Link to={`pokemon/${pokemon.id}`}>
            <div onClick={() => props.handleClick(pokemon.name)} className={pokemon.slug}>
                <h3>{pokemon.name}</h3>
                <img src={`${pokemon.img_path}`} alt={pokemon.slug}/>
            </div>
        </Link>
    );
}

export default PokemonCard