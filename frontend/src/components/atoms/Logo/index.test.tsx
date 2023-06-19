import Logo from ".";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import logo from "../../../assets/Logo/logo.svg";

test("render a logo", () => {
  render(<Logo />);
  const logoElement = screen.getByRole("img");
  expect(logoElement).toHaveAttribute("src", logo);
  expect(logoElement).toHaveAttribute("alt", "logo");
});
