import React from 'react';


import App from "../App";
import Characterlist from "./CharacterInfo/Characterlist";
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch,
    useParams} from "react-router-dom";
import Locations from "./Locations/Locations";
import SingleCharacter from "./CharacterInfo/SingleCharacter";


export default function Navbar() {


        return (
            <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">PickleRick</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link"> Home </Link>
                      </li>
                        <li className="nav-item">
                            <Link to={'/characters'} className="nav-link">Character list</Link>
                      </li>
                        <li className="nav-item">
                            <Link to={'/locations'} className="nav-link">Locations</Link>
                      </li>
                    </ul>
                </div>
            </nav>

        <div>
            <hr />
            <Switch>
                <Route path='/characters'  component={Characterlist} />
                <Route path='/locations' component={Locations}  />
                <Route path="/characters/:characterId" component={SingleCharacter} />

            </Switch>
        </div>
    </Router>
        );

}