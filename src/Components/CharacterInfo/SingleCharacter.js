import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "./Card";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function SingleCharacter(props) {
    const url = `https://rickandmortyapi.com/api/character/${props.id}`;

    const [char, setCharacter] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setCharacter(response.data.results)
        })
    },[url])

    return (


        <Card
            image={char.id}
            species={char.species}
            status={char.status}
            location={char.location.name}
            name={char.name}
            />
    );
}




