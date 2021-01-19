import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from "./Components/layout/NavBar";
import Dashboard from "./Components/layout/Dashboard";
import backgroundimage  from './rick.jpg'
import SingleCharacter from "./Components/CharacterInfo/SingleCharacter";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Locations from "./Components/Locations/Locations";

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
                            <Dashboard />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
