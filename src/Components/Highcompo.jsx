import React, { Component } from 'react';
import HocTitle from './Hoc';

class Highcompo extends Component {
    render() {
        return (
            <>
            <h2 >Example of Higher Order Component:</h2>
            <h3>javaScript is the : {this.props.name}</h3>
            <p>Here the interpreted language is given as a prop and is being called out from different component.</p>
            </>
        );
    }
}

export default HocTitle(Highcompo);