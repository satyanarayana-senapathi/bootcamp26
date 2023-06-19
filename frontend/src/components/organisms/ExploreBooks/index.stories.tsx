import React from "react";
import ExploreBooks, { ExploreBooksProps } from ".";

export default {
  title: "organisms/ExploreBooks",
  component: ExploreBooks,
};

export const component = (props: ExploreBooksProps) => (
  <ExploreBooks {...props} />
);

component.args = {
  search: "j d",
  page: 1,
};
