import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';
import {Validator} from '../Utils/Validator';

describe('Examining the TextInput component of the library', () => {

  test("checks for the textinput component ", () => {
    const { container } = render(<TextInput name="textInput" label="TextInput" onChange={() => {}} />);
    const labelNode = screen.getByLabelText('TextInput');
    expect(labelNode).not.toBeNull();
    expect(labelNode.value).toBe('');
    expect(container.firstChild.firstChild).toBeTruthy();
  });

  test("checks for the textinput tag ", () => {
    const { container } = render(<TextInput name="textInput" label="TextInput" onChange={() => {}} />);
    expect(container).not.toBeNull();
    const textInput = container.querySelector('input');
    expect(textInput.value).toBe('');
    expect(textInput.className).toContain('simple-text-input');
    expect(textInput.className).toContain('form-control');
  });

  test("checks for the label element ", () => {
    const { container } = render(<TextInput name="textInput" label="TextInput" onChange={() => {}} />);
    expect(container).not.toBeNull();
    const labelCtrl = container.querySelector('label');
    expect(labelCtrl.innerHTML).toBe('TextInput');
    expect(labelCtrl.htmlFor).toContain('textInput');
  });

  test("checks for the textinput element without the default class name", () => {
    const { container } = render(<TextInput name="textInput" className="app-text-input" label="TextInput" onChange={() => {}} />);
    expect(container).not.toBeNull();
    const textInput = container.querySelector('input');
    expect(textInput.className).not.toContain('simple-text-input');
    expect(textInput.className).toContain('app-text-input');
  });

  test('checks for the textinput element and performs a key entry operation with space and error div should be shown', () => {
    function handleChange(evt) {
      evt.target.value = evt.target.value;
    };

    const { container } = render(<TextInput name="textInput" className="app-text-input" label="TextInput" onChange={handleChange}
     validators={[{check: Validator.required, message: 'This field is required'}]}/>);
    expect(container).not.toBeNull();
    const textInput = container.querySelector('input');
    fireEvent.change(textInput, { target: { value: ' ' } });
    const errorEle = screen.getByText('This field is required');
    expect(errorEle).toBeDefined();
  });
});