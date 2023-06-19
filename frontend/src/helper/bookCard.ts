import { BookCardProps } from "../components/molecules/BookCard";

export const bookCardProps: BookCardProps = {
  orientation: "horizontal",
  typoSpacing: 2,
  imgSpacing: 3,
  actions: [
    { src: "/assets/icons/bookmark.svg" },
    { src: "/assets/icons/reply.svg" },
    { src: "/assets/icons/playlist.svg" },
  ],
  author: {
    label: {
      variant: "body2",
      color: "icon.main",
      children: "Label",
    },
    text: {
      variant: "subtitle2",
      color: "greyCharcoal.main",
      children: "Author",
    },
    img: {
      src: "/assets/leaf.png",
      width: "38px",
      height: "38px",
    },
  },
  category: {
    label: {
      variant: "caption2",
      color: "icon.main",
      children: "Label",
    },
    text: {
      variant: "caption2",
      color: "greyCharcoal.main",
      children: "Category",
    },
  },
  title: {
    variant: "h6",
    color: "greyCharcoal.main",
    children: "Title of the Book",
  },
  pages: {
    variant: "caption2",
    color: "greySlate.main",
    children: 200,
  },
  pagesLeft: 20,
  src: "/assets/book.jpg",
  alt: "zemoso",
  avgRatingIcon: {
    value: 3.5,
    size: "medium",
  },
  avgRating: {
    variant: "body1",
    color: "greyCharcoal.main",
  },
  totalRatings: {
    variant: "body2",
    color: "greyCharcoal.main",
    children: "(200 ratings)",
  },
  description: {
    variant: "body2",
    color: "greySlate.main",
    children: "description of the book as das d asd asd asd asd asd asd asda",
  },
};
