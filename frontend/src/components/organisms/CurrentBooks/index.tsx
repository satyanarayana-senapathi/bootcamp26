import React from "react";
import { styled } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import { getCurrentBookProps, getCurrentBooks } from "./hooks";
import { LibraryProps } from "../../../utils/messages/proptypes";

const StyledWrapper = styled("div")(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: ${theme.spacing(2)};
`
);

const StyledDiv = styled("div")(
  ({ theme }) => `
  border: solid 1px ${theme.palette.grey[300]};
  padding: 14px 10px 15px 10px;
  border-radius: 4px;
`
);

export interface CurrentBooksProps {
  author: string;
  category: string;
  title: string;
  totalPage: number;
  leftPage: number;
  src: string;
  alt: string;
  id: number;
}

const CurrentBooks: React.FC = () => {
  const bookList = getCurrentBooks();

  return (
    <StyledWrapper>
      {bookList?.map((data: LibraryProps, index: number) => {
        const newBook = getCurrentBookProps(data);
        return (
          <StyledDiv key={index} data-cy={`currently-reading-book-card-${index+1}`}>
            <BookCard {...newBook}></BookCard>
          </StyledDiv>
        );
      })}
    </StyledWrapper>
  );
};

export default CurrentBooks;
