import React, { useState, useEffect } from "react";
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
  url,
  errorCB,
  ...props
}) => {
    const listOption = list && list.map(item=>
       <option key={item} value={item.value}> {item.label} </option>
    );
    const [loading, setLoading] = useState(true);
    const [optionItems, setOptionItems] = useState(listOption);

    const handleChange = (event) => {
        onChange(event);
    }

    useEffect(() => {
        if (list && list.length) {
            setLoading(false);
            return;
        }
        const apiUrl = url;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((list) => {
            setOptionItems(list.results.map(item=>
               <option key={item.name} value={item.name}> {item.name} </option>
            ));
            setLoading(false);
          }, (error) => {
            setLoading(false);
            errorCB('Failed to load the list');
          });
     }, [setLoading]);

  return (
    <div>
    { loading ? <div className="loader"></div> :
        (<Form.Group>
                <Form.Label htmlFor={name}>{label}</Form.Label>
                <Form.Control value={value} className={className}
                              name={name} as="select"
                              onChange={handleChange}>
                    {optionItems}
                </Form.Control>
        </Form.Group>)
    }
    </div>
  )
};

Select.defaultProps = {
    className: "simple-select-button",
    value: "Select",
    label: "Drop Down"
}

Select.propTypes = {
    list: PropTypes.any,
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    url: PropTypes.string,
    errorCB: PropTypes.func
}

export default Select;