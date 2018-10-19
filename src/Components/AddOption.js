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