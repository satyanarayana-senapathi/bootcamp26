import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Explore from ".";
describe("Explore", () => {
  test("render a Explore", () => {
    render(<Explore />);
    const exploreElement = screen.getByRole("button");
    expect(exploreElement).toBeInTheDocument();
  });
  test("render a backdrop onclick", () => {
    render(<Explore />);
    const backdropElement = screen.getByTestId("backdrop");
    fireEvent.click(backdropElement);
    const explore = screen.getByRole("button");
    expect(explore).toBeInTheDocument();
  });
});
