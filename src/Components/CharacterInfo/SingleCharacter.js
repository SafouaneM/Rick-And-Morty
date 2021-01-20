import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
class SingleCharacter extends Component {

    state = {
        name: '',
        status: '',
        species: '',
        gender: '',
        image: '',
        location: '',
        origin: '',
        id: ''

    }

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        const {id} = this.props.match.params

        const characterUrl = `https://rickandmortyapi.com/api/character/${id}/`

        const charResult = await axios.get(characterUrl);
        const name = charResult.data.name
        const status = charResult.data.status
        const species = charResult.data.species
        const gender = charResult.data.gender
        const image = charResult.data.image
        const location = charResult.data.location.name
        const origin = charResult.data.origin.name
        const episodes = charResult.data.episode
        const episodeids = []
        
        episodes.forEach(element => {
             console.log(element + " elementbeforeslice");
             var result = element.slice(-1);
             console.log(result + " elementafterslice");
            
             episodeids.push(result)
            
         });
         console.log(episodeids[3] + " aaa");
        this.setState({
            name: name,
            status: status,
            species: species,
            gender: gender,
            image: image,
            location: location,
            origin: origin,
            id: id,
            episode: episodes
        });
    }

    render() {
        return (
            <div>
                <div className="col">
                        <div className="card">
                        <p className="nav-item active">
                        <Link to={'/'} className="nav-link">Back</Link>
                        </p>
                            <div className="card-body">
                                <div className="col-md-3 mx-auto">
                                <img className="card-img-top mx-auto" src={this.state.image} alt=""/>
                                </div>
                                <h5 className="card-title" >Name: {this.state.name}</h5>
                                <p className="card-text" >Species: {this.state.species}</p>
                                <p className="card-text" >Status: {this.state.status}</p>
                                <p className="card-text" >Location: {this.state.location}</p>
                                <p className="card-text" >Origin: {this.state.origin}</p>
                                <p className="card-text" >Gender: {this.state.gender}</p>

                            </div>
                        <p className="nav-item active">
                        <Link to={`/characterepisodes/${this.state.episodes}`} className="nav-link">Episodes this character is in</Link>
                        </p>
                        </div>
                </div>
            </div>
        );
    }
}

export default SingleCharacter;




