import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';

describe('Examining the Radio Group component of the library', () => {
  const radioList = [{name: 'test', label: 'test 1', defaultValue: 'test', value: 'test'}];

  test("checks for the radio group ta ", () => {
    const { container } = render(<RadioGroup onChange={() => {}} list={radioList}/>);
    expect(container).not.toBeNull();
    expect(container.firstChild.firstChild).toBeTruthy();
  });

  test("checks for the radio group tag with empty list and return error div", () => {
    const { container } = render(<RadioGroup onChange={() => {}} list={[]}/>);
    expect(container).not.toBeNull();
    const formCheck = container.querySelector('div');
    expect(formCheck.firstChild.classList).not.toBe('form-check');
    expect(formCheck.firstChild.classList).toContain('error-list-provider');
    expect(formCheck.firstChild.innerHTML).toContain('Empty list (or) No List provided.');
  });

  test("checks for the label element ", () => {
    const radioList = [{name: 'test', label: 'test 1', defaultValue: 'test', value: 'test'},
                       {name: 'test', label: 'test 2', defaultValue: 'test', value: 'test 2'}];
    const { container } = render(<RadioGroup onChange={() => {}} list={radioList}/>);
    expect(container).not.toBeNull();
    const labelScreen1 = screen.getByLabelText('test 1');
    const labelScreen2 = screen.getByLabelText('test 2');
    expect(labelScreen1).not.toBeNull();
    expect(labelScreen2).not.toBeNull();
    expect(labelScreen1.value).toBe('test');
    expect(labelScreen2.value).toBe('test 2');
  });
});