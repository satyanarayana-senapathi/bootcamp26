import React from "react";
import Typography from "../../atoms/Typography";
import { styled } from "@mui/material";
import Image from "../../atoms/Image";

const StyledDiv = styled("div")(
  () => `
  text-align: center;
  width: max-content
`
);

const StyledImage = styled(Image)(
  ({ theme }) => `
  width: 160px;
  height: 108px;
  object-fit: cover;
  margin-bottom: ${theme.spacing(1)},
`
);

export interface TopicsProps {
  src: string;
  alt: string;
  text: string;
}

const Topics: React.FC<TopicsProps> = (props: TopicsProps) => {
  return (
    <StyledDiv>
      <StyledImage src={props.src} alt={props.alt}></StyledImage>
      <Typography variant="h7" component="h3" color="greyCharcoal.main">
        {props.text}
      </Typography>
    </StyledDiv>
  );
};

export default Topics;
