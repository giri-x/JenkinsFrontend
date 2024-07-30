import { render, screen } from '@testing-library/react';
import UpdateCons from "./UpdateCons";
import "@testing-library/jest-dom";



describe("testing for Update page",()=>{
  test('Update id',()=>{
    render(<UpdateCons/>);
    expect (screen.getByRole("uid")).toBeInTheDocument();
  })

  test('Update Name',()=>{
    render(<UpdateCons/>);
    expect (screen.getByRole("uname")).toBeInTheDocument();
  })

  test('Update Experiance',()=>{
    render(<UpdateCons/>);
    expect (screen.getByRole("uexperiance")).toBeInTheDocument();
  })

  test('Update Expertise',()=>{
    render(<UpdateCons/>);
    expect (screen.getByRole("uexpertise")).toBeInTheDocument();
  })

})
