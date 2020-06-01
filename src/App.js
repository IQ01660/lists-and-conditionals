import React, { Component } from 'react';
import './App.css';

import Validator from './Validation/Validation.js';
import Char from './Char/Char.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputString: '',
		};
	}

	inputChangeHandler(event) {
		this.setState({
			inputString: event.target.value,
        });
    }
    
    deleteChar(idx) {
        this.setState((state, props) => {
            const prevInputString = state.inputString;
            let updatedInputString = "";

            for(let i = 0; i < prevInputString.length; i++)
            {
                if (i !== idx)
                {
                    updatedInputString += prevInputString[i];
                }
            }

            return {
                inputString: updatedInputString
            };
        });
    }

    getCharList(textMsg) {
        const charList = [];
        
        for(let i = 0; i < textMsg.length; i++)
        {
            charList.push(
                <Char click={() => this.deleteChar(i)} key={i} charElement={textMsg[i]} />
            );
        }
        
        return charList;
    }

	render() {
		return (
			<div className="App">
				<input
					type="text"
					onChange={(event) => this.inputChangeHandler(event)}
					value={this.state.inputString}
				/>
                <p>{this.state.inputString.length}</p>
                <Validator msgLength={this.state.inputString.length}/>
                <br/>
                {this.getCharList(this.state.inputString)}
			</div>
		);
	}
}

export default App;
