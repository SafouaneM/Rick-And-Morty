import React from 'react';
import '../CharacterInfo/Card.css'
import {Link} from "react-router-dom";
import SingleLocation from "./SingleLocation";



export default function LocationCard(props) {

    return (


        <div className="card card-width">
            <div className="card-body">
                <h5 className="card-title" >Name: {props.name}</h5>
                <p className="card-text" >Type: {props.type}</p>
                <p className="card-text" >Dimension: {props.dimension}</p>
                <Link to={`/location/${props.id}`} className={"btn btn-primary"}>More information/residents</Link>
            </div>
        </div>
    );


}