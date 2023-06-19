import React from "react";
import { TypographyProps } from "@mui/material";
import Typography from "./";

const variants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "body1",
  "body2",
  "caption1",
  "caption2",
];

export default {
  title: "atoms/typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
    children: { control: "text" },
    variant: {
      options: [...variants],
      control: { type: "select" },
    },
    component: {
      options: [...variants],
      control: { type: "select" },
    },
  },
};

export const component = (props: TypographyProps) => <Typography {...props} />;

component.args = {
  variant: "h1",
  component: "h1",
  children: "text",
  color: "#000000",
};
