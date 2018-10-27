import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (  
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <div> somre text </div>  
        {props.selectedOption && <p>{props.selectedOption}</p>  } 
        <button onClick={props.handleClearSelectedOption} >OK</button>
    </Modal>    
);


export default OptionModal;