import React from "react";
import { styled } from "@mui/material";
import Typography, { CustomTypographyProps } from "../../atoms/Typography";
import Image from "../../atoms/Image";
import Rating, { RatingProps } from "@mui/material/Rating";
import Divider from "../../atoms/Divider";
import { Link } from "react-router-dom";

const GroupTypography = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: max-content auto;
  gap: ${theme.spacing(3)};
  align-items: center;
`
);

const StyledActionsDiv = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(3,auto);
  align-items: center;
  justify-content: start;
  gap: ${theme.spacing(5)};
`
);

const StyledRatingDiv = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: max-content max-content max-content;
  gap: ${theme.spacing(2)};
  align-items: center;
`
);

interface BookCardPropsWithLabel {
  label: CustomTypographyProps;
  text: CustomTypographyProps;
  img?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export interface BookCardProps {
  orientation: "horizontal" | "vertical";
  actions?: React.ImgHTMLAttributes<HTMLImageElement>[];
  imgSpacing: number;
  typoSpacing: number;
  author?: BookCardPropsWithLabel;
  category?: BookCardPropsWithLabel;
  title: CustomTypographyProps;
  pages?: CustomTypographyProps;
  pagesLeft?: number;
  src: string;
  alt: string;
  avgRatingIcon?: RatingProps;
  avgRating?: CustomTypographyProps;
  totalRatings?: CustomTypographyProps;
  description?: CustomTypographyProps;
  id?: number;
}

const BookCard: React.FC<BookCardProps> = (props: BookCardProps) => {
  const StyledImage = styled(Image)(() =>
    props.orientation === "horizontal"
      ? `
        width: auto;
        height: 100%;
        object-fit: cover;
        `
      : `
        width: 100%;
        height: 190px;
        margin: auto;
        object-fit: cover;
        `
  );

  const StyledTyposDiv = styled("div")(
    ({ theme }) => `
    display: grid;
    gap: ${theme.spacing(props.typoSpacing)};
  `
  );

  const StyledWrapper = styled(Link)(({ theme }) =>
    props.orientation === "horizontal"
      ? `
    width: max-content;
    display: grid;
    grid-template-columns: max-content auto;
    gap: ${theme.spacing(props.imgSpacing)};
    overflow: hidden;
    text-decoration: none;
  `
      : `
    width: max-content;
    display: grid;
    gap: ${theme.spacing(props.imgSpacing)};
    text-decoration: none;
  `
  );

  const GroupAuthorDiv = props.author?.img
    ? styled("div")(
        ({ theme }) => `
        display: grid;
        gap: ${theme.spacing(1)};
      `
      )
    : GroupTypography;

  const StyledDivider = styled(Divider)(
    () => `
        margin: 0 -100%;
      `
  );

  const str = `${props.pagesLeft} left / ${props.pages?.children} pages`;
  return (
    <StyledWrapper to={`/bookDetailView/${props.id}`}>
      <StyledImage src={props.src} alt={props.alt}></StyledImage>
      <StyledTyposDiv>
        <Typography {...props.title}></Typography>

        {props.description && (
          <Typography
            {...props.description}
            sx={{ maxWidth: "295px" }}
          ></Typography>
        )}
        {props.author && (
          <GroupTypography>
            {props.author.img && <Image {...props.author.img}></Image>}
            <GroupAuthorDiv>
              <Typography {...props.author.label}></Typography>
              <Typography {...props.author.text}></Typography>
            </GroupAuthorDiv>
          </GroupTypography>
        )}
        {props.avgRating && (
          <StyledRatingDiv>
            <Rating {...props.avgRatingIcon} precision={0.5} />
            <Typography {...props.avgRating}>
              {props.avgRatingIcon?.value}
            </Typography>
            <Typography {...props.totalRatings}></Typography>
          </StyledRatingDiv>
        )}

        {props.category && (
          <GroupTypography>
            <Typography {...props.category.label}></Typography>
            <Typography {...props.category.text}></Typography>
          </GroupTypography>
        )}
        {props.pages && (
          <GroupTypography>
            <Typography
              variant={props.pages.variant}
              component="h5"
              color={props.pages.color}
            >
              {str}
            </Typography>
          </GroupTypography>
        )}
        {props.orientation === "horizontal" && props.actions && (
          <StyledActionsDiv>
            {props.actions.map((action, index) => (
              <Image {...action} key={index}></Image>
            ))}
          </StyledActionsDiv>
        )}
      </StyledTyposDiv>
      {props.orientation === "vertical" && (
        <StyledDivider orientation="horizontal"></StyledDivider>
      )}
      {props.orientation === "vertical" && props.actions && (
        <StyledActionsDiv>
          {props.actions.map((action, index) => (
            <Image {...action} key={index}></Image>
          ))}
        </StyledActionsDiv>
      )}
    </StyledWrapper>
  );
};

export default BookCard;
