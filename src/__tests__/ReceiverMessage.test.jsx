import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReceiverMessage from '../components/ReceiverMessage';


test('should print ReceiverMessage component', () => {
    const testName = "testName";
    const testMessage = "testMessage";

    render(<ReceiverMessage message={testMessage} name={testName} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(screen.getByText(testName)).toBeInTheDocument();
});


