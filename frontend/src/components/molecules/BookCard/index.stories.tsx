import { styled } from "@mui/material";
import React from "react";
import BookCard, { BookCardProps } from ".";
import { bookCardProps } from "../../../helper/bookCard";
export default {
  title: "molecules/bookCard",
  component: BookCard,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
  },
};
const StyledWrapper = styled("div")(
  ({ theme }) =>
    `
  width: max-content;
  display: grid;
  padding: 16px 24px 16px 24px;
  border-radius: 4px;
  border: solid 1px ${theme.palette.grey[300]};
  overflow: hidden;
`
);

export const component = (props: BookCardProps) => (
  <StyledWrapper>
    <BookCard {...props} />
  </StyledWrapper>
);

component.args = {
  ...bookCardProps,
};
