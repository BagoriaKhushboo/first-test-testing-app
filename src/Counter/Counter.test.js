import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// Unit Testing
// Integration tests

test("if increament button exists", () => {
  // render the counter component.
  render(<Counter />);

  // Select increament button and text box.
  const incButton = screen.getByTestId("btnInc");

  // Check if button exists.
  expect(incButton).toBeInTheDocument();
});

test("if counter input is exist", () => {
  // render the counter component.
  render(<Counter />);
  // select input field .
  const incInput = screen.getByTestId("txtCounter");
  // Check if txtcounter input  exists.
  expect(incInput).toBeInTheDocument();
});

test("if decreament button exists", () => {
  // render the counter component.
  render(<Counter />);

  // Select increament button and text box.
  const decButton = screen.getByTestId("btnDec");

  // Check if button exists.
  expect(decButton).toBeInTheDocument();
});

test(" counter is updated when button is clicked", () => {
  // render the counter component.
  render(<Counter />);
  // Select increament button and text box.
  const incButton = screen.getByTestId("btnInc");
  // select input field .
  const incInput = screen.getByTestId("txtCounter");
  //click the button
  fireEvent.click(incButton);
  // Check if txtcounter input  exists.
  expect(incInput).toBeInTheDocument();
  expect(incInput).toHaveValue("1");
});
