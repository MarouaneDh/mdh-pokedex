import { Switch,Route } from "react-router-dom";
import "./App.css";
import Johto from "./component/Johto";
import Kanto from "./component/Kanto";
import Hoenn from "./component/Hoenn";
import PokemonDescription from "./component/PokemonDescription";
import Home from "./component/Home";
import Sinnoh from "./component/Sinnoh";
import Unova from "./component/Unova";
import Kalos from "./component/Kalos";

function App() {

  return <div className="app-container">
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Kanto" component={Kanto}/>
      <Route exact path="/Johto" component={Johto}/>
      <Route exact path="/Hoenn" component={Hoenn}/>
      <Route exact path="/Sinnoh" component={Sinnoh}/>
      <Route exact path="/Unova" component={Unova}/>
      <Route exact path="/Kalos" component={Kalos}/>
      <Route exact path="/:id" component={PokemonDescription}/>
    </Switch>
  </div>;
}

export default App;
