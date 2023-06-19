const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
import React from "react";
import { render } from "@testing-library/react";
import SearchResult from ".";
import "@testing-library/jest-dom/extend-expect";

test("Test - Search Result", () => {
  render(<SearchResult />);
});
