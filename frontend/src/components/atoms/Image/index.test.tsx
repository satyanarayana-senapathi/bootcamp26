import React from "react";
import Image from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const props = {
  src: "/assets/test.webp",
  alt: "leaf",
};

test("Renders an Image", () => {
  render(<Image {...props} />);

  const img = screen.getByTestId("testImage");
  expect(img).toBeInTheDocument();

  expect(img).toHaveAttribute("src", "/assets/test.webp");
  expect(img).toHaveAttribute("alt", "leaf");
});
