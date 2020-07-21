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
          checked={defaultValue === value}
          onChange={handleChange} />
  )
};

RadioInput.defaultProps = {
    className: "simple-select-button",
    value: "",
    label: "Drop Down"
}

RadioInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default RadioInput;