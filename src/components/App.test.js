import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Select from './Select';

describe('Examining the root application of the library', () => {

//  test("checks for the Firstname text input", () => {
//    const { getByText } = render(<App />);
//    const labelNode = screen.getByLabelText('Firstname');
//    expect(labelNode).not.toBeNull();
//    expect(labelNode.value).toBe('');
//  });
//
//  test("checks for the Firstname text input", () => {
//     const { getByText } = render(<App />);
//     const labelNode = screen.getByLabelText('Password');
//     expect(labelNode).not.toBeNull();
//     labelNode.value = 'test';
//     expect(labelNode.value).toBe('test');
//  });

//  test("checks for the select tag ", () => {
//       const dropDown = [1,2,3];
//       const { getByText } = render(<Select value="1" list={dropDown} onChange={() => {}} />);
//       expect(screen.getByText("Drop Down")).toBeInTheDocument();
//       const labelNode = screen.getByDisplayValue('1');
//       expect(labelNode).not.toBeNull();
//       expect(labelNode.value).toBe('test');
//    });
});