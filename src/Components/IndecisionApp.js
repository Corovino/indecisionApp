import  React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';



class IndecisionApp extends Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount = (prevProps, prevState) => {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({ options }));
            }
            
        } catch (error) {
            
        }

    }

    componentDidUpdate( prevProps, prevState) {
        
        if( prevState.options.length !== this.state.options.length){

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
      
    }
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove){
        console.log(optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option ) 
        }));
    }

    handlePick = () =>  {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        
        this.setState(() => ({ 
            selectedOption: option 
        }));
        
    }

    handleClearSelectedOption = () => {
        this.setState( () => ({ selectedOption : undefined }) );
        console.log(this.state);
    }
    
    handleAddOption = (option) => {

        if(!option){
            return 'Enter a valid value to add item';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'this option already exist';    
        }

        this.setState( ( prevState ) => ({ options: prevState.options.concat([option])}))

    }

    render() {
        
        const subtitle = 'Put your life n the hands of a computer';
        console.log(!!this.state.selectedOption);
        return (
            <div>
                <Header  subtitle={subtitle} />
                <Action  
                   hasOptions={this.state.options.length > 0}
                   handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions.bind(this)}
                    handleDeleteOption={this.handleDeleteOption.bind(this)} />
                <AddOption 
                    handleAddOption={this.handleAddOption}   
                />
                <OptionModal
                    handleClearSelectedOption={this.handleClearSelectedOption} 
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }



}

export default  IndecisionApp;