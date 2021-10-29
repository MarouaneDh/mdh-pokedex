import React from 'react'
import { Link } from 'react-router-dom'
import Kanto from "../Assets/Kanto.jpg"
import Johto from "../Assets/Johto.jpg"
import Hoenn from "../Assets/Hoenn.png"
import Sinnoh from "../Assets/Sinnoh.png"
import Unova from "../Assets/Unova.png"
import Kalos from "../Assets/Kalos.jpg"

const Home = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img style={{width:"330px",marginBottom:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon" />
            <div style={{display:"flex",justifyContent:"space-around",width:"320px",flexWrap:"wrap"}}>
                <Link to={{pathname:"/Kanto"}}><img style={{width:"120px"}} src={Kanto} alt="kanto region"/></Link>
                <Link to={{pathname:"/Johto"}}><img style={{width:"120px"}} src={Johto} alt="johto region"/></Link>
                <Link to={{pathname:"/Hoenn"}}><img style={{width:"120px"}} src={Hoenn} alt="hoenn region"/></Link>
                <Link to={{pathname:"/Sinnoh"}}><img style={{width:"120px"}} src={Sinnoh} alt="Sinnoh region"/></Link>
                <Link to={{pathname:"/Unova"}}><img style={{width:"120px"}} src={Unova} alt="Unova region"/></Link>
                <Link to={{pathname:"/Kalos"}}><img style={{width:"120px"}} src={Kalos} alt="Kalos region"/></Link>
            </div>
        </div>
    )
}

export default Home
