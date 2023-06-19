import React from "react";
import Input from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const props = {
  type: "text",
  placeholder: "Enter the search value.",
  value: "text",
};

test("Renders an Input", () => {
  render(<Input {...props} />);

  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("text");
});
