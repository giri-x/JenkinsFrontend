import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('GET YOUR DREAM CARRER')).toBeInTheDocument();
    expect(getByText('Technology')).toBeInTheDocument();
    expect(getByText('made')).toBeInTheDocument();
    expect(getByText('for everyone')).toBeInTheDocument();
    expect(getByText('Apply for Job Now')).toBeInTheDocument();
  });



 
});