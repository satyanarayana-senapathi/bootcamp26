import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

export interface CustomTypographyProps extends TypographyProps {
  component?: React.ElementType;
}

const Typography: React.FC<CustomTypographyProps> = (
  props: CustomTypographyProps
) => {
  return (
    <MuiTypography {...props} data-testid="testTypo">
      {props.children}
    </MuiTypography>
  );
};

export default Typography;
