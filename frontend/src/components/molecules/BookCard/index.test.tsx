import React from "react";
import BookCard, { BookCardProps } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { bookCardProps } from "../../../helper/bookCard";
import { MemoryRouter } from "react-router-dom";

const props: BookCardProps = { ...bookCardProps };

it("Renders Book card", () => {
  render(
    <MemoryRouter>
      <BookCard {...props} />
    </MemoryRouter>
  );

  const img = screen.getAllByTestId("testImage");
  const typo = screen.getAllByTestId("testTypo");

  expect(img.length).toBe(5);
  expect(typo.length).toBe(9);

  expect(img[0]).toHaveAttribute("src", "/assets/book.jpg");
  expect(img[1]).toHaveAttribute("src", "/assets/leaf.png");
  expect(img[2]).toHaveAttribute("src", "/assets/icons/bookmark.svg");
  expect(img[3]).toHaveAttribute("src", "/assets/icons/reply.svg");
  expect(img[4]).toHaveAttribute("src", "/assets/icons/playlist.svg");

  expect(typo[0]).toHaveTextContent("Title of the Book");
  expect(typo[1]).toHaveTextContent(
    "description of the book as das d asd asd asd asd asd asd asda"
  );
  expect(typo[2]).toHaveTextContent("Label");
  expect(typo[3]).toHaveTextContent("Author");
  expect(typo[4]).toHaveTextContent("3.5");
  expect(typo[5]).toHaveTextContent("(200 ratings)");
  expect(typo[6]).toHaveTextContent("Label");
  expect(typo[7]).toHaveTextContent("Category");
  expect(typo[8]).toHaveTextContent("20 left / 200 pages");
});
