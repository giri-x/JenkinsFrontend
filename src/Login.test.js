import { render, screen } from '@testing-library/react';
import Login from './Login';
import "@testing-library/jest-dom";


jest.mock('axios');
jest.mock('react-router-dom');
 
describe('Login Component Tests', () => {
  test('renders email and password', () => {
    render(<Login />);
 
    const emailInput = screen.getByRole('email');
    const passwordInput = screen.getByRole('password');
 
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});