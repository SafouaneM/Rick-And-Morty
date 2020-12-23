import React, {useState, useEffect} from 'react';
import './App.css';
import {Jumbotron} from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";


function App() {


        return (

            <div className="main">
                <Navbar></Navbar>
        <Jumbotron></Jumbotron>
            </div>

    );

}


export default App;
