import logo from '../../logo.svg';
import React, {useState, useEffect} from 'react';
import '../../App.css';
import Card from "./LocationCard";
import {Jumbotron} from "../Jumbotron";


import axios from 'axios';


function Locations() {
    const url = 'https://rickandmortyapi.com/api/location';
    const [location, setLocation] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setLocation(response.data.results)
        })
    },[url])

    if(location) {
        return (

            <div className="main">
                <Jumbotron></Jumbotron>

                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        {location.map(loc => {
                            return <Card
                                id={loc.id}
                                name={loc.name}
                                type={loc.type}
                                dimension={loc.dimension}
                                residents={loc.residents}/>;
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


export default Locations;
