import React from 'react';

function ValidationComponent(props) {
    let outputMsg = "Text too short";
    if(props.msgLength > 5)
    {
        outputMsg = "Text long enough";
    }

    return (
        <div>
            <h3>{outputMsg}</h3>
        </div>
    );
}

export default ValidationComponent;