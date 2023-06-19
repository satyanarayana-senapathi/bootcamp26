import React from "react";
import {
  Input as MuiInput,
  InputAdornment,
  InputProps,
  styled,
} from "@mui/material";
import Image from "../Image";

const StyledImage = styled(Image)(
  ({ theme }) => `
  margin-right: ${theme.spacing(2)};
`
);

export interface CustomInputProps extends InputProps {
  startIcon?: string;
  endIcon?: string;
  handleClear?: React.MouseEventHandler<HTMLImageElement>;
}

const Input: React.FC<CustomInputProps> = (props: CustomInputProps) => {
  const StyledInput = styled(MuiInput)(
    ({ theme }) => `
    border-radius: 4px;
    border: solid 1px;
    border-color: ${theme.palette.grey[300]};
    outline: 0;
    padding: ${theme.spacing(2)} ${theme.spacing(3)};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  `
  );

  return (
    <StyledInput
      {...props}
      startAdornment={
        props.startIcon ? (
          <InputAdornment position="start">
            <StyledImage src={props.startIcon} />
          </InputAdornment>
        ) : (
          <></>
        )
      }
      endAdornment={
        props.endIcon ? (
          <InputAdornment position="end" style={{ cursor: "pointer" }}>
            <StyledImage src={props.endIcon} onClick={props.handleClear} />
          </InputAdornment>
        ) : (
          <></>
        )
      }
      disableUnderline
      inputProps={{
        style: {
          padding: 0,
        },
      }}
    />
  );
};

export default Input;
