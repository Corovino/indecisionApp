import React, { Component } from 'react';

class AddOption extends Component {

    state = {
        error: undefined
    };


    handledAddOption = (e) =>  {
        e.preventDefault();
        const options = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(options);

        console.log(error);
        this.setState(() => ({ error}));

        if(!error){
            e.target.elements.option.value = '';
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p> }
                <form className="add-option" onSubmit={this.handledAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;
