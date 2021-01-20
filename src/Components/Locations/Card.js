import React, {Component} from 'react';
import './Card.css'
import {Link} from "react-router-dom";
import styled from 'styled-components'

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:focus,
&:hover,
&:visited,
&:link,
&:active {
 text-decoration: none;
}

`;

const Cards = styled.div`
box-shadow: 0 1px 2px rgba(0,0,0,0,12), 0 1px 2px rgba(0,0,0,0,24);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover {
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
-moz-user-select: none;
-website-user-select: none;
user-select: none;
-o-user-select: none;
-webkit-user-select: none;

`;

class Card extends Component{

state = {
    name: '',
    type: '',
    dimension: '',
    residents: '',
    id: ''

}

    componentDidMount() {
        const {name,type,dimension,residents,id} = this.props; //const == keyword to declare variables

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
        <div className="col-md-4 col-sm-6 mb-5">
            <Cards className="card">
            <div className="card-body">
                <h5 className="card-title" >Name: {this.state.name}</h5>
                <p className="card-text" >Type: {this.state.type}</p>
                <p className="card-text" >Dimension: {this.state.dimension}</p>
                <p className="card-text" >Residents: {this.state.residents}</p>

        </div>
        </Cards>
        </div>
    );
 }


}

export default Card;