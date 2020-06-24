import React, { Component } from 'react';
import '../styles/app.css';
import TextInput from './TextInput';

class App extends Component {
	render() {
		return(
		    <>
                <div className="app">Test</div>
                <TextInput label="test" />
            </>
		)
	}
}

export default App;