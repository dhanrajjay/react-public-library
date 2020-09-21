import React from "react";
import { Form, FormControl, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./DateSelection.css";

const DateSelection = ({
  label,
  onChange,
  className,
  year,
  day,
  month,
  ...props
}) => {

    const yearChange = (event) => {
        getDays();
        onChange(event);
    }

    const monthChange = (event) => {
        getDays();
        onChange(event);
    }

    const dayChange = (event) => {
        onChange(event);
    }

    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const numOfYears = 10;
    let dayList = [];

    const monthItems = monthList.map(item=>
        <option key={item} value={item}> {item} </option>
    );

    const generateYears = function() {
        const yearElem = [];
        let currentYear = new Date().getFullYear();
        let date = new Date(currentYear);
        for (let i = 0; i < numOfYears; i++) {
            yearElem.push(<option key={currentYear} value={currentYear}> {currentYear} </option>);
            currentYear--;
        }
        return yearElem;
    }

    const generateMonths = function() {
        const monthElem = [];
        for (let i = 0; i < 12; i++) {
            let monthNum = new Date(2018, i).getMonth();
            let month = monthList[monthNum];
            monthElem.push(<option key={monthNum} value={month}> {month} </option>);
        }
        return monthElem;
    }

    const getDays = function() {
        const monthNum = monthList.indexOf(month) + 1;
        let day = new Date(year, monthNum, 0).getDate();

        for (let i = 1; i <= day; i++) {
            dayList.push(<option key={i} value={i}> {i} </option>);
        }
    }

    getDays();

  return (
    <Form.Group>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Row className="no-margin">
            <Form.Control value={month} className="month-select"
                          name="month" as="select" data-testid="month"
                          onChange={monthChange}>
                {generateMonths()}
            </Form.Control>
            <Form.Control value={day} className="day-select"
                          name="day" as="select" data-testid="day"
                          onChange={dayChange}>
                {dayList}
            </Form.Control>
            <Form.Control value={year} className="year-select"
                          name="year" as="select" data-testid="year"
                          onChange={yearChange}>
                {generateYears()}
            </Form.Control>
         </Row>
    </Form.Group>
  )
};

DateSelection.defaultProps = {
    className: "",
}

DateSelection.propTypes = {
    className: PropTypes.string,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default DateSelection;