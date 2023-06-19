import React from "react";
import Topics, { TopicsProps } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const props: TopicsProps = {
  src: "/assets/test.webp",
  alt: "zemoso",
  text: "text",
};
it("Renders topics card", () => {
  render(<Topics {...props} />);
  const img = screen.getByTestId("testImage");
  expect(img).toBeInTheDocument();
  expect(screen.getByTestId("testTypo").textContent).toBe("text");

  expect(img).toHaveAttribute("src", "/assets/test.webp");
  expect(img).toHaveAttribute("alt", "zemoso");
});
