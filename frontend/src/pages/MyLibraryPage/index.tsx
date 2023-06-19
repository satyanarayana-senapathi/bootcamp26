import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Banner from "../../components/organisms/Banner";
import BannerImg from "../../assets/banner.png";
import TaskCard from "../../components/organisms/TaskCard";
import Typography from "../../components/atoms/Typography";
import LinkIcon from "../../components/molecules/LinkIcon";
import KeyboardArrowRight from "../../assets/icons/keyboard-arrow-right-24-px.svg";
import messages from "../../utils/messages";
import Topics from "../../components/molecules/Topics";
import CurrentBooks from "../../components/organisms/CurrentBooks";
import RecommendationCards from "../../components/organisms/RecommendationCards";
import { recommendationCardsData } from "../../helper/recommendationCards";
const StyledPage = styled("div")({
  width: "1440px",
});

const StyledBox = styled(Box)({
  marginTop: "30px",
  width: "1112px",
});
const StyledWrapper = styled("div")(
  ({ theme }) => `
  margin-top:19px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${theme.spacing(8)};
`
);

const Link = () => {
  return (
    <LinkIcon
      text="See more"
      endIcon={KeyboardArrowRight}
      imageProps={{
        width: "7px",
        height: "10px",
      }}
      textTypography={{
        variant: "subtitle2",
        color: "primary.main",
      }}
    />
  );
};
const TopicsCards = () => {
  return (
    <StyledWrapper>
      {messages.topics.map((topic, index) => (
        <Topics key={index} src={topic.src} text={topic.text} alt={topic.alt} />
      ))}
    </StyledWrapper>
  );
};
const MyLibrary: React.FC = () => {
  return (
    <StyledPage>
      <Container fixed sx={{ marginTop: "30px" }} data-testid="body">
        <Banner bannerBackground={`url(${BannerImg})`}>Discover</Banner>
        <StyledBox>
          <TaskCard />
        </StyledBox>
        <StyledBox>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h3">Books you are reading</Typography>
            </Box>
            <Link />
          </Box>
          <StyledBox>
            <CurrentBooks />
          </StyledBox>
        </StyledBox>
        <StyledBox>
          <Typography variant="h3">Recommendations</Typography>
          <Box sx={{ display: "flex", marginTop: "8px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" color="icon.main">
                Based on your search history
              </Typography>
            </Box>
            <Link />
          </Box>
          <StyledBox>
            <RecommendationCards data={recommendationCardsData} />
          </StyledBox>
          <Box sx={{ display: "flex", marginTop: "30px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" color="icon.main">
                People you are following also read
              </Typography>
            </Box>
            <Link />
          </Box>
          <StyledBox>
            <RecommendationCards data={recommendationCardsData} />
          </StyledBox>
        </StyledBox>
        <StyledBox>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h3">Topics you follow</Typography>
            </Box>
            <Link />
          </Box>
          <TopicsCards />
        </StyledBox>
        <StyledBox>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h3">Top ratings</Typography>
            </Box>
            <Link />
          </Box>
          <StyledBox>
            <RecommendationCards data={recommendationCardsData} />
          </StyledBox>
        </StyledBox>
      </Container>
    </StyledPage>
  );
};

export default MyLibrary;
