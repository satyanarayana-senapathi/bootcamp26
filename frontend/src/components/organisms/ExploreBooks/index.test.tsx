import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExploreBooks from ".";
import { MemoryRouter } from "react-router-dom";

const res: any = [
  {
    id: 1,
    src: "/assets/book.jpg",
    alt: "zemoso",
    author: "author name 1",
    title: "title 1",
    avgRating: 3.5,
    totalRating: 200,
    description:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    authorImg: "/assets/avatar.jpg",
  },
  {
    id: 2,
    src: "/assets/book.jpg",
    alt: "zemoso",
    author: "author name 2",
    title: "title 2",
    avgRating: 3.5,
    totalRating: 200,
    description:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    authorImg: "/assets/avatar.jpg",
  },
];

it("Renders Current Explore card", () => {
  const realUseState = React.useState;
  jest.spyOn(React, "useState").mockImplementationOnce(() => realUseState(res));
  render(
    <MemoryRouter>
      <ExploreBooks page={1} search="author" />
    </MemoryRouter>
  );
  jest.clearAllMocks();

  // const img = screen.getAllByTestId("testImage");
  // const typo = screen.getAllByTestId("testTypo");
  // expect(img.length).toBe(10);
  // expect(typo.length).toBe(12);

  // expect(img[0]).toHaveAttribute("src", "/assets/book.jpg");
  // expect(img[0]).toHaveAttribute("alt", "zemoso");

  // expect(typo[0]).toHaveTextContent("title 1");
  // expect(typo[1]).toHaveTextContent(
  //   "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
  // );
  // expect(typo[2]).toHaveTextContent("Author");
  // expect(typo[3]).toHaveTextContent("author name 1");
  // expect(typo[4]).toHaveTextContent("3.5");
  // expect(typo[5]).toHaveTextContent("200");
});
