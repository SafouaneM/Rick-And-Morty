import React, {Component} from 'react';
import '../../App.css';
import Card from "../Episodes/Card";
import {Jumbotron} from "../Jumbotron";
import axios from 'axios';
import {render} from "@testing-library/react";


export default class Episodelist extends Component{

state={
    // id: 1,
    // url: ('https://rickandmortyapi.com/api/episode/'+ id),
    //  id: this.props.match.params,
    // url: `https://rickandmortyapi.com/api/episode/`,
    episode: null
}

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        var episode;
        const {id} = this.props.match.params
        const url = `https://rickandmortyapi.com/api/episode/0,${id}`;
        const res = await axios.get(url) //request gives me response. await wait till its loaded then show pokemon
        this.setState({episode: res.data}) //will re run render function
    }

    render() {
        return (
//sort of like a div but gets removed when it gets rendered so we dont have to make unnessecary divs
            <React.Fragment>
                <Jumbotron></Jumbotron>
                {this.state.episode ? (
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                        {this.state.episode.slice(0,6).map(episode =>( //this.state.pokemon ? () : () == if state is existing pass left and if it doesnt right
                            <Card
                                name={episode.name}
                                id={episode.id}
                                key={episode.id}
                                image={episode.image}
                                air_date={episode.air_date}
                                episodee={episode.episode}
                            
                            />
                        ))}
                        </div>
                    </div>) : (<h1 style={{color: `#fafafa`}}>Loading Episodes</h1>) }
                            {/*if null return this ^*/}
            </React.Fragment>
        );
    }
}



