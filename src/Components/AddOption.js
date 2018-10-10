import React, { Component } from 'react';
class AddOption extends Component {

    handledAddOption(e) {
        e.preventDefault();
        const options = e.target.elements.option.value.trim();

        if (options) {
            console.log(options);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handledAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;