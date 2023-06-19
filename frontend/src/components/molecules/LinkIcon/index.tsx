import React from "react";
import Typography, { CustomTypographyProps } from "../../atoms/Typography/";
import Image from "../../atoms/Image/";
import Button from "../../atoms/Button/";
interface LinkIconProps {
  text: string;
  startIcon?: string;
  endIcon?: string;
  onClick?: any;
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  hoverColor?: string;
  textTypography?: CustomTypographyProps;
  dataCy?:string;
}
const LinkIcon: React.FC<LinkIconProps> = (props: LinkIconProps) => {
  return (
    <Button
      onClick={props.onClick}
      variant="text"
      disableRipple={true}
      sx={{
        padding: "0px",
        textTransform: "none",
        "&:hover": {
          background: "transparent",
          "& .MuiTypography-root": {
            color: props.hoverColor,
          },
        },
      }}
      startIcon={
        props.startIcon && (
          <Image src={props.startIcon} alt="start Icon" {...props.imageProps} />
        )
      }
      endIcon={
        props.endIcon && (
          <Image src={props.endIcon} alt="End Icon" {...props.imageProps} />
        )
      }
      data-cy={props.dataCy}
    >
      <Typography {...props.textTypography}>{props.text}</Typography>
    </Button>
  );
};
export default LinkIcon;
