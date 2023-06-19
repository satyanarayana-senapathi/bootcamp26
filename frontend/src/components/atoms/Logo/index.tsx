import React from "react";
import logo from "../../../assets/Logo/logo.svg";
import { styled } from "@mui/system";
const CustomImage = styled("img")({
  width: "31px",
  height: "24px",
});
const Logo = () => {
  return <CustomImage src={logo} alt="logo" data-cy="logo" />;
};
export default Logo;
