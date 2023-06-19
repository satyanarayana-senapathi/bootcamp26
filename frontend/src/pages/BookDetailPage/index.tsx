import { Grid, styled } from "@mui/material";
import React from "react";
import Typography from "../../components/atoms/Typography";
import LinkIcon from "../../components/molecules/LinkIcon";
import AboutAuthor from "../../components/organisms/AboutAuthor";
import BookDetails from "../../components/organisms/BookDetail";
import RecommendationCards from "../../components/organisms/RecommendationCards";
import { aboutAuthorBooks } from "../../helper/aboutAuthorCards";
import { recommendationCardsData } from "../../helper/recommendationCards";
import KeyboardArrowRight from "../../assets/icons/keyboard-arrow-right-blue-24-px.svg";
import MainTemplate from "../../templates/MainTemplate";
import theme from "../../themes";
import { peersData } from "../../utils/messages/BatchmatesData";
import { batchmateCards } from "../../helper/BatchmatesCards";
import BookCard from "../../components/molecules/BookCard";

const BookDetailBatchmatesContainer = styled(Grid)({
  marginBottom: "20px",
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "max-content auto",
  justifyContent: "space-between",
  gap: "48px",
});
const BatchmatesContainer = styled(Grid)({
  border: `1px solid ${theme.palette.grey["300"]}`,
  flexDirection: "column",
  minWidth: "350px",
});
const BatchmatesContainerHeading = styled(Grid)({
  height: "54px",
  borderBottom: `1px solid ${theme.palette.grey["300"]}`,
  display: "flex",
  alignItems: "center",
});
const BatchmatesContainerFooter = styled(Grid)({
  height: "48px",
  display: "flex",
  justifyContent: "end",
  paddingRight: "30px",
});
const BatchmateRow = styled("div")({
  borderBottom: `1px solid ${theme.palette.grey["300"]}`,
  alignItems: "center",
  padding: "12px 14px",
});
const RecommendationCardsContainer = styled(Grid)({
  width: "1110px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

const BookDetailPage = () => {
  return (
    <MainTemplate header={""}>
      <div>
        <BookDetailBatchmatesContainer>
          <Grid item>
            <BookDetails />
          </Grid>
          <Grid item>
            <BatchmatesContainer item container>
              <BatchmatesContainerHeading item>
                <Typography
                  variant="h7"
                  marginLeft="14px"
                  color="#6b6c6f"
                  data-cy="batchmates-heading"
                >
                  {peersData.heading}
                </Typography>
              </BatchmatesContainerHeading>

              {batchmateCards.map((book, index) => {
                return (
                  <BatchmateRow key={index}>
                    <BookCard
                      orientation="horizontal"
                      title={{
                        variant: "body1",
                        color: "greyCharcoal.main",
                        children: book.title,
                      }}
                      src={book.src}
                      actions={[]}
                      imgSpacing={2}
                      typoSpacing={1}
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
                      avgRating={{
                        variant: "body1",
                        color: "greyCharcoal.main",
                      }}
                      avgRatingIcon={{
                        value: 4,
                        size: "small",
                      }}
                    ></BookCard>
                  </BatchmateRow>
                );
              })}
              <BatchmatesContainerFooter item>
                <LinkIcon
                  text="See more"
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
              </BatchmatesContainerFooter>
            </BatchmatesContainer>
          </Grid>
        </BookDetailBatchmatesContainer>
        <Grid item marginBottom="37px">
          <AboutAuthor data={aboutAuthorBooks} />
        </Grid>
        <RecommendationCardsContainer item container>
          <Grid item>
            <Typography variant="h3" color="#6b6c6f">
              Recommendations based on your search
            </Typography>
          </Grid>
          <Grid item>
            <LinkIcon
              text="See more"
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
          </Grid>
        </RecommendationCardsContainer>
        <Grid item marginBottom="68px">
          <RecommendationCards data={recommendationCardsData} />
        </Grid>
      </div>
    </MainTemplate>
  );
};

export default BookDetailPage;
