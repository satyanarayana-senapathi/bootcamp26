import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AboutAuthor from ".";
import "@testing-library/jest-dom/extend-expect";
import { aboutAuthorBooks } from "../../../helper/aboutAuthorCards";
import { MemoryRouter } from "react-router-dom";

test("Test - AboutAuthor", () => {
  render(
    <MemoryRouter>
      <AboutAuthor data={aboutAuthorBooks} />
    </MemoryRouter>
  );
  const buttons = screen.queryAllByRole("button");
  buttons?.map((button: Document | Node | Element | Window) =>
    fireEvent.click(button)
  );
});
