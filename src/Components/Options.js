import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((opt) => <Option key={opt} optionsText={opt} />)
                }
            </div>
        )
    }
}

export default Options;