import React from "react";
import { styled } from "@mui/material";

const StyledBody = styled("div")(
  () => `
    margin: auto;
    height: -webkit-fill-available;
    max-width: 1440px;
  `
);

const StyledWrapper = styled("div")(
  () => `
    min-height: calc(100vh - 16px);
    display: grid;
    grid-template-rows: max-content auto;
  `
);

const StyledHeader = styled("div")(
  () => `
    width: 100%;
  `
);

interface MainTemplateProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ header, children }) => {
  return (
    <StyledWrapper>
      <StyledHeader>{header}</StyledHeader>
      <StyledBody>{children}</StyledBody>
    </StyledWrapper>
  );
};

export default MainTemplate;
