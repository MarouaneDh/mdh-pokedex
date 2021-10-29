import React, { useEffect,useState } from 'react'
import {getPokemon} from "../Redux/pokemonActions"
import { useDispatch, useSelector } from "react-redux";
import { Radar } from 'react-chartjs-2';
import {Link} from "react-router-dom"

const PokemonDescription = ({match}) => {
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)
    const [loading, setLoading] = useState(false)
    const [shiny, setShiny] = useState(false)
    const [backRegion, setBackRegion] = useState("")
    const dispatch = useDispatch();

    const handleBack=(id)=>{
      if(id<152){
        setBackRegion("Kanto")
      }
      if(id>151 && id<252){
        setBackRegion("Johto")
      }
      if(id>251 && id<387){
        setBackRegion("Hoenn")
      }
      if(id>386 && id<495){
        setBackRegion("Sinnoh")
      }
      if(id>494 && id<650){
        setBackRegion("Unova")
      }
      if(id>649){
        setBackRegion("Kalos")
      }
    }
    
    let statis =[]
    let statVals=[]
    pokemon.stats && pokemon.stats.map(stat=>(statis.push(stat.stat.name)))
    pokemon.stats && pokemon.stats.map(stat=>(statVals.push(stat.base_stat)))
    
    const toggleShiny=()=>{
      !shiny?setShiny(true):setShiny(false)
    }

    useEffect(() => {
        handleBack(pokemon.id)
        setLoading(true)
        dispatch(getPokemon(match.params.id));
        const checkLoad=(id)=>{
            if(id===match.params.id){
            setLoading(false)
        }
    }
    checkLoad(pokemon.id)
  }, [dispatch, match.params.id,pokemon.id]);
  const data = {
  labels: statis,
  datasets: [
    {
      label: 'Stats',
      data: statVals,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
    scales:{
        r: {
        angleLines: {
          color: 'gray'
        },
        grid: {
          color: 'gray'
        },
        ticks: {
          display:false
        },
        suggestedMin: 0
      }
    },
  scale: {
    ticks: { beginAtZero: false },
  },
  plugins:{
      legend: {
                display: false,
            }
  }
};
//   const style = pokemon.type && pokemon.types[0].type.name + " thumb-container"
    return (
        <div>
            {!loading?<img style={{width:"200px"}} src="https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif" alt="" />:
            <div style={{position:"relative"}}>
              <Link style={{position:"absolute",top:"-28px"}} to={{pathname:`/${backRegion}`}}><button className="prevNextShiny">Go back {backRegion} pokedex</button></Link>
              <div style={{display:"flex",marginBottom:"5px"}}>
                {pokemon.id!==1?<Link to={{pathname:`/${pokemon.id-1}`}}><button className="prevNextShiny">Previous Pokemon</button></Link>:null}
                <button className="prevNextShiny" onClick={toggleShiny}>Shiny</button>
                <Link to={{pathname:`/${pokemon.id+1}`}}><button className="prevNextShiny">Next Pokemon</button></Link>
              </div>
                <div className="pokemon-hero">
                <p className="pokemon-type">{
                    pokemon.id && pokemon.types.map(type=>(
                        <div>
                            <img src={type.type.url} alt="" />
                            <p>{type.type.name}</p>
                        </div>
                    ))
                }</p>
                <div>
                    <div>#0{pokemon.id}</div>
                    <p className="pokemon-type">{pokemon.type && pokemon.types[0].type.name}</p>
                    {!shiny?pokemon.sprites && <img style={{width:"200px"}} src={pokemon.sprites.other.home.front_default} alt="" />:pokemon.sprites && <img style={{width:"200px"}} src={pokemon.sprites.other.home.front_shiny} alt="" />}
                    <h3>{pokemon.name && pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h3>
                </div>
            </div>
            <div className="pokemon-description">
                <div className="pokemon-body">
                    <p style={{marginRight:"20px"}}>Weight : {pokemon.weight} lbs</p>
                    <p>Height : {pokemon.height} ft</p>
                </div>
                {/* <div className="pokemon-stats">
                    {pokemon.stats && pokemon.stats.map(stat=>(
                        <p>{stat.stat.name} : {stat.base_stat}</p>
                    ))}
                </div> */}
                <Radar style={{width:"250px",height:"250px"}} data={data} options={options} />
            </div>
            </div>
            
            }
        </div>
    )
}

export default PokemonDescription
