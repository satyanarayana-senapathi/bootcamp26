import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import { bookDetailsProps } from "../../../helper/bookDetails";
import getList from "../../../services/getList";
import { BookDetailsProps } from ".";
import putLibrary from "../../../services/putLibrary";
import postLibrary from "../../../services/postLibrary";
import {
  BookProps,
  LibraryProps,
  PostLibrary,
} from "../../../utils/messages/proptypes";

export const normalise = (totalPages: number, pagesRead: number) => {
  return ((pagesRead - 0) * 100) / (totalPages - 0);
};

export const useBook = () => {
  const [book, setBook] = useState<BookDetailsProps>({});
  const { bookId } = useParams();
  const id = parseInt(bookId || "");

  useEffect(() => {
    getList(`/books/${bookId}`).then((bookResponse: BookProps) => {
      getList(`/library/1`).then((libraryResponse) => {
        setBook(
          convertBook(
            bookResponse,
            libraryResponse.find(
              (obj: { book: { id: number } }) => obj["book"]["id"] == id
            )
          )
        );
      });
    });
  }, [bookId]);
  return { book, setBook };
};

export const updateStatus = (
  book: BookDetailsProps,
  setBook: Dispatch<SetStateAction<BookDetailsProps>>,
  event: SelectChangeEvent<string>
) => {
  const newBook = { ...book };
  newBook.status = event.target.value;
  const data: PostLibrary = {
    bookId: newBook.id || 0,
    status: event.target.value,
  };
  console.log(book.status);
  !book.status &&
    postLibrary(`/library/1`, { ...data }).then((res) => {
      console.log(res);
      setBook(newBook);
    });

  book.status &&
    putLibrary(`/library/1`, { ...data }).then((res) => {
      console.log(res);
      setBook(newBook);
    });
};

const convertBook = (book: BookProps, library: LibraryProps) => {
  return {
    ...bookDetailsProps,
    category: book?.category,
    title: book?.title,
    releaseDate: book?.releaseDate.split("T")[0],
    src: book?.image,
    id: book?.id,
    totalPages: book.totalPages,
    author: book.author.name,
    avgRating: library?.rating || 0,
    status: library?.status,
    pagesRead: library?.pageRead || 0,
  };
};
