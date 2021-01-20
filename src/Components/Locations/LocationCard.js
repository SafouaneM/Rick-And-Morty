import React from 'react';
import '../CharacterInfo/Card.css'


export default function LocationCard(props) {



    return (

        <div className="card card-width">
            <div className="card-body">
                <h5 className="card-title" >Name: {props.name}</h5>
                <p className="card-text" >Type: {props.type}</p>
                <p className="card-text" >Dimension: {props.dimension}</p>
                <a href={props.residents} className="btn btn-primary">Residents of this dimension </a>
            </div>
        </div>
    );


}