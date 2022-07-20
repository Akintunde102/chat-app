import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SenderMessage from "./../components/SenderMessage";


test('should print SenderMessage component', () => {
    const testName = "testName";
    const testMessage = "testMessage";

    render(<SenderMessage message={testMessage} name={testName} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(screen.getByText(testName)).toBeInTheDocument();
});


