import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NameForm from '../components/NameForm';

const mockSetState = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(initial => [initial, mockSetState])
}));

const { location } = window;
beforeAll(() => {
    delete window.location;
    window.location = { replace: jest.fn() };
});

afterAll(() => {
    window.location = location;
});



test('should print nameForm component', () => {
    render(<NameForm />);
    expect(screen.getByText('Please Enter Your Name')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
});


test('should update state  when text is added', () => {
    const testText = "Hello";
    render(<NameForm />);

    const textInput = screen.getByRole('textbox');
    fireEvent.change(textInput, { target: { value: testText } });

    expect(mockSetState).toHaveBeenCalledWith(testText);
})


test('should redirect to new page ', () => {
    render(<NameForm />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.location.replace).toHaveBeenCalledTimes(1)
})


