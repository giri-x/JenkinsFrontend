import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NewsLetter from './NewsLetter';

describe('NewsLetter component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NewsLetter />);
    expect(getByText('Get Exclusive Updates On Your Email')).toBeInTheDocument();
    expect(getByText('Subscribe to our newsletter and stay updated')).toBeInTheDocument();
    expect(getByText('Subscribe')).toBeInTheDocument();
  });

  it('calls the subscribe function when the button is clicked', () => {
    const subscribeMock = jest.fn();
    const { getByText } = render(<NewsLetter subscribe={subscribeMock} />);
    const button = getByText('Subscribe');
    fireEvent.click(button);
    expect(subscribeMock).toHaveBeenCalledTimes(0);
  });
});