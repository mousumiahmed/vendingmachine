import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Create from './components/Create.js';
import Delete from './components/Delete.js';
import Display from './components/Display.js';
import axios from "axios";



export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
  
    }
    
    

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h2 className="text-center">Vending Machine</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr- auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/display'} className="nav-link">History</Link>
                </li>
              </ul>
            </div>
          </nav> 
          
          
              <Route path = "/" exact component = {Home} />
              <Route path = "/create"  component = {Create} />
              <Route path = "/display"  component = {Display} />
             
          
        </div>
      </React.Fragment>
    );
  }
}


