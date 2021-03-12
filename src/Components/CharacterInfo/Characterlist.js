import React, { Component } from 'react';
import '../../App.css';
import Card from './Card';
import { Jumbotron } from '../Jumbotron';
import axios from 'axios';
import { render } from '@testing-library/react';

// import components
import Pagination from '../Pagination';

export default class Characterlist extends Component {
    state = {
        url: '',
        character: null,
        // added search in the state and set it by default as a empty string.
        // so that when you load the page you get all the card without needing to search first
        search: '',
        currentPage: 1,
        postsPerPage: 20,
    };

    async componentDidMount() {
        //make async function, what does it do? : this will run in the background,
        // whilst other things are working.
        // const res = await axios.get(this.state.url); //request gives me response. await wait till its loaded then show characters
        // this.setState({ character: res.data['results'] }); //will re run render function
        const allCharacter = [];
        for (let i = 1; i <= 33; i++) {
            this.state.url = `https://rickandmortyapi.com/api/character/?page=${i}`;
            const res = await axios.get(this.state.url);
            allCharacter.push(...res.data['results']);
        }
        this.setState({ character: allCharacter });
    }

    search = (event) => {
        this.setState({ search: event.target.value });
    };

    // change page
    paginate = (pageNumbers) => {
        this.setState({ currentPage: pageNumbers });
    };

    render() {
        // Get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        return (
            //sort of like a div but gets removed when it gets rendered so we dont have to make unecasrry divs
            <React.Fragment>
                <Jumbotron></Jumbotron>
                {this.state.character ? (
                    <div className='container'>
                        <h1><p className='justify-content-center'> <span className='badge badge-primary'>Search for characters here</span></p></h1>
                        <input
                            className='form-control'
                            type='text'
                            onChange={this.search}
                            value={this.state.search}
                        />
                        <div className='row mt-5 justify-content-center'>
                            {this.state.character
                                .slice(indexOfFirstPost, indexOfLastPost)
                                .filter((character) =>
                                    character.name.includes(this.state.search)
                                )
                                .map((
                                    character //this.state.character ? () : () == if state is existing pass left and if it doesnt right
                                ) => (
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
                        <Pagination
                            characterPerPage={this.state.postsPerPage}
                            totalPosts={this.state.character.length}
                            paginate={this.paginate}
                        />
                    </div>
                ) : (
                    <h1 style={{ color: `#fafafa` }}>Loading Characters</h1>
                )}
                {/*if null return this ^*/}
            </React.Fragment>
        );
    }
}