import React from "react";
import Typography from "../../atoms/Typography";
import { styled } from "@mui/material";
import Image from "../../atoms/Image";
import { getTasks } from "./hooks";

const StyledDiv = styled("div")(
  ({ theme }) => `
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: grid;
  grid-template-columns: max-content auto;
  padding: 9px 29px 13px 19px;
  gap: ${theme.spacing(3)};
`
);

const StyledImage = styled(Image)(
  () => `
  width: 33px;
  height: 40px;
  object-fit: contain;
`
);

const StyledWrapper = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(8)};
`
);

const StyledTypography = styled(Typography)(
  ({ theme }) => `
  margin-bottom: ${theme.spacing(4)};
  text-transform: uppercase;
`
);

export interface TaskCardProps {
  title: string;
  value: number;
  src: string;
  alt: string;
}

const TaskCard: React.FC = () => {
  const taskList = getTasks();

  return (
    <StyledWrapper>
      {taskList?.map((data: TaskCardProps, index: number) => (
        <StyledDiv key={index}>
          <StyledImage src={data.src} alt={data.alt} data-cy={`task-card-${index+1}-image`}></StyledImage>
          <div>
            <StyledTypography
              variant="body2"
              component="h4"
              color="greySlate.main"
              data-cy={`task-card-${index+1}-title`}
            >
              {data.title}
            </StyledTypography>

            <Typography variant="h2" component="h4" color="greyCharcoal.main">
              {data.value}
            </Typography>
          </div>
        </StyledDiv>
      ))}
    </StyledWrapper>
  );
};

export default TaskCard;
