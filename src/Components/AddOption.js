import React, { Component } from 'react';

class AddOption extends Component {

    constructor(props) {
        super(props);
        this.handledAddOption = this.handledAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handledAddOption(e) {
        e.preventDefault();
        const options = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(options);

        this.setSate(() => {
            return {
                error: error
            }
        });        
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handledAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;