import React from "react";
import Typography from "./";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomTypographyProps } from ".";

const props: CustomTypographyProps = {
  variant: "h1",
  children: "text",
  component: "h1",
};

test("Renders Typography", () => {
  render(<Typography {...props} />);
  expect(screen.getByTestId("testTypo")).toBeInTheDocument();
  expect(screen.getByTestId("testTypo").textContent).toBe("text");
});
