import React, { Component } from 'react';
import Option from './Option';


const Options = (props) =>  (
            <div>
                <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                    <button 
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>
                      Remove All
                    </button>
                </div>
                {props.options.length === 0 && <p className="widget__message">Please enter an options to get started </p> }
                {
                    props.options.map((opt) => {
                        return <Option key={opt} optionsText={opt} handleDeleteOption={props.handleDeleteOption} />
                    })
                }
            </div>
        );

export default Options;