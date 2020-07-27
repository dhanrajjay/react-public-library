import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioInput from './RadioInput';

describe('Examining the Radio component of the library', () => {
  const dropDownList =  [1,2,3];

  test("checks for the radio button tag ", () => {
    const { container } = render(<RadioInput label="Radio" value="radio" name="Radio One" onChange={() => {}}/>);
    expect(container).not.toBeNull();
    expect(container.firstChild.firstChild).toBeTruthy();
  });

  test("checks for the radio button with the default class name", () => {
    const { container } = render(<RadioInput label="Radio" value="radio" name="Radio One" onChange={() => {}}/>);
    expect(container).not.toBeNull();
    const selectTag = container.querySelector('input');
    expect(selectTag.className).toContain('form-check-input');
  });

  test("checks for the label element ", () => {
    const { container } = render(<RadioInput label="Radio" value="radio" name="Radio One" onChange={() => {}}/>);
    expect(container).not.toBeNull();
    const labelCtrl = container.querySelector('label');
    expect(labelCtrl.innerHTML).toBe('Radio');
    expect(labelCtrl.htmlFor).toContain('Radio');
  });
});