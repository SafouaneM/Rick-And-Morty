import React from 'react';
import './Card.css'


export default function Card(props) {



    return (

        <div className="card card-width">
            <div className="card-body">
                <img className="card-img-top" src={props.image} alt=""/>
                <h5 className="card-title" >Name: {props.name}</h5>
                <p className="card-text" >Species: {props.species}</p>
                <p className="card-text" >Status: {props.status}</p>
                <p className="card-text" >Location: {props.location}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );


}