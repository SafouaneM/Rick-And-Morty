import React from 'react';
import './Jumbotron.css'


export class Jumbotron extends React.Component {

    render() {

        return (
            <section className="jumbotron text-center">
                    <h1 className="jumbotron-heading">Our Rick and Morty App</h1>
                    <p className="lead text-muted">Our app is about telling you some information, about the popular series rick and morty
                        we retrieve this information by using the public Rick and Morty API.</p>

                            </section>

        );
    }

}