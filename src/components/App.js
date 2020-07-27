import React, { Component } from 'react';
import '../styles/app.css';
import TextInput from './TextInput';
import Select from './Select';
import RadioGroup from './RadioGroup';
import Button from './Button';
import DateSelection from './DateSelection';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Validator} from './Utils/Validator';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            dropDown: '',
            radio: 'Option 2',
            password: '',
            year: '2020',
            month: 'July',
            day: '27'
         }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    buttonChange(event) {
        console.log(event);
    }

	render() {
	    const {
	        firstName, dropDown, radio, password, day, month, year
	    } = this.state;
	    const dropDownList =  [1,2,3];
	    const radioList = [{name: 'test', label: 'test 1', defaultValue: 'test', value: 'test'}];
		return(
		    <>
                <div className="app">Test</div>
                <TextInput label="Firstname" name="firstName"
                    placeholder="Enter FirstName" value={firstName}
                    validators={[{check: Validator.required, message: 'This field is required'}]}
                    onChange={this.handleChange.bind(this)}/>

                <TextInput label="Password" name="password" type="password"
                    placeholder="Enter Password" value={password}
                    onChange={this.handleChange.bind(this)}/>

                <Select label="Select Dropdown" name="dropDown" value={dropDown}
                    onChange={this.handleChange.bind(this)} list={dropDownList}/>

                <RadioGroup onChange={this.handleChange.bind(this)} value={radio} />

                <RadioGroup onChange={this.handleChange.bind(this)} value={radio} list={radioList} />

                <Button value="Submit" onChange={this.buttonChange.bind(this)} />

                <DateSelection label="Date" year={year} month={month} day={day} onChange={this.handleChange.bind(this)} />
            </>
		)
	}
}

export default App;