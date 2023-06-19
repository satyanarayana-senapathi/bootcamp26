import React from "react";
import Input, { CustomInputProps } from "./";
import search from "../../../assets/icons/search.svg";
import close from "../../../assets/icons/close.svg";

export default {
  title: "atoms/input",
  component: Input,
};

export const component = (props: CustomInputProps) => <Input {...props} />;

component.args = {
  type: "text",
  placeholder: "Enter the search value.",
  startIcon: search,
  endIcon: close,
};
