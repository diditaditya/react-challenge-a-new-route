import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            float: 'right',
            'margin-top': '25px'
        }
    }

    handleClick() {
        // this.props.history.push('/daily');
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-default navbar-toggleable-md">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img src={logo} className="App-logo navbar-brand" alt="logo"/>
                            <h1 className="navbar-brand text-right">React Weather</h1>
                        </div>

                        <div style={this.style} >
                            <button className="btn btn-default"><Link to="/">3-Hourly</Link></button>
                            <button className="btn btn-default"><Link to="/daily">Daily</Link></button>
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

