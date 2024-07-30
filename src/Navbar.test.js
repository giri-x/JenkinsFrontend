import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(getByText('JOB PORTAL')).toBeInTheDocument();
    expect(getByText('View Jobs')).toBeInTheDocument();
    expect(getByText('View Applicants')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Updates')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });

  it('navigates to correct routes when links are clicked', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const viewJobsLink = getByText('View Jobs');
    fireEvent.click(viewJobsLink);
    expect(window.location.pathname).toBe('/View');

    const viewApplicantsLink = getByText('View Applicants');
    fireEvent.click(viewApplicantsLink);
    expect(window.location.pathname).toBe('/View1');

    const aboutLink = getByText('About');
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/About');

    const updatesLink = getByText('Updates');
    fireEvent.click(updatesLink);
    expect(window.location.pathname).toBe('/Updates');
  });



  it('renders cart icon and count correctly', () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const cartIcon = getByAltText('');
    expect(cartIcon).toBeInTheDocument();

    const cartCount = getByText('0');
    expect(cartCount).toBeInTheDocument();
  });
});