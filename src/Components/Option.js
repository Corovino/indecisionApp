import React, { Component } from 'react';


const Option = (props) =>  (
            <div className="option">
                <p className="option__text">{props.count}.{props.optionsText}</p>
                <button
                   className="button button--link"
                   onClick={(e) => { props.handleDeleteOption(props.optionsText) } }
                >
                    remove
                </button>
            </div>
        )

export default Option;
