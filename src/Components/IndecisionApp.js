import  React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: ['one', 'two', 'three', 'four']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handleDeleteOptions(){
        console.log('hola');
        
        this.setState({ options: []});
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life n the hands of a computer';
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action  
                   hasOptions={this.state.options.length > 0}
                   handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption />
            </div>
        );
    }



}

export default  IndecisionApp;