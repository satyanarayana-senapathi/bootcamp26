import React from "react";
import { Divider as MuiDivider, DividerProps, styled } from "@mui/material";

const StyledVerticalDivider = styled(MuiDivider)(
  ({ theme }) => `
  width: 1px;
  min-height: 38px;
  border-color: ${theme.palette.grey[300]};
`
);

const StyledHorizontalDivider = styled(MuiDivider)(
  ({ theme }) => `
  border-color: ${theme.palette.grey[300]};
`
);

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return (
    <>
      {props.orientation === "vertical" ? (
        <StyledVerticalDivider data-testid="testDivider" {...props} />
      ) : (
        <StyledHorizontalDivider data-testid="testDivider" {...props} />
      )}
    </>
  );
};

export default Divider;
