import React from 'react';
import './Char.css';

function CharComponent(props) {
    return (
        <div onClick={props.click} className="CharComponent">
            <span>{props.charElement}</span>
        </div>
    );
}

export default CharComponent;