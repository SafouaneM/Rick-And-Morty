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
    url: '',
    episode: '',
    air_date: '',
    id: ''

}

    componentDidMount() {
        const {name,episode,air_date,image,id} = this.props; //const == keyword to declare variables

            this.setState({
                name: name,
                episode: episode,
                air_date: air_date,
                image: image,
                id: id

            });
    }

 render() {



    return (
        <div className="col-md-4 col-sm-6 mb-5">
            <StyledLink to={`episode/${this.state.id}`}>
            <Cards className="card">
            <div className="card-body">
                <img className="card-img-top" src={this.state.image} alt=""/>
                <h5 className="card-text" >{this.state.episode}</h5>
                <h5 className="card-title" >Name: {this.state.name}</h5>
                <p className="card-text" >Air date: {this.state.air_date}</p>
                



        </div>
        </Cards>
            </StyledLink>
        </div>
    );
 }


}

export default Card;