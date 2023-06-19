import { useEffect, useState } from "react";
import getList from "../../../services/getList";
import { BookProps } from "../../../utils/messages/proptypes";
import { BookCardProps } from "../../molecules/BookCard";

export const getExploreBooks = (pages: number, search: string) => {
  const [bookList, setBookList] = useState<BookProps[]>([]);
  useEffect(() => {
    getList("/books/search/" + search)
      .then((res) => {
        setBookList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pages, search]);
  const endBook = pages * 8;
  const startBook = endBook - 8;
  return bookList.slice(startBook, endBook);
};

export const getExploreBookProps = (data: BookProps) => {
  const res: BookCardProps = {
    id: data.id,
    orientation: "horizontal",
    imgSpacing: 4,
    typoSpacing: 4,
    title: {
      variant: "h4",
      children: data.title,
      color: "greyCharcoal.main",
    },
    src: data.image,
    alt: "book",
    author: {
      label: {
        variant: "caption2",
        children: "Author",
        color: "icon.main",
      },
      text: {
        variant: "subtitle2",
        children: data.author.name,
        color: "greyCharcoal.main",
      },
      img: {
        src: data.author.image,
        alt: "author",
        width: "38px",
        height: "38px",
      },
    },
    avgRatingIcon: {
      value: 4,
      size: "small",
    },
    avgRating: {
      variant: "body1",
      color: "greyCharcoal.main",
    },
    totalRatings: {
      variant: "body2",
      color: "greyCharcoal.main",
      children: 500,
    },
    description: {
      variant: "body2",
      color: "greySlate.main",
      children: data.description,
    },
    actions: [
      { src: "/assets/icons/bookmark.svg" },
      { src: "/assets/icons/reply.svg" },
      { src: "/assets/icons/playlist.svg" },
    ],
  };
  return res;
};
