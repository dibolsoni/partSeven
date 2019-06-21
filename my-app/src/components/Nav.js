import React, {Component} from 'react';

export default class Nav extends Component {
    
    handleClick = e => {
        e.preventDefault();
        this.props.onMenuClick(e.target.textContent)
    } 

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <button type="button" id="cats-btn" className="nav-button" onClick={this.handleClick}>cats</button>
                    <button type="button" id="dogs-btn" className="nav-button" onClick={this.handleClick}>dogs</button>
                    <button type="button" id="computer-btn" className="nav-button" onClick={this.handleClick}>computer</button>
                </ul>
            </nav>
        );
    }

};


