import React from "react";
import { Form, InputGroup, ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ButtonGroupList.css';

const ButtonGroupList = ({
  name,
  label,
  list,
  onChange,
  className,
  value,
  ...props
}) => {

    const handleChange = (event) => {
        onChange(event, true);
    }

  return (
    <Form.Group>
       <Form.Label htmlFor={name}>{label}</Form.Label>
       <InputGroup>
           <ButtonGroup aria-label="Basic example">
               {
                   list && list.length ?
                   list.map((item, index)=>
                      <Button key={`${item}~${index}`} name={name} style={{width: "120px"}}
                              onClick={handleChange}
                              active={value === item}>{item}</Button>
                   ):
                   <>
                   <div className="error-list-provider">Empty list (or) No List provided.</div>
                   </>
               }
           </ButtonGroup>
       </InputGroup>
    </Form.Group>
  )
};

ButtonGroupList.propTypes = {
   list: PropTypes.any.isRequired,
   className: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func.isRequired
}

ButtonGroupList.defaultProps = {
    className: 'app-button'
}

export default ButtonGroupList;