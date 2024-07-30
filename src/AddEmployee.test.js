import { render, screen , fireEvent } from '@testing-library/react';
import AddEmployee from './AddEmployee';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';

describe("testing for AddEmployee page",()=>{
  test('AddEmployeeEmployee name',()=>{
    render(<BrowserRouter>
    <AddEmployee/>
    </BrowserRouter>
    );
    expect (screen.getByRole("name")).toBeInTheDocument();
  })

  test('testing for AddEmployee experiance',()=>{
    render(<BrowserRouter>
      <AddEmployee/>
      </BrowserRouter>
      );
    expect (screen.getByRole("experiance")).toBeInTheDocument();
  })

  test('testing forAddEmployee expertise',()=>{
    render(<BrowserRouter>
      <AddEmployee/>
      </BrowserRouter>
      );
    expect (screen.getByRole("expertise")).toBeInTheDocument();
  })

//   it('Testing for the submit button', () => {
//     const subscribeMock = jest.fn();
//     const { getByText } = render(<AddEmployee subscribe={subscribeMock} />);
//     const button = getByText('Submit');
//     fireEvent.click(button);
//     expect(subscribeMock).toHaveBeenCalledTimes(0);
// })
})
