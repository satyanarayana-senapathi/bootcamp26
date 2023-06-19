import React from "react";
import Divider from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Renders Vertical Divider", () => {
  render(<Divider orientation="vertical" />);
  expect(screen.getByTestId("testDivider")).toBeInTheDocument();
});

it("Renders Horizontal Divider", () => {
  render(<Divider orientation="horizontal" />);
  expect(screen.getByTestId("testDivider")).toBeInTheDocument();
});
