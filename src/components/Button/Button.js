import React from "react";
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  name,
  onChange,
  className,
  value,
  ...props
}) => {

    const handleChange = (event) => {
        onChange(event);
    }

  return (
    <button className={className} onClick={handleChange}>{value}</button>
  )
};

Button.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

Button.defaultProps = {
        className: 'app-button'
}

export default Button;