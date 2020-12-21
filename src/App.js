import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Card from "./Components/Card";
import {Jumbotron} from "./Components/Jumbotron";
import {Navbar} from "./Components/Navbar";
import {Row} from "./Components/Row";
import axios from 'axios';

function App() {
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
                <Navbar></Navbar>
                <Jumbotron></Jumbotron>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        {character.map(char => {
                            return <Card
                                image={char.image}
                                species={char.species}
                                status={char.status}
                                location={char.location.name}
                                name={char.name}  />;
                        })}
                    </div>



                </div>
            </div>
        );
    }
    return (
        <div className="main">
            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <div className="container">
                <div className="row mt-5 justify-content-center">

                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </div>
            </div>
        </div>
    );

}


export default App;
