import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LinkIcon from ".";
import KeyboardArrowRight from "../../../assets/icons/keyboard-arrow-right-24-px.svg";
const linkProps = {
  text: "See more",
  endIcon: KeyboardArrowRight,
  onClick: () => console.log("link has been clicked"),
};
describe("link icon", () => {
  test("render a link", () => {
    render(<LinkIcon {...linkProps} />);
    const LinkIconElement = screen.getByRole("button");
    expect(LinkIconElement).toHaveTextContent(linkProps.text);
    console.log = jest.fn();
    fireEvent.click(LinkIconElement);
    expect(console.log).toHaveBeenCalledWith("link has been clicked");
  });
});
