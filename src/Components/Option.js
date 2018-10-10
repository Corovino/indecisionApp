import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <div>
                <p>{this.props.optionsText}</p>
            </div>
        )
    }
}

export default Option;