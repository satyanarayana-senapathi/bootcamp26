import { Box, Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import BookCard from "../../molecules/BookCard";
import AboutAuthorImg from "../../../assets/aboutauthor.png";
import Image from "../../atoms/Image";
import LinkIcon from "../../molecules/LinkIcon";
import KeyboardArrowRight from "../../../assets/icons/keyboard-arrow-right-blue-24-px.svg";
import { authorData } from "../../../utils/messages/AboutAuthorData";
import { AuthorData } from "../../../helper/aboutAuthorCards";

const AuthorContainer = styled(Grid)({
  width: "729px",
  border: `1px solid ${theme.palette.grey["300"]}`,
});
export interface AboutAuthorProps {
  data: AuthorData[];
}
const AboutAuthor = ({ data }: AboutAuthorProps) => {
  return (
    <AuthorContainer container flexDirection="column" data-cy="about-author">
      <Grid
        item
        style={{
          padding: "13px 0px 11px 18px",
          borderBottom: `1px solid ${theme.palette.grey["300"]}`,
        }}
      >
        <Typography variant="h7" color="#6b6c6f" data-cy="about-author-heading">
          {authorData.aboutAuthorHeading}
        </Typography>
      </Grid>
      <Grid item container flexDirection="row" marginTop="12px">
        <Grid
          item
          width="98px"
          justifyContent="center"
          sx={{ display: "flex" }}
        >
          <Image
            src={AboutAuthorImg}
            style={{ width: "80px", height: "80px" }}
            data-cy="about-author-image"
          />
        </Grid>
        <Grid
          item
          width="120px"
          sx={{ marginLeft: "12px", marginRight: "16px" }}
        >
          <Typography variant="h4" data-cy="about-author-name">
            {authorData.name}
          </Typography>
          <Typography
            variant="body2"
            color="#6b6c6f"
            sx={{ marginTop: "4px" }}
            data-cy="about-author-followers"
          >
            {authorData.followers}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: "120px",
              height: "30px",
              marginTop: "8px",
              textTransform: "none",
              border: `1px solid ${theme.palette.primary.main}`,
            }}
            data-cy="about-author-button"
          >
            <Typography variant="body1">{authorData.button1Label}</Typography>
          </Button>
        </Grid>
        <Grid item width="465px">
          <Typography
            variant="body2"
            color="#3e3f42"
            data-cy="about-author-description"
          >
            {authorData.description}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        marginTop="19px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          sx={{ float: "left", marginLeft: "18px", color: "#6b6c6f" }}
          data-cy="about-author-books-heading"
        >
          {authorData.booksSectionHeading}
        </Typography>
        <Button
          variant="text"
          sx={{
            float: "right",
            marginRight: "18px",
            color: theme.palette.primary.main,
          }}
        >
          <LinkIcon
            text={authorData.button2Label}
            endIcon={KeyboardArrowRight}
            hoverColor="red"
            imageProps={{
              width: "7px",
              height: "10px",
            }}
            textTypography={{
              variant: "subtitle2",
              color: "primary.main",
            }}
          />
        </Button>
      </Grid>
      <Grid item margin="0px 10px 18px 10px">
        <Box display="flex" justifyContent="space-around">
          {data?.map(
            (
              book: { title: string; src: string; category: string },
              index: React.Key | null | undefined
            ) => {
              return (
                <BookCard
                  key={index}
                  orientation="horizontal"
                  title={{
                    variant: "body1",
                    color: "greyCharcoal.main",
                    children: book.title,
                  }}
                  src={book.src}
                  imgSpacing={2}
                  typoSpacing={3}
                  alt={"img"}
                  category={{
                    label: {
                      variant: "caption2",
                      color: "icon.main",
                      children: "Field",
                    },
                    text: {
                      variant: "caption2",
                      color: "greyCharcoal.main",
                      children: book.category,
                    },
                  }}
                  avgRating={{
                    variant: "body1",
                    color: "greyCharcoal.main",
                  }}
                  avgRatingIcon={{
                    value: 4,
                    size: "small",
                  }}
                ></BookCard>
              );
            }
          )}
        </Box>
      </Grid>
    </AuthorContainer>
  );
};

export default AboutAuthor;
