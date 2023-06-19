import { DividerProps } from "@mui/material";
import React from "react";
import Divider from "./";

export default {
  title: "atoms/divider",
  component: Divider,
};

export const component = (props: DividerProps) => <Divider {...props} />;

component.args = {
  orientation: "vertical",
};
