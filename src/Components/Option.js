import React, { Component } from 'react';


const Option = (props) => {
        return (
            <div>
                <p>{props.optionsText}</p>
                <button 
                   onClick={(e) => { props.handleDeleteOption(props.optionsText) } }
                >
                    remove
                </button>
            </div>
        )
}


export default Option;