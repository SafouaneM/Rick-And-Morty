import React from 'react';
import './Card.css'


export class Card extends React.Component {

    render() {

        return (

            <div className="card card-width">
                <div className="card-body">
                    <img className="card-img-top" src={this.props.image} alt=""/>
                    <h5 className="card-title" >Name: {this.props.name}</h5>
                    <p className="card-text" >Species: {this.props.species}</p>
                    <p className="card-text" >Status: {this.props.status}</p>
                    <p className="card-text" >Location: {this.props.location}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        );
    }

}