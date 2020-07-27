import React from "react";
import { Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./RadioInput.css";

const RadioInput = ({
  name,
  label,
  onChange,
  className,
  value,
  defaultValue,
  ...props
}) => {

    const handleChange = (event) => {
        onChange(event);
    }

  return (
    <Form.Check
          type="radio"
          value={value} inline id={label}
          name={name}
          label={label}
          className={className}
          checked={defaultValue === value}
          onChange={handleChange} />
  )
};

RadioInput.defaultProps = {
    value: "",
    label: "Radio Select"
}

RadioInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string
}

export default RadioInput;