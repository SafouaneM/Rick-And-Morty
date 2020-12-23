import React from 'react';
import './Card.css'
import { Link } from "react-router-dom";


export default function Card(props) {



    return (

        <div className="card card-width">
            <div className="card-body">
                <img className="card-img-top" src={props.image} alt=""/>
                <h5 className="card-title" >Name: {props.name}</h5>
                <p className="card-text" >Species: {props.species}</p>
                <p className="card-text" >Status: {props.status}</p>
                <p className="card-text" >Location: {props.location}</p>
                <Link to={`/characters/${props.id} `} key={props.id}>
                    <button className="btn btn-primary">Click here for more information about this character</button>
                </Link>
            </div>
        </div>
    );


}