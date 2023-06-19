import { Box, Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import BookCard from "../../molecules/BookCard";
import BookMarkImg from "../../../assets/icons/bookmark.svg";
import ReplyImg from "../../../assets/icons/reply.svg";
import PlaylistImg from "../../../assets/icons/playlist.svg";
import { RecommendationData } from "../../../helper/recommendationCards";
const RecommendationCardsContainer = styled(Grid)({
  width: "1110px",
});
const RecommendationBookCardContainer = styled(Box)({
  width: "255px",
  height: "381px",
  border: `1px solid ${theme.palette.grey["300"]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

interface RecommendationCardsProps {
  data: RecommendationData[];
}
const RecommendationCards = ({ data }: RecommendationCardsProps) => {
  return (
    <RecommendationCardsContainer container flexDirection="column">
      <Grid item>
        <Box display="flex" justifyContent="space-between">
          {data?.map((book, index) => {
            return (
              <RecommendationBookCardContainer key={index}>
                <BookCard
                  id={book.id}
                  orientation="vertical"
                  title={{
                    variant: "h6",
                    color: "greyCharcoal.main",
                    children: book.title,
                  }}
                  src={book.src}
                  actions={[
                    { src: BookMarkImg },
                    { src: ReplyImg },
                    { src: PlaylistImg },
                  ]}
                  imgSpacing={3}
                  typoSpacing={2}
                  alt={"img"}
                  author={{
                    label: {
                      variant: "body2",
                      color: "icon.main",
                      children: "Author",
                    },
                    text: {
                      variant: "subtitle2",
                      color: "greyCharcoal.main",
                      children: book.author,
                    },
                  }}
                  totalRatings={{
                    variant: "caption2",
                    color: "greyCharcoal.main",
                    children: "(200 ratings)",
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
              </RecommendationBookCardContainer>
            );
          })}
        </Box>
      </Grid>
    </RecommendationCardsContainer>
  );
};

export default RecommendationCards;
