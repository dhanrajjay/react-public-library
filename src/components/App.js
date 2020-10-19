import React, { Component } from 'react';
import '../styles/app.css';
import TextInput from './TextInput';
import Select from './Select';
import RadioGroup from './RadioGroup';
import Button from './Button';
import DateSelection from './DateSelection';
import ButtonGroupList from './ButtonGroupList';
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
            day: '27',
            btnGroup: '1'
        }
        this.validators = {
            firstName: {
                valid: false
            }
        };
        this.updateValidator = this.updateValidator.bind(this);
    }

    handleChange(event, isInnerValue, isError) {
        let val = isInnerValue ? event.target.innerHTML : event.target.value;
        this.updateValidator(event.target.name, isError);
        this.setState({
            [event.target.name]: val
        });
    }

    buttonChange(event) {
        console.log(this.state);
    }

    updateValidator(field, value) {
        if (!field) {
            return;
        }
        if (this.validators[field]) {
            this.validators[field].valid = value;
        }
        console.log(this.validators[field]);
    }

    isFormValid() {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
          if (!this.validators[field].valid) {
            status = false;
          }
        });
        return status;
    }

    dropDownFailureCB(error) {
        console.log(error);
    }

	render() {
	    const {
	        firstName, dropDown, radio, password, day, month, year, btnGroup
	    } = this.state;
	    const dropDownList =  [1,2,3];
	    const radioList = [{name: 'test', label: 'test 1', defaultValue: 'test', value: 'test'}];
		return(
		    <>
                <div className="app">Test</div>
                <TextInput label="Firstname" name="firstName"
                    placeholder="Enter FirstName" value={firstName}
                    validators={[{check: Validator.required, message: 'This field is required'},
                    {check: Validator.isMinimum, message: 'This field must be longer than two characters'}]}
                    onChange={this.handleChange.bind(this)}/>

                <TextInput label="Password" name="password" type="password"
                    placeholder="Enter Password" value={password}
                    onChange={this.handleChange.bind(this)}/>

                <Select label="Select Dropdown" name="dropDown" value={dropDown} errorCB={this.dropDownFailureCB}
                    onChange={this.handleChange.bind(this)} url="https://www.google.com"/>

                <Select label="Select Dropdown" name="dropDown" value={dropDown}
                    onChange={this.handleChange.bind(this)} list={dropDownList}/>

                <RadioGroup onChange={this.handleChange.bind(this)} value={radio} />

                <RadioGroup onChange={this.handleChange.bind(this)} value={radio} list={radioList} />

                <Button value="Submit" onChange={this.buttonChange.bind(this)} className={`${this.isFormValid() ? 'app-button' : 'disabled'}`} />

                <ButtonGroupList onChange={this.handleChange.bind(this)} value={btnGroup} name="btnGroup" list={[{label: "1", value: "1"},{label: "2", value: "2"}]} />

                <DateSelection label="Date" year={year} month={month} day={day} onChange={this.handleChange.bind(this)} />
            </>
		)
	}
}

export default App;