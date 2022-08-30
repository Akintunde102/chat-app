import React from 'react'
import { render, screen } from '@testing-library/react'
import ChatList from '../components/ChatList';
import '@testing-library/jest-dom'



test('should print chatList component', () => {

    const testChatList = [{
        message: "Hi",
        name: "Jane",
        date: 1597490980000
    }];
    const testName = "John";
    render(<ChatList chatList={testChatList} name={testName} />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
});


