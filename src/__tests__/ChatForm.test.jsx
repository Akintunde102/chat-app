import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ChatForm from '../components/ChatForm';
import '@testing-library/jest-dom'
import { store } from '../store';

jest.mock("../store", () => ({
    store: {
        getState: jest.fn().mockImplementation(() => ({
            chatList: [
                {
                    message: "Hello",
                    name: "John",
                    date: 1597490980000
                },
                {
                    message: "Hi",
                    name: "Jane",
                    date: 1597490980000
                }
            ]
        })),
        dispatch: jest.fn()
    }
}))

const mockSetState = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(initial => [initial, mockSetState])
}));



test('should print chatForm component', () => {
    render(<ChatForm />);
    expect(screen.getByPlaceholderText('Send Message')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
})

test('should update state  when text is added', () => {
    const testName = "John";
    const testChat =  "Hello";
    render(<ChatForm name={testName} />);

    const textInput = screen.getByRole('textbox');
    fireEvent.change(textInput, { target: { value: testChat } });

    expect(mockSetState).toHaveBeenCalledWith(testChat);
})


test('should dispatch new chat when button is clicked', () => {
    const testName = "John";
    render(<ChatForm name={testName} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ "payload": { "date": expect.any(Number), "message": expect.any(String), "name": testName }, "type": "UPDATE_CHAT_LIST" }));
})



