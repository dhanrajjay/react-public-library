import React, { useState } from "react";
import TextInput from './TextInput';
import Select from './Select';
import RadioGroup from './RadioGroup';
import Button from './Button';
import DateSelection from './DateSelection';
import ButtonGroupList from './ButtonGroupList';
import { useFocus } from './utils';

import {Validator} from './Utils/Validator';

const TestComponent = () => {
    
  const [firstName, setFirstName] = useState("");
  const [firstNameFocus, setFirstNameFocus] = useFocus()

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useFocus();    

  const [dropDown, setDropDown] = useState("1");
  const [dropDownFocus, setDropDownFocus] = useFocus();
  const dropDownList =  [{value: 1, name: '1'}, {value: 2, name: '2'}, {value: 3, name: '3'}];

  const dropDownFailureCB = (error) => {
    console.log(error);
  }

  return (
    <>
    <TextInput label="Firstname" name="firstName"
        placeholder="Enter FirstName" value={firstName} externalRef={firstNameFocus}
        validators={[{check: Validator.required, message: 'This field is required'},
        {check: Validator.isMinimum, message: 'This field must be longer than two characters'}]}
        onChange={(e)=>{
            const val = e.target.value 
            setFirstName(val)            
          }}/>

    <TextInput label="Password" name="password" type="password"
        placeholder="Enter Password" value={password} externalRef={passwordFocus}
        onChange={(e)=>{
            const val = e.target.value 
            setPassword(val)            
          }}/>

    <Select label="Select Dropdown" name="dropDown" value={dropDown} errorCB={dropDownFailureCB} externalRef={dropDownFocus}
                    onChange={() => {}} url="https://www.google.com" list={dropDownList}/>      

    <button
        onClick={ ()=> {
                    
          setDropDownFocus() 
        }}
      >
        start again
      </button>    
      </>
  )
};

export default TestComponent;
