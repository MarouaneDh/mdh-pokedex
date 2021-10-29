import { useEffect, useState } from "react";
import PokemonThumnail from "./PokemonThumnail";
import {Link} from "react-router-dom"


function Hoenn() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251")
  const [load, setLoad] = useState(false)
  const [screenPokemon, setScreenPokemon] = useState()
  
  const getAllPokemons=async()=>{
    const res=await fetch(loadMore)
    const data =await res.json()
    setLoadMore(data.next)
    

     function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }
console.log(screenPokemon);


  useEffect(() => {
    getAllPokemons()
    setTimeout(function(){
      setLoad(true)
    },2000)
  }, [])

  const style = screenPokemon && screenPokemon.types[0].type.name + " screen";
    return (
        <div>
            {load===false?
    <img style={{width:"200px"}} src="https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif" alt="" />
    :<div>
      <Link to={{pathname:"/"}}><button style={{marginBottom:"10px"}}>Back to regions</button></Link>
    <div className="pokemon-container">
      <div className="all-container">
        {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumnail
            setScreenPokemon={setScreenPokemon}
              key={index}
              pokemonStats={pokemonStats}
            />)}
      </div>
      {/* <button className="load-more" onClick={getAllPokemons}>Load more</button> */}
    </div>
    <Link to={{pathname:`/${screenPokemon && screenPokemon.id}`}} className={style}>
          <img style={{width:"130px"}} src={screenPokemon && screenPokemon.sprites.other.dream_world.front_default} alt={screenPokemon && screenPokemon.name} />
          <p>{screenPokemon && screenPokemon.name.charAt(0).toUpperCase()+screenPokemon.name.slice(1)}</p>
    </Link>
    </div>}
        </div>
    )
}

export default Hoenn
