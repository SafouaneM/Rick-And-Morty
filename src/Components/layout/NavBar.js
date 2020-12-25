import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
                 style={{
                     backgroundColor: '#28a523'
                 }}>
                <a className="navbar-brand col-sm-1 col-md-2 mr-0 allign-items-center" href="#">PickleRick</a>
                <ul className="navbar-nav">

                    <li className="nav-item active">
                        <Link to={'/'} className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/locations'} className="nav-link">Locations</Link>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default NavBar;