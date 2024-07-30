import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
import "@testing-library/jest-dom";


jest.mock('axios');
jest.mock('react-router-dom');
 
describe('Register Component Tests', () => {
  test('renders email and password', () => {
    render(<SignUp />);

    const nameInput = screen.getByRole('name');

    const passwordInput = screen.getByRole('password');
    const emailInput = screen.getByRole('email');
    
 
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });
});