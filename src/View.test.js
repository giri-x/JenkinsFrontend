import { render, screen , fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"
import View from './View';
import { BrowserRouter } from 'react-router-dom';


describe('View page component test',()=>{
test("renders Job portal", () => {
  render(<BrowserRouter>
  <View />
  </BrowserRouter>);
  const linkElement = screen.getByRole('JOB');
  expect(linkElement).toBeInTheDocument();
});

test("renders Job details", () => {
    render(<BrowserRouter>
    <View />
    </BrowserRouter>);
    const linkElement = screen.getByRole('JOB-DETAILS');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders link add test', () => {
    render(<BrowserRouter>
    <View />
    </BrowserRouter>);
    const link = screen.getByText('Add +');
    fireEvent.click(link);
    expect(window.location.pathname).toBe('/Add');
  });
 
});