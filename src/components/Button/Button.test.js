import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Examining the Button component of the library', () => {

  test("checks for the button tag ", () => {
    const buttonComponent = render(<Button value="submit" onChange={() => {}} />);
    expect(buttonComponent).not.toBeNull();
    expect(buttonComponent.getByText('submit'));
  });

  test("checks for the button tag with the default class name", () => {
    const { container } = render(<Button value="submit" onChange={() => {}} />);
    expect(container).not.toBeNull();
    expect(container.firstChild.classList.contains('app-button')).toBe(true);
  });

  test("checks for the button tag without the default class name", () => {
    const { container } = render(<Button value="submit" className="app-btn" onChange={() => {}} />);
    expect(container).not.toBeNull();
    expect(container.firstChild.classList.contains('app-button')).toBe(false);
    expect(container.firstChild.classList.contains('app-btn')).toBe(true);
  });

  test('checks for the button tag and performs a click operation', (done) => {
    function handleChange(evt) {
      evt.target.innerHTML = "whamo";
      done();
    };

    const buttonComponent = render(<Button value="submit" onChange={handleChange} />);
    expect(buttonComponent).not.toBeNull();
    expect(buttonComponent.getByText('submit'));
    fireEvent.click(screen.getByText(/submit/i));
    expect(buttonComponent.getByText('whamo'));
  });
});