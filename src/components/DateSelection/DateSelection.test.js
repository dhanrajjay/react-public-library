import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DateSelection from './DateSelection';

describe('Examining the Select component of the library', () => {

  test("checks for the Date Selection control tag ", () => {
    const { container } = render(<DateSelection label='Date' year='2020' month='March' day='20' onChange={() => {}} />);
    expect(container).not.toBeNull();
    expect(container.firstChild.firstChild).toBeTruthy();
  });

  test("checks for the month select tag in date selection tag", () => {
    const { container } = render(<DateSelection label='Date' year='2020' month='March' day='20' onChange={() => {}} />);
    expect(container).not.toBeNull();
    const monthTag = screen.getByTestId('month');
    expect(monthTag.className).toContain('month-select');
    expect(monthTag.children.length).toBe(12);
    expect(monthTag.value).toBe('March');
  });

  test("checks for the year select tag in date selection tag", () => {
     const { container } = render(<DateSelection label='Date' year='2020' month='March' day='20' onChange={() => {}} />);
     expect(container).not.toBeNull();
     const yearTag = screen.getByTestId('year');
     expect(yearTag.className).toContain('year-select');
     expect(yearTag.children.length).toBe(10);
     expect(yearTag.value).toBe('2020');
  });

  test("checks for the day select tag in date selection tag", () => {
    const { container } = render(<DateSelection label='Date' year='2020' month='March' day='20' onChange={() => {}} />);
    expect(container).not.toBeNull();
    const dayTag = screen.getByTestId('day');
    expect(dayTag.className).toContain('day-select');
    expect(dayTag.children.length).toBe(31);
    expect(dayTag.value).toBe('20');
  });

  test("checks for the day select tag in date selection tag for leap year", () => {
    const { container } = render(<DateSelection label='Date' year='2020' month='February' day='20' onChange={() => {}} />);
    expect(container).not.toBeNull();
    const dayTag = screen.getByTestId('day');
    expect(dayTag.className).toContain('day-select');
    expect(dayTag.children.length).toBe(29);
    expect(dayTag.value).toBe('20');
  });

  test("checks for the day select tag in date selection tag for leap year", () => {
    const { container } = render(<DateSelection label='Date' year='2019' month='February' day='20' onChange={() => {}} />);
    expect(container).not.toBeNull();
    const dayTag = screen.getByTestId('day');
    expect(dayTag.className).toContain('day-select');
    expect(dayTag.children.length).toBe(28);
    expect(dayTag.value).toBe('20');
  });
});