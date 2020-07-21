import React from "react";
import { Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./Select.css";

const Select = ({
  name,
  label,
  list,
  onChange,
  className,
  value,
  ...props
}) => {

    const handleChange = (event) => {
        onChange(event);
    }

    const optionItems = list.map(item=>
        <option key={item} value={item}> {item} </option>
    );

  return (
    <Form.Group>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Control value={value} className={className}
                      name={name} as="select"
                      onChange={handleChange}>
            {optionItems}
        </Form.Control>
    </Form.Group>
  )
};

Select.defaultProps = {
    className: "simple-select-button",
    value: "Select",
    label: "Drop Down"
}

Select.propTypes = {
    list: PropTypes.any.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Select;