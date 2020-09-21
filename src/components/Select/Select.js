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
  ...props
}) => {
    const listOption = list.map(item=>
       <option key={item} value={item}> {item} </option>
    );
    const [loading, setLoading] = useState(true);
    const [optionItems, setOptionItems] = useState(listOption);

    const handleChange = (event) => {
        onChange(event);
    }
    url = url || `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people`;
    useEffect(() => {
        if (list.length) {
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
    list: PropTypes.any.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    url: PropTypes.string
}

export default Select;