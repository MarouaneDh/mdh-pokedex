import React from 'react'

const PokemonThumnail = ({pokemonStats,setScreenPokemon}) => {
    const handleClick=()=>{
        setScreenPokemon(pokemonStats)
    }
    const style = pokemonStats.types[0].type.name + " thumb-container";
    return (
        <div onClick={handleClick} to={{pathname:`/${pokemonStats.id}`,state:pokemonStats}} className={style}>
            <div className="number"><small>#0{pokemonStats.id}</small></div>
            <img src={pokemonStats.sprites.front_default} alt={pokemonStats.name} />
                <h3>{pokemonStats.name.charAt(0).toUpperCase()+pokemonStats.name.slice(1)}</h3>
        </div>
    )
}

export default PokemonThumnail