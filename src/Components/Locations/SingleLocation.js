import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
class SingleLocation extends Component {

    state = {
        name: '',
        type: '',
        dimension: '',
        residents: '',
        id: ''
    }

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        const {id} = this.props.match.params

        const locationUrl = `https://rickandmortyapi.com/api/location/${id}/`

        const charResult = await axios.get(locationUrl);
        const name = charResult.data.name
        const type = charResult.data.type
        const dimension = charResult.data.dimension
        const residents = charResult.data.residents

        const residentidsarr = []

        residents.forEach(element => {
            var result = (element.substring(element.lastIndexOf('/') + 1));
            residentidsarr.push(result)
        });

        const residentids = residentidsarr.join();
        const queryurl = ("/resident/"+ residentids)


        this.setState({
            name: name,
            type: type,
            dimension: dimension,
            id: id,
            residents: queryurl
        });
    }


    render() {
        return (
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title" >Name: {this.state.name}</h5>
                            <p className="card-text" >Type: {this.state.type}</p>
                            <p className="card-text" >Dimension: {this.state.dimension}</p>
                        </div>
                        <p className="nav-item active">
                            <Link to={`${this.state.residents}`} className="nav-link">every resident that lives on {this.state.name}</Link>
                        </p>
                    </div>
                </div>

        );
    }
}

export default SingleLocation;