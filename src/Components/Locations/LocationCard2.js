import React, {Component} from 'react';
import '../CharacterInfo/Card.css'
import {Link} from "react-router-dom";
import axios from "axios";


class LocationCard2 extends Component {

    state = {
        name: '',
        type: '',
        dimension: '',
        residents: '',
        id: ''
    }

    async componentDidMount() {

        const {id} = this.props.match.params
        const Url = `https://rickandmortyapi.com/api/location/${id}/`
        const charResult = await axios.get(Url);
        const name = charResult.data.name
        const type = charResult.data.type
        const dimension = charResult.data.name
        const residents = charResult.data.residents

        this.setState({
            name: name,
            type: type,
            dimension: dimension,
            residents: residents,
            id: id
        });
    }

    render() {
        return (
            <div className="card card-width">
                <div className="card-body">
                    <h5 className="card-title">Name: {this.state.name}</h5>
                    <p className="card-text">Type: {this.state.type}</p>
                    <p className="card-text">Dimension: {this.state.dimension}</p>
                    <p className="card-text">Residents: {this.state.residents}</p>
                </div>
            </div>
        );
    }
}

export default LocationCard2