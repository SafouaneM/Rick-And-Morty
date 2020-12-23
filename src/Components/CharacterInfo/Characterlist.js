import logo from '../../logo.svg';
import React, {useState, useEffect} from 'react';
import '../../App.css';
import Card from "./Card";
import {Jumbotron} from "../Jumbotron";
import Navbar from "../Navbar";
import {Row} from "../Row";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import axios from 'axios';


function Characterlist() {
    let match = useRouteMatch();
    const url = 'https://rickandmortyapi.com/api/character/';
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setCharacter(response.data.results)
        })
    },[url])

    if(character) {
        return (

            <div className="main">
                <Jumbotron></Jumbotron>

                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        {character.slice(0,6).map(char => {
                            return <Card

                                image={char.image}
                                species={char.species}
                                status={char.status}
                                location={char.location.name}
                                name={char.name}
                                key={char.id}
                                id={char.id}/>;
                        })}
                    </div>



                </div>
            </div>
        );
    }
    return (
        <div className="main">
            <Jumbotron></Jumbotron>
            <div className="container">
                <div className="row mt-5 justify-content-center">

                    <Card>

                    </Card>
                </div>
            </div>
        </div>
    );

}


export default Characterlist;
