import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Examining the Select component of the library', () => {
  const dropDownList =  [1,2,3];

  test("checks for the select tag ", () => {
    const { container } = render(<Select label="Select Dropdown" name="dropDown" onChange={() => {}}
     list={dropDownList}/>);
    expect(container).not.toBeNull();
    expect(container.firstChild.firstChild).toBeTruthy();
  });

  test("checks for the select tag with the default class name", () => {
    const { container } = render(<Select label="Select Dropdown" name="dropDown" onChange={() => {}}
    list={dropDownList}/>);
    expect(container).not.toBeNull();
    const selectTag = container.querySelector('select');
    expect(selectTag.className).toContain('simple-select-button');
    expect(selectTag.className).toContain('form-control');
  });

  test("checks for the label element ", () => {
    const { container } = render(<Select label="Select Dropdown" name="dropDown" onChange={() => {}}
        list={dropDownList}/>);
    expect(container).not.toBeNull();
    const labelCtrl = container.querySelector('label');
    expect(labelCtrl.innerHTML).toBe('Select Dropdown');
    expect(labelCtrl.htmlFor).toContain('dropDown');
  });

  test("checks for the select element without the default class name", () => {
    const { container } = render(<Select label="Select Dropdown" className="app-select-tag" name="dropDown" onChange={() => {}}
            list={dropDownList}/>);
    expect(container).not.toBeNull();
    const selectTag = container.querySelector('select');
    expect(selectTag.className).not.toContain('simple-select-button');
    expect(selectTag.className).toContain('app-select-tag');
  });

  test('checks for the select element and performs a change operation', () => {
    function handleChange(evt) {
        evt.target.value = evt.target.value;
    };

    const { container } = render(<Select label="Select Dropdown" name="dropDown" onChange={handleChange}
             list={dropDownList}/>);
    expect(container).not.toBeNull();
    let selectTag = container.querySelector('select');
    fireEvent.change(selectTag, { target: { value: 2 } });
    selectTag = container.querySelector('select');
    console.log(selectTag[0].selected);
    console.log(selectTag[1].selected);
    console.log(selectTag[2].selected);
  });
});