import logo from '../../logo.svg';
import React, {useState, useEffect, Component} from 'react';
import '../../App.css';
import Card from "./LocationCard";
import {Jumbotron} from "../Jumbotron";
import LocationCard from "./LocationCard";


import axios from 'axios';
import ReactPaginate from "react-paginate";

export default class Locations extends Component{


    state={
        url: `https://rickandmortyapi.com/api/location/`,
        location: [],
    }

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        const res = await axios.get(this.state.url) //request gives me response. await wait till its loaded then show locations
        this.setState({location: res.data['results']}) //will re run render function

    }

    render() {
        return (
//sort of like a div but gets removed when it gets rendered so we dont have to make unecasrry divs
            <React.Fragment>
                <Jumbotron></Jumbotron>
                {this.state.location ? (
                    <div className="container">

                        <div className="row mt-5 justify-content-center">
                            {this.state.location

                                //with this we can look up locations both with lower case and upper case
                                .map(location =>( //this.state.location ? () : () == if state is existing pass left and if it doesnt right
                                    <LocationCard
                                        name={location.name}
                                        id={location.id}
                                        key={location.id}
                                        type={location.type}
                                        dimension={location.dimension}
                                        residents={location.residents}

                                    />
                                ))}
                        </div>
                    </div> ) : (<h1 style={{color: `#fafafa`}}>Loading Locations</h1>) }
                {/*if null return this ^*/}
                
            </React.Fragment>
        );
    }
}
