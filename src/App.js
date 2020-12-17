import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import {Card} from "./Components/Card";
import {Jumbotron} from "./Components/Jumbotron";
import {Navbar} from "./Components/Navbar";
import {Row} from "./Components/Row";
import axios from 'axios';

function App() {
    const url = 'https://rickandmortyapi.com/api/character/1';
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setCharacter(response.data)
        })
    },[url])


if (character){
    return (
      <div className="main">
          <Navbar></Navbar>
          <Jumbotron></Jumbotron>
<div className="container">
    <div className="row mt-5 justify-content-center">

    <Card
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
    location={character.location.name}>

    </Card>

    <Card>
    </Card>
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

                    <Card
                        name="Safouane"
                        text="Something here is some cool text">
                    </Card>
                </div>



            </div>
        </div>
    );

}




export default App;
