import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Banner from ".";
import "@testing-library/jest-dom/extend-expect";
import BannerImg from "../../../assets/banner.png";

test("Test - Banner", () => {
  render(
    <Banner
      bannerBackground={BannerImg}
      handleClick={() => console.log("Discover Button Clicked")}
    >
      Discover
    </Banner>
  );
  const bannerButton = screen.getByRole("button");
  console.log = jest.fn();
  fireEvent.click(bannerButton);
  expect(console.log).toHaveBeenCalledWith("Discover Button Clicked");
});
