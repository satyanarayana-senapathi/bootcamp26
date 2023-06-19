import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";
import "@testing-library/jest-dom/extend-expect";

test("Test - Button", () => {
  render(
    <Button variant="contained" onClick={() => console.log("Button Clicked")}>
      Discover
    </Button>
  );
  const button = screen.getByRole("button");
  console.log = jest.fn();
  fireEvent.click(button);
  expect(console.log).toHaveBeenCalledWith("Button Clicked");
});
