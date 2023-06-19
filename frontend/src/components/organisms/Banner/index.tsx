import { Box, styled } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";

interface BannerProps {
  bannerBackground?: any;
  handleClick?: any;
  children?: any;
}
const BannerContainer = styled(Box)({
  width: "1112px",
  height: "352px",
  position: "relative",
});

const Banner = ({ bannerBackground, handleClick, children }: BannerProps) => {
  return (
    <BannerContainer sx={{ background: bannerBackground }} data-cy="banner">
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          textTransform: "none",
          width: "100px",
          height: "38px",
          position: "absolute",
          bottom: "66px",
          left: "45px",
        }}
        data-cy="discover-button"
      >
        <Typography variant="body1">{children}</Typography>
      </Button>
    </BannerContainer>
  );
};

export default Banner;
