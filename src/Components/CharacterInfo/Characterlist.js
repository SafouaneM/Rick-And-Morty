import React, {Component} from 'react';
import '../../App.css';
import Card from "./Card";
import {Jumbotron} from "../Jumbotron";
import axios from 'axios';
import ReactPaginate from 'react-paginate'

import {render} from "@testing-library/react";


export default class Characterlist extends Component{

state={
        url: 'https://rickandmortyapi.com/api/character/',
        character: null,
        startSplice: 0,
        endSplice: 6,
    // added search in the state and set it by default as a empty string.
    // so that when you load the page you get all the card without needing to search first
    searchCharacters: '',
}
    next = () => {
        this.setState({startSplice: this.state.startSplice + 6, endSplice: this.state.endSplice + 6})
    }
    back = () => {
        this.setState({startSplice: this.state.startSplice - 6, endSplice: this.state.endSplice - 6})
    }
    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        const res = await axios.get(this.state.url) //request gives me response. await wait till its loaded then show characters
        this.setState({character: res.data['results']}) //will re run render function

}



    searchCharacters = event => {
        this.setState({ searchCharacters: event.target.value })
    }





    render() {
        return (
//sort of like a div but gets removed when it gets rendered so we dont have to make unecasrry divs
            <React.Fragment>
                <Jumbotron></Jumbotron>
                {this.state.character ? (
                    <div className="container">
                        <h1 className="text-center" style={{color: '#221f1f'}}><span className="badge badge-primary ">Look up your favorite characters!</span></h1>
                        <div className="form-group">
                            <div className="form-outline">
                                <input className="form-control" placeholder="Example: Rick Sanchez" id="form1" type='search' onChange={this.searchCharacters} value={this.state.searchCharacters}/>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center">
                        {this.state.character
                            .slice(this.state.startSplice,this.state.endSplice)
                            .filter(character =>
                                character.name.toLowerCase().includes(this.state.searchCharacters.toLowerCase()))//with this we can look up characters both with lower case and upper case
                            .map(character =>( //this.state.character ? () : () == if state is existing pass left and if it doesnt right
                            <Card
                                name={character.name}
                                id={character.id}
                                key={character.id}
                                image={character.image}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                episodes={character.episodes}
                            />
                        ))}
                        </div>
                    </div> ) : (<h1 style={{color: `#fafafa`}}>Loading Characters</h1>) }
                            {/*if null return this ^*/}
                <a href="#" onClick={this.back} className="btn btn-dark btn-lg mx-4 my-4">Back</a>
                <a href="#" onClick={this.next} className="btn btn-success btn-lg">Next</a>

            </React.Fragment>
        );
    }
}



