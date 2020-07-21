import React from "react";
import PropTypes from 'prop-types';
import RadioInput from '../RadioInput';

const RadioGroup = ({
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

  return (
    <div>
        {
            list && list.length ?
            list.map((item, index)=>
               <RadioInput key={`${item}~${index}`} name={item.name} defaultValue={item.defaultValue}
                value={item.value} onChange={handleChange} label={item.label} />
            ):
            <>
            <RadioInput name="radio" value="Option 1" defaultValue={value} onChange={handleChange} label="Option 1" />
            <RadioInput name="radio" value="Option 2" defaultValue={value} onChange={handleChange} label="Option 2" />
            <RadioInput name="radio" value="Option 3" defaultValue={value} onChange={handleChange} label="Option 3" />
            </>
        }
    </div>
  )
};

RadioGroup.propTypes = {
    list: PropTypes.any,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default RadioGroup;