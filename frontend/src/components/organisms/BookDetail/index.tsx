import React from "react";
import {
  CircularProgress,
  MenuItem,
  Rating,
  Select,
  styled,
} from "@mui/material";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import LinkIcon from "../../molecules/LinkIcon";
import { normalise, updateStatus, useBook } from "./hook";

const GroupTypography = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: max-content auto;
  gap: ${theme.spacing(3)};
  align-items: center;
`
);

const DescriptionGroup = styled("div")(
  () => `
  grid-column: 1/4;
  grid-row: 2;
  max-width: 1024px
`
);

const GroupInfo = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: max-content auto;
  gap: ${theme.spacing(1)};
  align-items: center;
`
);

const StyledActionsDiv = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(4,auto);
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

const StyledTyposDiv = styled("div")(
  ({ theme }) => `
    display: grid;
    gap: ${theme.spacing(4)};
  `
);

const StyledWrapper = styled("div")(
  ({ theme }) =>
    `
    width: max-content;
    display: grid;
    grid-template-columns: min-content auto auto;
    gap: ${theme.spacing(5)};
    overflow: hidden;
  `
);

const StyledImage = styled(Image)(
  () =>
    `
    width: auto;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 4px
    `
);

const StyledRating = styled(Rating)(
  () =>
    `
    gap: 6px;
    `
);

const ProgressGroup = styled("div")(
  () =>
    `
    position: relative;
    text-align: center;
    width: max-content;
    margin-left: auto;
    `
);

const StyledButton = styled(Button)(
  () =>
    `
    width: max-content;
    `
);

const FrontCircularProgress = styled(CircularProgress)(
  () =>
    `
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) rotate(-90deg)!important
    `
);

const BackCircularProgress = styled(CircularProgress)(
  () =>
    `
      color: #ebf4f7;
    `
);
export interface BookDetailsProps {
  id?: number;
  author?: string;
  category?: string;
  title?: string;
  src?: string;
  alt?: string;
  avgRating?: number;
  description?: string;
  totalRatings?: number;
  releaseDate?: string;
  language?: string;
  totalPages?: number;
  pagesRead?: number;
  status?: string;
}

const BookDetails: React.FC = () => {
  const { book, setBook } = useBook();
  return (
    <>
      <StyledWrapper>
        <StyledImage
          src={book.src}
          alt={book.alt}
          data-cy="book-detail-image"
        ></StyledImage>
        <StyledTyposDiv>
          <Typography
            variant="h3"
            color="greyCharcoal.main"
            data-cy="book-detail-title"
          >
            {book.title}
          </Typography>
          <GroupTypography>
            <Typography variant="body2" color="icon.main">
              Author
            </Typography>
            <Typography
              variant="h7"
              color="greyCharcoal.main"
              data-cy="book-detail-author"
            >
              {book.author}
            </Typography>
          </GroupTypography>

          <GroupTypography>
            <Typography variant="body2" color="icon.main">
              Category
            </Typography>
            <Typography variant="subtitle2" data-cy="book-detail-category">
              {book.category}
            </Typography>
          </GroupTypography>
          <StyledRatingDiv>
            <StyledRating
              value={book.avgRating || 0}
              precision={0.5}
              size="small"
            />
            <Typography
              variant="body1"
              color="greyCharcoal.main"
              data-cy="book-detail-rating"
            >
              {book.avgRating || 0}
            </Typography>
            <Typography
              variant="body2"
              color="greyCharcoal.main"
              data-cy="book-detail-total-rating"
            >
              ({book.totalRatings || 0} reviews)
            </Typography>
          </StyledRatingDiv>
          <GroupTypography>
            <GroupInfo>
              <Image src="/assets/icons/new-releases.svg"></Image>
              <Typography
                variant="body2"
                color="greySlate.main"
                data-cy="book-detail-date"
              >
                Release Date: {book.releaseDate}
              </Typography>
            </GroupInfo>
            <GroupInfo>
              <Image src="/assets/icons/language.svg"></Image>
              <Typography
                variant="body2"
                color="greySlate.main"
                data-cy="book-detail-language"
              >
                Language: {book.language}
              </Typography>
            </GroupInfo>
          </GroupTypography>

          <StyledActionsDiv>
            <Image src="/assets/icons/bookmark.svg"></Image>
            <Image src="/assets/icons/playlist.svg"></Image>
            <Image src="/assets/icons/reply.svg"></Image>
            <Image src="/assets/icons/format.svg"></Image>
          </StyledActionsDiv>
          <StyledButton variant="contained" disableRipple>
            <Select
              data-cy="book-detail-select"
              value={book.status || ""}
              defaultValue={book.status || ""}
              onChange={(event) => updateStatus(book, setBook, event)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              variant={"standard"}
              sx={{ color: "white!important" }}
              IconComponent={() => (
                <Image src="/assets/icons/arrow-drop-down.svg"></Image>
              )}
              disableUnderline
              data-testId="select"
            >
              <MenuItem disabled value="">
                Start Reading
              </MenuItem>

              <MenuItem
                value="current"
                role="current"
                data-cy="book-detail-current"
              >
                Reading
              </MenuItem>
              <MenuItem
                value="finished"
                role="finished"
                data-cy="book-detail-finished"
              >
                Finished
              </MenuItem>
            </Select>
          </StyledButton>
        </StyledTyposDiv>
        <ProgressGroup data-cy="book-detail-progress">
          <BackCircularProgress
            variant="determinate"
            thickness={8}
            size={50}
            value={100}
          />
          <FrontCircularProgress
            variant="determinate"
            value={normalise(book.totalPages || 0, book.pagesRead || 0)}
            thickness={8}
            size={50}
          />
          <Typography variant="caption2" component="h3" color="greySlate.main">
            {book.pagesRead} read / {book.totalPages} pages
          </Typography>
        </ProgressGroup>
        <DescriptionGroup>
          <Typography
            variant="h4"
            component="h3"
            color="greyCharcoal.main"
            sx={{ marginBottom: "8px" }}
          >
            Book Description
          </Typography>
          <Typography
            variant="h7"
            component="h3"
            color="greySlate.main"
            data-cy="book-detail-description"
          >
            {book.description}
          </Typography>
          <LinkIcon
            endIcon="/assets/icons/arrow-right.svg"
            text="See More"
            textTypography={{
              variant: "h7",
              color: "primary.500",
            }}
          ></LinkIcon>
        </DescriptionGroup>
      </StyledWrapper>
    </>
  );
};

export default BookDetails;
