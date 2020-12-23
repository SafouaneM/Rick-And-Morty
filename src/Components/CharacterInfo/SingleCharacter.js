import React from 'react';
import axios from 'axios';
import Card from "./Card";

class SingleCharacter extends React.Component {


    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://rickandmortyapi.com/api/character/characters/${this.props.params.characterId}`)
            .then(({ data: character }) => {
                this.setState({ character });
            });
    }


    render() {
        const { char } = this.state;

        return (


    <Card
        image={char.image}
        species={char.species}
        status={char.status}
        location={char.location.name}
        name={char.name}
        id={char.id}/>


        );
    }
}

export default SingleCharacter;