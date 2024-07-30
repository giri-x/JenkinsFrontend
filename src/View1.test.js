import { render, screen , fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"
import View1 from './View1';
import { BrowserRouter } from 'react-router-dom';


describe('View page component test',()=>{
test("renders Job portal", () => {
  render(<BrowserRouter>
  <View1 />
  </BrowserRouter>);
  const linkElement = screen.getByRole('ONLINE-JOB-PORTAL');
  expect(linkElement).toBeInTheDocument();
});

test("renders Applicant details", () => {
    render(<BrowserRouter>
    <View1 />
    </BrowserRouter>);
    const linkElement = screen.getByRole('APPLICANT-DETAILS');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders link add test', () => {
    render(<BrowserRouter>
    <View1 />
    </BrowserRouter>);
    const link = screen.getByText('Add +');
    fireEvent.click(link);
    expect(window.location.pathname).toBe('/AddEmployee');
  });
 
});