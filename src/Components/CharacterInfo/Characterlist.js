import React, {Component} from 'react';
import '../../App.css';
import Card from "./Card";
import {Jumbotron} from "../Jumbotron";
import axios from 'axios';
import {render} from "@testing-library/react";


export default class Characterlist extends Component{

state={
    url: 'https://rickandmortyapi.com/api/character/',
    character: null
}

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        const res = await axios.get(this.state.url) //request gives me response. await wait till its loaded then show characters
        this.setState({character: res.data['results']}) //will re run render function
    }

    render() {
        return (
//sort of like a div but gets removed when it gets rendered so we dont have to make unecasrry divs
            <React.Fragment>
                <Jumbotron></Jumbotron>
                {this.state.character ? (
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                        {this.state.character.slice(0,6).map(character =>( //this.state.character ? () : () == if state is existing pass left and if it doesnt right
                            <Card
                                name={character.name}
                                id={character.id}
                                key={character.id}
                                image={character.image}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}

                            />
                        ))}
                        </div>
                    </div>) : (<h1 style={{color: `#fafafa`}}>Loading Characters</h1>) }
                            {/*if null return this ^*/}
            </React.Fragment>
        );
    }
}



