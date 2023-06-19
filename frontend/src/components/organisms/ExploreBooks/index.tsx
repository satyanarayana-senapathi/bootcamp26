import React from "react";
import { styled } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import { getExploreBookProps, getExploreBooks } from "./hooks";
import { BookProps } from "../../../utils/messages/proptypes";

const StyledWrapper = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  gap: ${theme.spacing(8)};
`
);

const StyledDiv = styled("div")(
  ({ theme }) => `
  border: solid 1px ${theme.palette.grey[300]};
  padding: 20px 26px 20px 26px;
  border-radius: 4px;
  overflow: hidden;
`
);

export interface ExploreBooksData {
  author: string;
  title: string;
  src: string;
  alt: string;
  avgRating: number;
  totalRating: number;
  description: string;
  authorImg: string;
  authorAlt: string;
  id: number;
}

export interface ExploreBooksProps {
  search: string;
  page: number;
}

const ExploreBooks: React.FC<ExploreBooksProps> = (
  props: ExploreBooksProps
) => {
  const bookList = getExploreBooks(props.page, props.search);

  return (
    <StyledWrapper>
      {bookList?.map((data: BookProps, index: number) => {
        const newProps = getExploreBookProps(data);
        return (
          <StyledDiv key={index} data-cy={`explore-book-${index + 1}`}>
            <BookCard {...newProps}></BookCard>
          </StyledDiv>
        );
      })}
    </StyledWrapper>
  );
};

export default ExploreBooks;
