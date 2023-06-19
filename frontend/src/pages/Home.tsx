import React from "react";
import { styled } from "@mui/material";
import Button from "../components/atoms/Button";
import Typography from "../components/atoms/Typography";
import Image from "../components/atoms/Image";

const StyledTypography = styled(Typography)(
  () =>
    `
    font-size: 22px;
    line-height: 1.55;
    font-family: Roboto;
    margin-bottom: 30px;
    `
);

const StyledHeading = styled(Typography)(
  () =>
    `
    margin-bottom: 17px;
    letter-spacing: 0.25px;
    `
);

const StyledDiv = styled("div")(
  () =>
    `
    max-width: 590px;
    `
);

const StyledWrapper = styled("div")(
  () =>
    `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    height: 100%;
    align-items: center;
    `
);

const StyledImgDiv = styled("div")(
  () =>
    `
      align-items: center;
      justify-content: center;
      display: flex;
    `
);

const StyledButton = styled(Button)(
  () =>
    `
      margin-bottom: 64px;
    `
);

const Home: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledDiv>
        <StyledHeading variant="h1" color="greyCharcoal.main" data-cy="heading">
          Personalized Learning Journeys
        </StyledHeading>
        <StyledTypography color="greySlate.main" data-cy="sub-text">
          Learning journeys mapped and recommended based on your grade, learning
          need and speed.
        </StyledTypography>
        <StyledButton variant="contained" data-cy="start-journey-button">Start your Journey</StyledButton>
      </StyledDiv>
      <StyledImgDiv>
        <Image src="/assets/empty-state.svg" data-cy="empty-state-image"></Image>
      </StyledImgDiv>
    </StyledWrapper>
  );
};

export default Home;
