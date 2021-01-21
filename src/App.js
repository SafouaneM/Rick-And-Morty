import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from "./Components/layout/NavBar";
import Dashboard from "./Components/layout/Dashboard";
import backgroundimage  from './rick.jpg'
import SingleCharacter from "./Components/CharacterInfo/SingleCharacter";
import EpisodelistofChar from "./Components/Episodes/EpisodelistofChar";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Locations from "./Components/Locations/Locations";
import Characterlist from "./Components/CharacterInfo/Characterlist";
import Characterlist from "./Components/CharacterInfo/Characterlist";
import SingleLocation from "./Components/Locations/SingleLocation";
import ResidentslistofLoc from "./Components/Locations/ResidentslistofLoc";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App" style={{background: `url(${backgroundimage})`}}>
                    <NavBar></NavBar>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/locations" component={Locations}/>
                            <Route exact path="/character/:id" component={SingleCharacter}/>
                            <Route exact path="/page/:pageNumber" component={Characterlist}/>
                            <Route exact path="/episodeslist/:id" component={EpisodelistofChar}/>
                            <Route exact path="/page/:pageNumber" component={Characterlist}/>
                            <Route exact path="/episodeslist/:id" component={EpisodelistofChar}/>
                            <Route exact path="/resident/character/:id" component={SingleCharacter}/>
                            <Route exact path="/resident/:id" component={ResidentslistofLoc}/>
                            <Route exact path="/resident" component={ResidentslistofLoc}/>
                            <Route exact path="/location/:id" component={SingleLocation}/>
                            <Dashboard />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
