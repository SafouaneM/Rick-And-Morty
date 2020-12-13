import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Card} from "./Components/Card";
import {Jumbotron} from "./Components/Jumbotron";
import {Navbar} from "./Components/Navbar";

function App() {
  return (

      <div className="main">
          <Navbar></Navbar>
          <Jumbotron></Jumbotron>
<div className="container">


      <Card></Card>


</div>
      </div>
  );
}

export default App;
