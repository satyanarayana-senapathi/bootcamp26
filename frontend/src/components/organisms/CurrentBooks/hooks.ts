import { useEffect, useState } from "react";
import getList from "../../../services/getList";
import { LibraryProps } from "../../../utils/messages/proptypes";
import { BookCardProps } from "../../molecules/BookCard";

export const getCurrentBooks = () => {
  const [bookList, setBookList] = useState<LibraryProps[]>([]);
  useEffect(() => {
    getList("/library/1?status=current")
      .then((res) => {
        setBookList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return bookList.slice(0, 4);
};

export const getCurrentBookProps = (data: LibraryProps) => {
  const res: BookCardProps = {
    id: data.id,
    orientation: "horizontal",
    imgSpacing: 2,
    typoSpacing: 2,
    title: {
      variant: "subtitle1",
      children: data.book.title,
      color: "greyCharcoal.main",
    },
    src: data.book.image,
    alt: "book",
    author: {
      label: {
        variant: "body2",
        children: "Author",
        color: "icon.main",
      },
      text: {
        variant: "body2",
        children: data.book.author.name,
        color: "greyCharcoal.main",
      },
    },
    category: {
      label: {
        variant: "caption2",
        children: "Category",
        color: "icon.main",
      },
      text: {
        variant: "body2",
        children: data.book.category,
        color: "greyCharcoal.main",
      },
    },
    pages: {
      variant: "caption2",
      color: "greySlate.main",
      children: data.book.totalPages,
    },
    pagesLeft: data.book.totalPages - data.pageRead,
  };
  return res;
};
