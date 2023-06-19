import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Pagination from ".";
const totalPosts = 16;
const postsPerPage = 8;
describe("Pagination", () => {
  test("handles page onchange", () => {
    render(
      <Pagination
        totalPages={2}
        onClick={(pageNumber: number) =>
          console.log(`currently in ${pageNumber}`)
        }
      />
    );
    const totalPages = document.getElementsByTagName("li").length;
    expect(totalPages).toBe(Math.ceil(totalPosts / postsPerPage) + 2);
    const page1 = screen.getByRole("button", { name: /1/i });
    const page2 = screen.getByRole("button", { name: /2/i });
    expect(page1).toHaveAttribute("aria-label", "page 1");
    expect(page2).toHaveAttribute("aria-label", "Go to page 2");
    console.log = jest.fn();
    fireEvent.click(page2);
    expect(page1).toHaveAttribute("aria-label", "Go to page 1");
    expect(page2).toHaveAttribute("aria-label", "page 2");
    expect(console.log).toHaveBeenCalledWith("currently in 2");
  });
});
