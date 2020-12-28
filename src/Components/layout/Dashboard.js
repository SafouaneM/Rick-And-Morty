import React, {Component} from 'react';

import Characterlist from "../CharacterInfo/Characterlist";

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Characterlist></Characterlist>
                </div>
            </div>
        );
    }
}

export default Dashboard;