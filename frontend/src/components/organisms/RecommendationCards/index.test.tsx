import React from "react";
import { render, screen } from "@testing-library/react";
import RecommendationCards from ".";
import "@testing-library/jest-dom/extend-expect";
import { recommendationCardsData } from "../../../helper/recommendationCards";
import { MemoryRouter } from "react-router-dom";

test("Test - Recommendation Cards", () => {
  render(
    <MemoryRouter>
      <RecommendationCards data={recommendationCardsData} />
    </MemoryRouter>
  );
  const title = screen.getByText(/Basic Physics/i);
  expect(title).toBeInTheDocument();
});
