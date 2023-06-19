import React from "react";
import BookCard from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Renders Book Details Organism", () => {
  render(<BookCard />);

  expect(screen.getAllByTestId("testImage").length).toBe(9);
  expect(screen.getAllByTestId("testTypo").length).toBe(13);

  const select = screen.getByTestId("select");
  fireEvent.click(select);
});
