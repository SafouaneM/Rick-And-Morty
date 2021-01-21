import React, {Component} from 'react';
import '../../App.css';
import Card from "../CharacterInfo/Card";
import axios from 'axios';


export default class Residentlist extends Component{

state={
    character: null
}

    async componentDidMount() { //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        var resident;
        const {id} = this.props.match.params
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const res = await axios.get(url) //request gives me response. await wait till its loaded then show pokemon
        this.setState({character: res.data}) //will re run render function
    }

    render() {
        return (
//sort of like a div but gets removed when it gets rendered so we dont have to make unnessecary divs
            <React.Fragment>
                {this.state.character ? (
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                        {this.state.character.map(character =>(
                            <Card
                                name={character.name}
                                id={character.id}
                                key={character.id}
                                image={character.image}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}

                            />
                        ))}
                        </div>
                    </div>) : (<h1 style={{color: `#FF0000`}}>Loading residents (if you see this message more then 30 seconds there are no residents in this planet)</h1>) }
                            {/*if null return this ^*/}
            </React.Fragment>
        );
    }
}



