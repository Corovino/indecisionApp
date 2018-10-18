import React, { Component } from 'react';
import Option from './Option';


const Options = (props) => {
    
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please enter an options to get started </p> }
                {
                    props.options.map((opt) => {
                        return <Option key={opt} optionsText={opt} handleDeleteOption={props.handleDeleteOption} />
                    })
                }
            </div>
        );
    
}


export default Options;