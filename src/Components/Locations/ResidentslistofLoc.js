import React, {Component} from 'react';
import '../../App.css';
import Card from "../CharacterInfo/Card";
import {Jumbotron} from "../Jumbotron";
import axios from 'axios';
import {render} from "@testing-library/react";


export default class Residentlist extends Component{

state={
    resident: null
}

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        var resident;
        const {id} = this.props.match.params
        const url = `https://rickandmortyapi.com/api/resident/${id}`;
        const res = await axios.get(url) //request gives me response. await wait till its loaded then show pokemon
        this.setState({resident: res.data}) //will re run render function
    }

    render() {
        return (
//sort of like a div but gets removed when it gets rendered so we dont have to make unnessecary divs
            <React.Fragment>
                {this.state.resident ? (
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                        {this.state.resident.slice(0,6).map(resident =>(
                            <Card
                                name={resident.name}
                                id={resident.id}
                                key={resident.id}
                                image={resident.image}
                                status={resident.status}
                                species={resident.species}
                                gender={resident.gender}
                            
                            />
                        ))}
                        </div>
                    </div>) : (<h1 style={{color: `#fafafa`}}>Geen Residents</h1>) }
                            {/*if null return this ^*/}
            </React.Fragment>
        );
    }
}



