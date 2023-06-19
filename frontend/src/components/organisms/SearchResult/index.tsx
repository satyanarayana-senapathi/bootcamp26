import React, { useEffect, useState } from "react";
import Input from "../../atoms/Input";
import { Grid, styled } from "@mui/material";
import theme from "../../../themes";
import LinkIcon from "../../molecules/LinkIcon";
import BookCard from "../../molecules/BookCard";
import { SearchResultCardProps } from "../../../helper/searchResultData";
import KeyboardRightArrow from "../../../assets/icons/keyboard-arrow-right-24-px.svg";
import search from "../../../assets/icons/search.svg";
import close from "../../../assets/icons/close.svg";
import { useNavigate } from "react-router-dom";
import getList from "../../../services/getList";
import { BookProps } from "../../../utils/messages/proptypes";
import Typography from "../../atoms/Typography";

const SearchResultCardsContainer = styled(Grid)({
  width: "398px",
  border: `1px solid ${theme.palette.grey["300"]}`,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  marginTop: "5px",
  position: "absolute",
  background: "#FFFFFF",
  zIndex: 2000,
});

const SearchResultCards = styled(Grid)({
  width: "100%",
  height: "90px",
  borderTop: `1px solid ${theme.palette.grey["300"]}`,
  display: "flex",
  alignItems: "center",
  paddingLeft: "55px",
});
const SeeMoreCard = styled(Grid)({
  height: "45px",
  borderTop: `1px solid ${theme.palette.grey["300"]}`,
  display: "flex",
  alignItems: "center",
  paddingLeft: "83px",
});
const NoResultFoundCard = styled(Grid)({
  height: "45px",
  borderTop: `1px solid ${theme.palette.grey["300"]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export interface SearchResultProps {
  data: SearchResultCardProps[];
}

const SearchResult = () => {
  const [filteredData, setFilteredData] = useState<BookProps[]>([]);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleFilter = () => {
    if (value.length != 0) {
      getList("/books/search/" + value)
        .then((res) => {
          console.log(
            "inside filtered endpoint text is : " + value + "data is : " + res
          );
          setFilteredData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    handleFilter();
  }, [value]);

  const handler = (event: {
    target: { value: React.SetStateAction<string>; focus: () => void };
  }) => {
    setValue(event.target.value);
    event.target.focus();
  };
  const clearHandler = () => {
    setValue("");
  };
  const handleSeeAll = () => {
    clearHandler();
    navigate("/result?totalResult=" + filteredData.length + "&value=" + value);
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ position: "relative" }}>
      <Input
        style={{ width: "400px", height: "38px" }}
        type="text"
        startIcon={search}
        endIcon={value.length === 0 ? "" : close}
        placeholder="Search here by book title, author or ISBN"
        onChange={handler}
        handleClear={clearHandler}
        value={value}
        autoFocus
      />
      {filteredData.length != 0 && value.length != 0 && (
        <SearchResultCardsContainer>
          {filteredData.slice(0, 4).map((card, index) => {
            return (
              <SearchResultCards item key={index}>
                <BookCard
                  id={card.id}
                  orientation="horizontal"
                  title={{
                    variant: "body2",
                    color: "greySlate.main",
                    children: card.title,
                  }}
                  src={card.image}
                  imgSpacing={2}
                  typoSpacing={1}
                  alt={"img"}
                  author={{
                    label: {
                      variant: "caption2",
                      color: "icon.main",
                      children: "By",
                    },
                    text: {
                      variant: "caption1",
                      color: "greyCharcoal.main",
                      children: card.author.name,
                    },
                  }}
                  category={{
                    label: {
                      variant: "caption2",
                      color: "icon.main",
                      children: "Field:",
                    },
                    text: {
                      variant: "caption2",
                      color: "greySlate.main",
                      children: card.category,
                    },
                  }}
                />
              </SearchResultCards>
            );
          })}
          <SeeMoreCard item>
            <LinkIcon
              text="See all results"
              hoverColor="blue"
              endIcon={KeyboardRightArrow}
              imageProps={{
                width: "7px",
                height: "10px",
              }}
              textTypography={{
                variant: "subtitle2",
                color: "primary.main",
              }}
              onClick={handleSeeAll}
              dataCy="see-more-button"
            />
          </SeeMoreCard>
        </SearchResultCardsContainer>
      )}
      {filteredData.length === 0 && value.length != 0 && (
        <SearchResultCardsContainer>
          <NoResultFoundCard item>
            <Typography variant="body2" color="#6b6c6f">
              No results found. Please try a different search term.
            </Typography>
          </NoResultFoundCard>
        </SearchResultCardsContainer>
      )}
    </div>
  );
};

export default SearchResult;
