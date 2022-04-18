import React, { useState } from "react";
import { Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./TextInput.css";

import {validateInput} from '../Utils/Validator';

const TextInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  validators,
  children,
  label,
  isRequired,
  externalRef,
  ...props
}) => {
    const [error, setError] = useState(false);
    const handleChange = (event) => {
        if (validators.length)
            setError(validateInput(validators, event.target.value));
        onChange(event, null, error);
    }

  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className={className}
        isInvalid={error.message}
        ref={externalRef}
      />
      <Form.Control.Feedback type="invalid">
        {error && error.message}
      </Form.Control.Feedback>
    </Form.Group>
  )
};

TextInput.defaultProps = {
    type: "text",
    className: "simple-text-input",
    value: "",
    placeholder: "",
    validators: []
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    validators: PropTypes.array
}

export default TextInput;
