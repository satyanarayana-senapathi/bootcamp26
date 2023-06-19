import { Button as ButtonCore, ButtonProps } from "@mui/material";
import React from "react";

const Button = (props: ButtonProps) => {
  return <ButtonCore {...props}>{props.children}</ButtonCore>;
};
export default Button;
