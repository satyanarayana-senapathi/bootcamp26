import React from "react";
import TaskCard from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const res: any = [
  {
    src: "/assets/leaf.png",
    alt: "zemoso",
    title: "title1",
    value: 100,
  },
  {
    src: "/assets/test.webp",
    alt: "zemoso alt",
    title: "title2",
    value: 200,
  },
];

it("Renders topic cards", () => {
  const realUseState = React.useState;
  jest.spyOn(React, "useState").mockImplementationOnce(() => realUseState(res));
  render(<TaskCard />);

  const img = screen.getAllByTestId("testImage");
  const typo = screen.getAllByTestId("testTypo");

  expect(img.length).toBe(2);
  expect(typo.length).toBe(4);

  expect(img[0]).toHaveAttribute("src", "/assets/leaf.png");
  expect(img[0]).toHaveAttribute("alt", "zemoso");

  expect(typo[0]).toHaveTextContent("title1");
  expect(typo[1]).toHaveTextContent("100");
});
