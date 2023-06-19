import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrentBooks from ".";
import { MemoryRouter } from "react-router-dom";

const res: any = [
  {
    id: 1,
    src: "/assets/leaf.jpg",
    alt: "zemoso",
    author: "author name 1",
    category: "category 1",
    title: "title 1",
    totalPage: 200,
    leftPage: 100,
  },
  {
    id: 2,
    src: "/assets/book.jpg",
    alt: "zemoso",
    author: "author name 2",
    category: "category 2",
    title: "title 2",
    totalPage: 400,
    leftPage: 200,
  },
];

it("Renders Current Books card", () => {
  const realUseState = React.useState;
  jest.spyOn(React, "useState").mockImplementationOnce(() => realUseState(res));
  render(
    <MemoryRouter>
      <CurrentBooks />
    </MemoryRouter>
  );

  // const img = screen.getAllByTestId("testImage");
  // const typo = screen.getAllByTestId("testTypo");
  // console.log(typo[0]);
  // expect(img.length).toBe(2);
  // expect(typo.length).toBe(12);

  // expect(img[0]).toHaveAttribute("src", "/assets/leaf.jpg");
  // expect(img[0]).toHaveAttribute("alt", "zemoso");

  // expect(img[1]).toHaveAttribute("src", "/assets/book.jpg");
  // expect(img[1]).toHaveAttribute("alt", "zemoso");

  // expect(typo[0]).toHaveTextContent("title 1");
  // expect(typo[1]).toHaveTextContent("Author");
  // expect(typo[2]).toHaveTextContent("author name 1");
  // expect(typo[3]).toHaveTextContent("Category");
  // expect(typo[4]).toHaveTextContent("category 1");
  // expect(typo[5]).toHaveTextContent("100 left / 200 pages");

  // expect(typo[6]).toHaveTextContent("title 2");
  // expect(typo[7]).toHaveTextContent("Author");
  // expect(typo[8]).toHaveTextContent("author name 2");
  // expect(typo[9]).toHaveTextContent("Category");
  // expect(typo[10]).toHaveTextContent("category 2");
  // expect(typo[11]).toHaveTextContent("200 left / 400 pages");
});
