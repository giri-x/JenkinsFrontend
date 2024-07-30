import { render, screen } from '@testing-library/react';
import Add from './Add';
import "@testing-library/jest-dom";



describe("testing for add page",()=>{
  test('add id',()=>{
    render(<Add/>);
    expect (screen.getByRole("aid")).toBeInTheDocument();
  })

  test('add name',()=>{
    render(<Add/>);
    expect (screen.getByRole("aname")).toBeInTheDocument();
  })

  test('add result',()=>{
    render(<Add/>);
    expect (screen.getByRole("aresult")).toBeInTheDocument();
  })
})
